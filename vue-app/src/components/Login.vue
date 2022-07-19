<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="mt-5">Login</h1>
                <hr>
                <form-tag @myevent="submitHandler" name="myform" event="myevent">

                    <text-input
                    v-model="email"
                        label="Email"
                        type="email"
                        name="email"
                        required="true">
                    </text-input>

                    <text-input
                         v-model="password"
                        label="Password"
                        type="password"
                        name="password"
                        required="true">
                    </text-input>

                    <hr />

                    Email: {{email}}

                    <hr>
                    <input type="submit" class="btn btn-primary" value="Login">
                </form-tag>
            </div>
        </div>
    </div>
</template>

<script>
import FormTag from './forms/FormTag.vue'
import TextInput from './forms/TextInput.vue'
import { store } from './store.js'

export default {
    name: 'login',
    components: {
        FormTag, 
        TextInput,
    },
    data(){
        return {
            email: "", // initially has no value
            password: "",
            store,
             
        }
    },
    methods: {
        submitHandler() {
            console.log("submitHandler called - success!");
              
            const payload = {
               email: this.email,
               password: this.password,
            }

            const requestOptions = {
                method: "POST",
                body: JSON.stringify(payload), // make the string the payload.
            }

            fetch("http://localhost:8081/users/login", requestOptions)
            .then((Response) => Response.json()) // convert to 
            .then((response) => {
                if (response.error){
                   console.log("Error:", response.message); // it comes from our backend
                }else{
                  console.log("token:", response.data.token.token);
                  store.token = response.data.token.token;
                }
            })
        }
    }
}
</script>
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
import router from './../router/index.js'
import notie from 'notie'

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
            .then((response) => response.json()) // convert to 
            .then((response) => {
                if (response.error){
                   console.log("Error:", response.message); // it comes from our backend
                   notie.alert({
                    type: 'error',
                    text: response.message,
                     //stay: true,
                     //position: 'bottom'
                   })
                }else{
                  console.log("Token:", response.data.token.token);
                  store.token = response.data.token.token;

                  store.user = {
                    id: response.data.user.id,
                    first_name: response.data.user.first_name,
                    last_name: response.data.user.last_name,
                    email: response.data.user.email,
                  }
                  
                  // Save info to the cookie
                  let date = new Date();
                  let expDays = 1 // cookie will last one day
                  date.setTime(date.getTime() + (expDays * 24 * 60 * 60* 1000)); // 24 hours 60 minutes 60 seconds
                  const expires = "expires=" + date.toUTCString();
                  
                  // Set the cookie
                   document.cookie = "_site_data="
                   + JSON.stringify(response.data)
                   + "; "
                   + expires
                   + "; path=/; SameSite=strict; Secure;"
                  router.push("/"); // It will take us to homepage

                }
            })
        }
    }
}
</script>
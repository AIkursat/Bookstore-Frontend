<template>
  <div class="container">
    <div class="row">
      <div class="row">
        <h1 class="mt-3">User</h1>
         <hr>
                <form-tag @userEditEvent="submitHandler" name="userform" event="userEditEvent">

                    <text-input
                        v-model="user.first_name"
                        type="text"
                        required="true"
                        label="First Name"
                        :value="user.first_name"
                        name="first-name"></text-input>

                    <text-input
                        v-model="user.last_name"
                        type="text"
                        required="true"
                        label="Last Name"
                        :value="user.last_name"
                        name="last-name"></text-input>

                    <text-input
                        v-model="user.email"
                        type="email"
                        required="true"
                        label="Email"
                        :value="user.email"
                        name="email"></text-input>

                    <text-input
                        v-if="this.user.id === 0"
                        v-model="user.password"
                        type="password"
                        required="true"
                        label="Password"
                        :value="user.password"
                        name="password"></text-input>

                    <text-input
                        v-else
                        v-model="user.password"
                        type="password"
                        label="Password"
                        :value="user.password"
                        name="password"></text-input>
                        <hr>
                        </form-tag>
      </div>
    </div>
  </div>
</template>

<script>

import Security from './security.js'
import FormTag from './forms/FormTag.vue'
import TextInput from './forms/TextInput.vue'
import notie from 'notie'

export default {
  beforeMount() {
    Security.requireToken();
 
    if(parseInt(String(this.$route.params.userId), 10) > 0) { // based 10
     // editing an existing user
     // TODO - get user from db

    } 
  },  
   data(){
    return {
      user: {
        id: 0,
        first_name: "",
        last_name: "",
        email: "",
        password: "",
      }
    }
   },
   components: {
    'fomr-tag': FormTag,
    'text-input': TextInput,

   },
   methods: {
    submitHandler() {

    }

   },

}
</script>
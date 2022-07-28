<template>
  <div class="container">
    <div class="row">
      <div class="row">
        <h1 class="mt-3">All Users</h1>
      </div>
      <hr>

      <table class="table table-compact table-striped">
        <thead>
          <tr>
            <th>User</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody> 
          <tr v-for="u in this.users" v-bind:key="u.id">
            <td>
              <router-link :to="`/admin/users/${u.id}`">{{u.last_name}}, {{u.first_name}}</router-link>
            </td>
             <td>{{u.email}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Security from './security.js'
import notie from 'notie'

export default{
  data() {
    return{
      users: [],
    }
  },
  beforeMount() {
    Security.requireToken();

    fetch("http://localhost:8081/admin/users", Security.requestOptions(""))
    .then((response) => response.json())
    .then((response) =>{
      if(response.error){
         notie.alert({
          type: "error:",
          text: response.message,
         })
      }else{
        this.users = response.data.users;
      }
    })
    .catch((error) => {
          notie.alert({
          type: "error:",
          text: error,
         })
    });
  },
}

</script>
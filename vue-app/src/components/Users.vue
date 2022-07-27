<template>
  <div class="container">
    <div class="row">
      <div class="row">
        <h1 class="mt-3">All Users</h1>
      </div>
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
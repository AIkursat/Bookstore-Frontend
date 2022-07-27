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

export default{
  beforeMount() {
    Security.requireToken();
  },
}

</script>
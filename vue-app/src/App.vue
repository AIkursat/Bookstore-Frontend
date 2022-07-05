<template>
  <HeaderPart />

  <div>
    <router-view/>
  </div>
  <FooterPart />
</template>

<script>
import HeaderPart from "./components/HeaderPart.vue"

import FooterPart from "./components/FooterPart.vue"
export default {
  name: "App",
  components: {
    HeaderPart,
    FooterPart,
  }
}
</script>

<style>
</style>
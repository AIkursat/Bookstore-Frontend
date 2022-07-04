<template>
  <HeaderPart />
  <BodyPart />
  <FooterPart />
</template>

<script>
import HeaderPart from "./components/HeaderPart.vue"
import BodyPart from "./components/BodyPart.vue"
import FooterPart from "./components/FooterPart.vue"
export default {
  name: "App",
  components: {
    HeaderPart,
    BodyPart,
    FooterPart,
  }
}
</script>

<style>
</style>
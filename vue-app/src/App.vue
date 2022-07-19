<template>
  <Header />
  <div>
    <router-view/>
  </div>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue"

import Footer from "./components/Footer.vue"
import { store } from './components/store'
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      store
    }
  }

}
</script>

<style>
</style>
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
import { store } from './components/store.js'

const getCookie = (name) => {
  return document.cookie.split("; ").reduce((r, v) => {
    const parts = v.split("=");
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, "");
}

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      store
    }
  },
  beforeMount() {
    // check for a cookie
    let data = getCookie("_site_data");

    if (data !== "") {
      let cookieData = JSON.parse(data);

      // update store
      store.token = cookieData.token.token;
      store.user = {
        id: cookieData.user.id,
        first_name: cookieData.user.first_name,
        last_name: cookieData.user.last_name,
        email: cookieData.user.email,
      }
    }
  },
}
</script>

<style>

</style>
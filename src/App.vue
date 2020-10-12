/* eslint-disable */
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <MyNav />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import MyNav from "./components/MyNav.vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    MyNav,
  },
};
</script>
<style src="./assets/css/style.css"></style>

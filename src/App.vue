<template>
  <MyNav />
  <Home />
   <router-view></router-view>
  <Footer />

</template>

<script>
import MyNav from "@/components/MyNav.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components:{
    MyNav,
    Footer,
  }
};
</script>
<style lang="scss">
* {
  box-sizing: border-box;
  // border: 1px solid red;
  font-family: "Source Code Pro", monospace;
}
body,
html {
  background-color: black;
  width: 100%;
  margin: 0;
  padding: 0px;
}
#app{
  height: 95vh;
  color:white;
 
}
</style>

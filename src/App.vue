<template>  
  <div id="app">
    <LayoutComp/>
    <SidebarComp/>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LayoutComp from "@/components/LayoutComp.vue";
import SidebarComp from "@/components/SidebarComp.vue";

export default {
  components: {
    LayoutComp,
    SidebarComp,
  },

};


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
  margin-top: 60px;
  margin-top: 60px;
}
</style>

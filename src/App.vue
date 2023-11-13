<template>  
  <div id="app">
    <PageLayout/>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import PageLayout from "@/components/PageLayout.vue";

export default {
  components: {
    PageLayout,
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

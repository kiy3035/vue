<template>  
  <div id="app">
    <LayoutComp/>
    <div id="content">
      <AddVideoComp v-if="shouldShowAddVideo"/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LayoutComp from "@/components/LayoutComp.vue";
import AddVideoComp from "@/components/AddVideoComp.vue";

export default {
  components: {
    AddVideoComp,
    LayoutComp
  },data() {
    return {
      shouldShowAddVideo: true, // 기본적으로는 표시
    };
  },
    // LayoutComp,
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

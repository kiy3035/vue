<template>  
  <div id="app">
    <LayoutComp @childData="receiveDataFromChild"/>         <!--    @ 자식 => 부모     -->
    <SidebarComp :ParentsToChild="ParentsToChildValue"/>   <!--    : 부모 => 자식     -->
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
  data(){
    return{
      ParentsToChildValue: null,
    }
  },
  methods: {
    receiveDataFromChild(value) {
      console.log("!!:" + value); // 자식으로부터 받은 데이터 처리
      this.ParentsToChildValue = value;
    },
  }

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

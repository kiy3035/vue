<template>  
  <nav>
    <PageLayout/>
    <router-link to="/">Home</router-link> |
    <router-link to="/abc">게시판</router-link> |
    <router-link to="/gallery">갤러리</router-link> 
    <router-view></router-view>
  </nav>
</template>

<script>
  // import PageLayout from '@/components/PageLayout.vue';
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

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/web2gether.png">
    <HelloWorld/>
    <PageLayout/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

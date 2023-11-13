<template>
  <div style="width:70%; margin: 0 auto;">
    <header>
      <TopComp/>
      <HeaderComp/>
    </header>
  </div>
</template>

<script>
  import HeaderComp from './HeaderComp';
  import TopComp from './TopComp';

  export default {
  name: 'App',
  components: {
    HeaderComp,
    TopComp
  },
  data() {
    return {};
  },
  
};
</script>
<template>
  <div style="width:70%; margin: 0 auto;">
    <header>
      <TopComp @childData="receiveDataFromChild"/>
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
  methods: {
    receiveDataFromChild(dataFromChild) {
      console.log(dataFromChild); // 자식으로부터 받은 데이터 처리
      this.$emit('childData', dataFromChild); // 부모페이지로 한번 더 전달
    },
  }
};
</script>
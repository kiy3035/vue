<template>
    <h1>
        {{userEmail}}
    </h1>
</template>


<script>
export default {
  data() {
    return {
      userEmail: "", // userEmail을 Vue 데이터로 정의
    };
  },
  mounted() {
    this.userEmail = sessionStorage.getItem("userEmail");
  },
};
</script>
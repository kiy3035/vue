<template>
  <div class="home">
    <AddVideoComp :receivedValue="receivedValueFromShow" v-if="showIcon"/>  <!--    : 부모 => 자식     -->
    <ShowVideoComp @valueFromShow="handleValueFromShow"/>   <!--    @ 자식 => 부모     -->
  </div>
</template>


<script>
import { ref } from 'vue';
import AddVideoComp from "@/components/AddVideoComp.vue";
import ShowVideoComp from "@/components/ShowVideoComp.vue";

export default {
  components: {
    AddVideoComp,
    ShowVideoComp,
  },
  data(){
    return{
      userEmail: null,
      showIcon: false,
    }
  },
  mounted(){
    this.userEmail = sessionStorage.getItem("userEmail");
    if(this.userEmail){
      this.showIcon = true;
    }
  },
  setup() {
      // ShowVideoComp 에서 받은 값을 저장하는 ref
      const receivedValueFromShow = ref('');

      // ShowVideoComp 에서 발생한 'valueFromShow' 이벤트를 처리하는 메소드
      const handleValueFromShow = (value) => {

      // 받은 값 저장
      receivedValueFromShow.value = value;
    };
      
    // 외부에서 사용 가능한 데이터와 메소드를 반환
    return {
      receivedValueFromShow,
      handleValueFromShow
    };
  },

};
</script>

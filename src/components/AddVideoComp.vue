<template>
  <div>
    <div style="margin-top:10%;" >
      <input type="file" ref="videoInput" style="display: none" />
      <button class="dotted-border">
        <font-awesome-icon :icon="['fas', 'plus-circle']" v-if="showPlusIcon" @click="addComp" style="width:150px; height:150px;"/>
        <AddVideoDetailComp v-if="showComp" ref="detailCompRef" @closeForm="closeComp"/>
      </button>
      <div v-if="selectedFile">
        <p>Selected File: {{ selectedFile.name }}</p>
        <input v-model="fileTitle" placeholder="Enter file title" />
      </div>
    </div>
  </div>
</template>


<script>
// import axios from 'axios';
import $ from 'jquery';
import AddVideoDetailComp from "@/components/AddVideoDetailComp.vue";

export default {
  data() {
    return {
      selectedFile: null,
      fileTitle: "", // 파일 제목을 저장할 데이터
      showComp: false,
      showPlusIcon: true,
    };
  },
  components: {
    AddVideoDetailComp
  },
  methods: {
    addComp() {
      this.showComp = true;
      this.showPlusIcon = false;
      $('.dotted-border'); // 없애야 함 점선녀석들
    },
    closeComp() {
      this.showComp = false;
      this.showPlusIcon = true;
    },

  },

};


</script>


<style scoped>
.dotted-border {
  border: 2px dotted #333;
  padding: 5px;
  background-color: #fff;
  cursor: pointer;
  display: inline-block;
  border-radius: 8px;
  width: 450px;
  transition: background-color 0.3s ease; /* 트랜지션 효과 추가 */
}

/* 마우스를 올렸을 때의 스타일 */
.dotted-border:hover {
  background-color: #ddd;
}

</style>
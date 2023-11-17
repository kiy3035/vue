<template>
  <div>
    <div :class="{ 'dark-background': showComp }">
      <div style="margin-top:10%;" >
        <input type="file" ref="videoInput" style="display: none" />
        <button class="btnAdd">
          <font-awesome-icon 
            :icon="['fas', 'plus']" 
            v-if="showPlusIcon" 
            @click="addComp" 
            :class="{ 'hovered': isHovered }"
            @mouseover="isHovered = true"
            @mouseout="isHovered = false"
            style="width:150px; height:150px;" />
          <AddVideoDetailComp v-if="showComp" ref="detailCompRef" @closeForm="closeComp"/>
        </button>
        <div v-if="selectedFile">
          <p>Selected File: {{ selectedFile.name }}</p>
          <input v-model="fileTitle" placeholder="Enter file title" />
        </div>
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
      isHovered: false,
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

.dark-background {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10; /* 다른 요소들보다 위에 나타나도록 설정 */
}

.btnAdd {
  border: 1px solid transparent;
  padding: 5px;
  background-color: #fff;
  cursor: pointer;
  display: inline-block;
  border-radius: 8px;
  width: 150px;
  transition: color 0.3s ease; /* 트랜지션 효과 추가 */
}

.hovered {
  color: #d3aad4; /* hover 시 글자색 변경 */
}


</style>
<template>
  <div>
    <div style="margin-top:10%;" >
      <input type="file" ref="videoInput" style="display: none" @change="handleFileChange" />
      <button class="dotted-border">
        <font-awesome-icon :icon="['fas', 'plus-circle']"  @click="openFileInput" style="width:150px; height:150px;"/>
        <AddVideoDetailComp v-if="showComp" ref="detailCompRef" @closeForm="handleCloseForm"/>
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
// import $ from 'jquery';
import AddVideoDetailComp from "@/components/AddVideoDetailComp.vue";

export default {
  data() {
    return {
      selectedFile: null,
      fileTitle: "", // 파일 제목을 저장할 데이터
      showComp: false,
    };
  },
  components: {
    AddVideoDetailComp
  },
  methods: {
    openFileInput() {
      this.showComp = true;

      // 파일 입력란 클릭 시 파일 다이얼로그 열기
      // this.$refs.videoInput.click();
    },
     handleCloseForm() {
      this.showComp = false;
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        // 파일 선택 시 파일 제목을 입력할 수 있는 input 다이얼로그를 열기
        const fileTitle = prompt("Enter file title:", "");
        const fileType = file.type;
        const fileTime = formatDate(file.lastModifiedDate);
        const fileNo = event._vts;
        if (fileTitle !== null) {
          // 사용자가 취소하지 않았다면 파일 제목 데이터에 저장
          this.fileTitle = fileTitle;
          this.fileType = fileType;
          this.fileTime = fileTime;
          this.fileNo = fileNo; // 고유번호

          // FormData 객체 생성
          const formData = new FormData();
          formData.append('videoFile', file);
          formData.append('title', this.fileTitle);
          formData.append('type', this.fileType);
          formData.append('inp_dt', this.fileTime);
          formData.append('video_no', this.fileNo);

          // $.ajax({
          //   type: "POST",
          //   url: "http://localhost:7001/api/upload",
          //   data: formData,
          //   processData: false,
          //   contentType: false,
          //   success: function(response) {
          //     alert(response);
          //   },
          //   error: function(xhr, status, error) {
          //     // 서버와의 통신 중 에러가 발생했을 때의 처리
          //     alert("에러 발생: " + error);
          //   }
          // });
        }
      }
    },


  },

};

function formatDate(date) {
  const year = String(date.getFullYear()).slice(-2);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}${month}${day}`;
}

</script>


<style>
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
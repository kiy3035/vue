<template>
  <div>
    <div style="margin-top:20%;" >
      <input type="file" ref="videoInput" style="display: none" @change="handleFileChange" />
      <button @click="openFileInput" class="dotted-border">
        <font-awesome-icon :icon="['fas', 'plus-circle']" style="width:150px; height:150px;"/>
      </button>
    </div>
  </div>
</template>


<script>
// import axios from 'axios';
import $ from 'jquery';

export default {
  methods: {
    openFileInput() {
      // 파일 입력란 클릭 시 파일 다이얼로그 열기
      this.$refs.videoInput.click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        // FormData 객체 생성
        const formData = new FormData();
        formData.append('videoFile', file);

      $.ajax({
        type: "POST",
        url: "http://localhost:7001/api/upload",
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
          alert(response)
        },
        error: function(xhr, status, error) {
          // 서버와의 통신 중 에러가 발생했을 때의 처리
          alert("에러 발생: " + error);
        }
      });
      }
    },
  },
};
</script>


<style>
.dotted-border {
  border: 2px dotted #333;
  padding: 10px;
  background-color: #fff;
  cursor: pointer;
  display: inline-block;
  border-radius: 8px;
  transition: background-color 0.3s ease; /* 트랜지션 효과 추가 */
}

/* 마우스를 올렸을 때의 스타일 */
.dotted-border:hover {
  background-color: #ddd;
}

</style>
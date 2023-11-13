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
        formData.append('video', file);

        // 여기에서 파일을 업로드하는 로직을 구현
        // 예: axios를 사용하여 서버에 파일 업로드 요청
        // axios.post('/api/upload', formData)


        $.ajax({
        type: "POST",
        url: "http://localhost:7001/api/upload",
        data: JSON.stringify(formData),
        contentType: 'application/json',
        success: function(response) {
          alert(response)
        },
        error: function(xhr, status, error) {
          // 서버와의 통신 중 에러가 발생했을 때의 처리
          alert("에러 발생: " + error);
        }
      });



        // axios.post('http://localhost:7001/api/upload', formData)
        //   .then(response => {
        //     // 업로드 성공 시 처리
        //     console.log("파일이 성공적으로 업로드되었습니다.", response.data);
        //   })
        //   .catch(error => {
        //     // 업로드 실패 시 처리
        //     console.error("파일 업로드 중 오류가 발생했습니다.", error);
        //   });
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
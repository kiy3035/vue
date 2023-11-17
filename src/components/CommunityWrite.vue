<template>
  <div class="materialContainer">

    <div class="box">

      <!-- 닫기 아이콘 -->
      <button class="close-button" @click="closeForm">
        <font-awesome-icon :icon="['fas', 'times']" />
      </button>

      <div class="title">UPLOAD</div>

      <!-- 비디오 아이콘 -->
      <input type="file" ref="videoInput" style="display: none" @change="fileChange($event)"/>
      <button class="add-video-button">
      <font-awesome-icon :icon="['fas', 'video']" @click="openFileInput" style="width:50px; height:50px;"/>
      <!-- 체크 아이콘 -->
      <font-awesome-icon :icon="['fas', 'check']" v-if="showCheckIcon" style="color: #28e24d; margin-left: 8px; width:30px; height:30px; display:block;" />
      </button>

    <!-- Form -->
    <form method="post" id="videoForm" @submit.prevent="submitForm" enctype="multipart/form-data">
      <!-- 제목 -->
      <div class="input" :class="{ 'focused': inputFocused === 'videoTitle', 'blured' : inputBlured === 'videoTitle' }">
         <label for="videoTitle">Title</label>
         <input type="text" name="videoTitle" id="videoTitle" v-model="input.title"
                @focus="handleInputFocus('videoTitle')"
                @blur="handleInputBlur('videoTitle')">
         <span class="spin"></span>
      </div>

      <!-- 내용 -->
      <div class="input" :class="{ 'focused': inputFocused === 'videoContent', 'blured' : inputBlured === 'videoContent' }">
         <label for="videoContent">Content</label>
         <input type="text" name="videoContent" id="videoContent" v-model="input.content"
                @focus="handleInputFocus('videoContent')"
                @blur="handleInputBlur('videoContent')">
         <span class="spin"></span>
      </div>

      <!-- GO 버튼 -->
      <div class="button submit">
         <button type="submit">
            <span>GO</span> 
            <i class="fa fa-check"></i>
         </button>
      </div>

      <!-- <a href="" class="pass-forgot">Forgot your password?</a> -->
    </form>
   </div>

  <!-- 오른쪽 + 버튼인데 안 씀 -->
   <!-- <div class="overbox">
      <div class="material-button alt-2"><span class="shape"></span></div>

      <div class="title">REGISTER</div>

      <div class="input">
         <label for="regname">Username</label>
         <input type="text" name="regname" id="regname"> 
         <span class="spin"></span>
      </div>

      <div class="input">
         <label for="regpass">Password</label>
         <input type="password" name="regpass" id="regpass">
         <span class="spin"></span>
      </div>

      <div class="input">
         <label for="reregpass">Repeat Password</label>
         <input type="password" name="reregpass" id="reregpass">
         <span class="spin"></span>
      </div>

      <div class="button">
         <button><span>NEXT</span></button>
      </div>
    </div> -->

</div>
</template>


<script>
import $ from 'jquery';

export default {
  name: 'CommunityWrite',
  data() {
    return {
      inputFocused: null,
      inputBlured: null,
      showCheckIcon: false,
      selectedFile: null,
      input: {
        title: '',
        content: '',
      },
    };
  },
  components: {

  },
  mounted() {

  },
  methods: {
    createPost() {
      console.log('Creating post:', this.post);
    },
    closeForm() {
      this.$emit("closeForm");
    },
    openFileInput(){
      // 파일 입력란 클릭 시 파일 다이얼로그 열기
      return this.$refs.videoInput.click();
    },
    handleInputFocus(val) {
      this.inputFocused = val;
      this.inputBlured = null;
    },
    handleInputBlur(val) {
      this.inputFocused = null;
      this.inputBlured = val;
    },
    fileChange(event){
      
      if (event.target.files.length > 0) {
        this.selectedFile = event.target.files[0];
        this.showCheckIcon = true;
        
console.log(event.target.files)
      }
      
    },
    submitForm(event) {
      const file = this.selectedFile;

      if (file) {

        var formData = new FormData(document.getElementById("videoForm"));

        formData.append('videoFile', file);
        formData.append('type', file.type);
        formData.append('inp_dt', formatDate(file.lastModifiedDate ));
        formData.append('video_no', event._vts);

        // formData 출력
        for (const [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`);
        }

          $.ajax({
          type: "POST",
          url: "http://localhost:7001/api/upload",
          data: formData,
          processData: false,
          contentType: false,
          success: function() {
            alert("업로드맨");
            this.$router.go(0); // 현재 페이지 리랜더링
          }.bind(this),
          error: function(xhr, status, error) {
            alert("에러 발생: " + error);
          }
        });
        
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


<style scoped>

@import '@/css/addVideoForm.css';

.focused label {
  line-height: 18px;
  font-size: 18px;
  font-weight: 100;
  top: 0px;
}

.focused .spin {
  width: 100%;
}

.blured label {
  line-height: 60px;
  font-size: 24px;
  font-weight: 300;
  top: 10px;
}

.blured .spin {
  width: 0%;
}

.materialContainer {
    width: 100%;
    max-width: 1365px;
    position: absolute;
    top: 49%;
    left: 52%;
    /* right: 30%; */
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    /* height: 849px; */
}
</style>
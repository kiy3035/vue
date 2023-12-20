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
         <label for="videoTitle" :style="input.titleStyle">Title</label>
         <input type="text" name="videoTitle" id="videoTitle" v-model="input.title" ref="videoTitle" autocomplete="off"
                @focus="handleInputFocus('videoTitle')"
                @blur="handleInputBlur('videoTitle')">
         <span class="spin"></span>
      </div>

      <!-- 내용 -->
      <div class="input" :class="{ 'focused': inputFocused === 'videoContent', 'blured' : inputBlured === 'videoContent' }">
         <label for="videoContent" :style="input.contentStyle">Content</label>
         <input type="text" name="videoContent" id="videoContent" v-model="input.content" ref="videoContent" autocomplete="off"
                @focus="handleInputFocus('videoContent')"
                @blur="handleInputBlur('videoContent')">
         <span class="spin"></span>
      </div>

      <!-- 카테고리 -->
      <label for="selectCategory" style="margin-top:30px;">Category</label>
        <select id="selectCategory" v-model="selectedCategory" style="margin-left:10px;" ref="category">
          <option v-for="category in categories" :key="category.id" :value="category.name">{{ category.name }}</option>
        </select>

      <!-- GO 버튼 -->
      <div class="button submit">
         <button type="submit" style="border-radius: 15px; ">
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
  data() {
    return {
      inputFocused: null,
      inputBlured: null,
      showCheckIcon: false,
      selectedFile: null,
      input: {
        title: '',
        content: '',
        titleStyle: {},
        contentStyle: {},
      },
      selectedCategory: null,
      categories: [
        { id: 1, name: 'Sports' },
        { id: 2, name: 'Games' },
        { id: 3, name: 'Food' },
        { id: 4, name: 'Beauty' },
        { id: 5, name: 'Fashion' },
        { id: 6, name: 'Technology' },
        { id: 7, name: 'Travel' },
      ]
    };
  },
  components: {

  },
  mounted() {

  },
  methods: {
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

      // title 값 있을 때
      if(this.input.title !== ''){
        this.input.titleStyle  = {
          'line-height': '18px',
          'font-size': '18px',
        };
      }else{
        this.input.titleStyle = {};
      }

      // content 값 있을 때
      if(this.input.content !== ''){
        this.input.contentStyle = {
          'line-height': '18px',
          'font-size': '18px',
        };
      }else{
        this.input.contentStyle = {};
      }
    },
    fileChange(event){
      if (event.target.files.length > 0) {

        const file = event.target.files[0];
        const fileName = file.name;

        // 동영상 확장자
        const allowedExtensions = ['mp4', 'avi', 'wmv', 'mkv', 'mov'];

        // 파일 이름에서 마지막 점(.)의 인덱스를 찾아 확장자를 추출
        const lastDotIndex = fileName.lastIndexOf('.');

        if (lastDotIndex !== -1) {
          const fileExtension = fileName.substring(lastDotIndex + 1).toLowerCase();

          // 동영상 확장자일 때
          if (allowedExtensions.includes(fileExtension)) {
            this.selectedFile = file;
            this.showCheckIcon = true;
          } else {
            this.gfnAlert('올바른 동영상 파일 형식이 아닙니다.');
            this.showCheckIcon = false;
            event.target.value = null; // 파일 선택 초기화
          }
        }
      }
    },
    submitForm(event) {
      const file = this.selectedFile;
      const userEmail = sessionStorage.getItem('userEmail');
      const category = this.selectedCategory;

      if (file) {

        var formData = new FormData(document.getElementById("videoForm"));
        
        formData.append('videoFile', file);
        formData.append('type', file.type);
        formData.append('inp_dt', formatDate(file.lastModifiedDate ));
        formData.append('video_id', event._vts);
        formData.append('userEmail', userEmail);
        formData.append('category', category);

        // formData 출력
        for (const [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`);
        }

        if(this.input.title === ''){
          this.gfnAlert("제목을 입력하세요.");
          this.$refs.videoTitle.focus();
          return;
        }

        if(this.selectedCategory === null){
          this.gfnAlert("카테고리를 선택하세요.");
          this.$refs.category.focus();
          return;
        }

        if(this.input.content === ''){
          this.gfnAlert("내용을 입력하세요.");
          this.$refs.videoContent.focus();
          return;
        }

          $.ajax({
          type: "POST",
          url: "http://localhost:7001/api/upload",
          data: formData,
          processData: false,
          contentType: false,
          success: function(response) {
            this.gfnAlert(response);
            this.$router.go(0); // 현재 페이지 리랜더링
          }.bind(this),
          error: function(xhr, status, error) {
            this.gfnAlert("에러 발생: " + error);
          }
        });
      }else{
        this.gfnAlert("동영상을 추가하세요.");
        return;
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
  /* font-weight: 100; */
  /* top: 0px; */
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



</style>
<template>
    <div class="materialContainer ui">
  
      <div class="box">
  
        <!-- 닫기 아이콘 -->
        <button class="close-button" @click="closeForm">
          <font-awesome-icon :icon="['fas', 'times']" />
        </button>
        <div class="title">글쓰기</div>
  
      <!-- Form -->
      <form method="post" id="videoForm" @submit.prevent="submitForm" enctype="multipart/form-data">
        <!-- 닉네임 -->
        <div class="input" :class="{ 'focused': inputFocused === 'nickname', 'blured' : inputBlured === 'nickname' }">
           <label for="nickname">닉네임</label>
           <input type="text" name="nickname" id="nickname" v-model="input.nickname"
                  @focus="handleInputFocus('nickname')"
                  @blur="handleInputBlur('nickname')">
           <span class="spin"></span>
        </div>
        <!-- 태그 -->
        <div class="input" :class="{ 'focused': inputFocused === 'tag', 'blured' : inputBlured === 'tag' }">
           <label for="nickname">태그</label>
           <input type="text" name="tag" id="tag" v-model="input.tag"
                  @focus="handleInputFocus('tag')"
                  @blur="handleInputBlur('tag')">
           <span class="spin"></span>
        </div>

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
          <!-- 클릭 시에 textarea가 나타나도록 v-show 디렉티브 사용 -->
          <textarea v-show="inputFocused === 'videoContent'" v-autosize type="text" name="videoContent" id="videoContent" v-model="input.content"
                    @blur="handleInputBlur('videoContent')"></textarea>
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
  
  
  </div>
  </template>
  
  
  <script>
  // v-autosize 디렉티브를 정의합니다.
const autosize = {
  bind(el) {
    el.style.overflow = 'hidden';
    el.style.resize = 'none';
    const setStyle = () => {
      el.style.height = 'auto';
      el.style.height = `${el.scrollHeight}px`;
    };
    el.addEventListener('input', setStyle);
    setStyle();
  },
};

  export default {
    name: 'CommunityWrite',
    directives: {
    autosize,
  },
    data() {
      return {
        inputFocused: null,
        inputBlured: null,
        showCheckIcon: false,
        selectedFile: null,
        input: {
          nickname: '',  
          tag: '',
          title: '',
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
      handleInputFocus(val) {
        this.inputFocused = val;
        this.inputBlured = null;
      },
      handleInputBlur(val) {
      this.inputFocused = null;
      this.inputBlured = val;

      // title 값 있을 때
      if(this.input.nickname !== ''){
        this.input.nicknameStyle  = {
          'line-height': '18px',
          'font-size': '1px',
        };
      }else{
        this.input.nicknameStyle = {};
      }

      // content 값 있을 때
      if(this.input.content !== ''){
        this.input.contentStyle = {
          'line-height': '18px',
          'font-size': '10px',
        };
      }else{
        this.input.contentStyle = {};
      }
    },
  
  
    },
  };
  
  
  </script>
  
  
  <style scoped>
  
  /* @import '@/css/addVideoForm.css'; */
  
  .focused label {
    line-height: 5px;
    font-size: 15px;
    font-weight: 100;
    top: 0px;
  }
  
  .focused .spin {
    width: 80%;
  }
  
  .blured label {
    line-height: 50px;
    font-size: 20px;
    font-weight: 300;
    top: 0px;
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
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
  
  .ui {
    z-index: 1; /* 화면위에 나타남 */
  }
  
  .put_inquiry {
      width: 204px;
      height: 33px;
      padding: 0 12px;
      line-height: 35px;
      border: 1px solid #cecdce;
      color: #333;
  }

  .title{
    text-align: center;
  }
  </style>
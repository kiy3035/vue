<template>
    <div class="materialContainer ui">
  
      <div class="box">
  
        <!-- 닫기 아이콘 -->
        <button class="close-button" @click="closeForm">
          <font-awesome-icon :icon="['fas', 'times']" />
        </button>
        <div class="title">Write</div>
  
      <!-- Form -->
      <form method="post" id="videoForm" @submit.prevent="submitForm" enctype="multipart/form-data">
        <!-- 닉네임 -->
        <div class="input" :class="{ 'focused': inputFocused === 'nickname', 'blured' : inputBlured === 'nickname' }">
           <label for="nickname" :style="input.nicknameStyle">닉네임</label>
           <input type="text" name="nickname" id="nickname" v-model="input.nickname"
                  @focus="handleInputFocus('nickname')"
                  @blur="handleInputBlur('nickname')">
           <span class="spin"></span>
        </div>
        <!-- 태그 -->
        <div class="input" :class="{ 'focused': inputFocused === 'tag', 'blured' : inputBlured === 'tag' }">
            <label for="tag" :style="input.tagStyle">태그</label>
            <input
            type="text"
            name="tag"
            id="tag"
            v-model="input.tag"
            @focus="handleInputFocus('tag')"
            @blur="handleTagInputBlur"
            >
            <span class="spin"></span>
        </div>
        <!-- 제목 -->
        <div class="input" :class="{ 'focused': inputFocused === 'title', 'blured' : inputBlured === 'title' }">
           <label for="title" :style="input.titleStyle">제목</label>
           <input type="text" name="title" id="title" v-model="input.title"
                  @focus="handleInputFocus('title')"
                  @blur="handleInputBlur('title')">
           <span class="spin"></span>
        </div>
        <!-- 내용 -->
        <div class="input" :class="{ 'focused': inputFocused === 'cont', 'blured' : inputBlured === 'cont' }">
    <label @click="toggleTextarea" :for="'cont'" :style="input.contStyle">내용</label>
    <textarea
      v-show="inputFocused === 'cont'"
      ref="contTextarea"
      name="cont"
      id="cont"
      v-model="input.cont"
      @blur="handleInputBlur('cont')"
      :style="{ 'z-index': inputFocused === 'cont' ? '1' : 'auto' }"
      @focus="handleTextareaFocus"
    ></textarea>
    <input
      v-show="inputFocused !== 'cont'"
      type="text"
      name="cont"
      id="cont"
      v-model="input.cont"
      @focus="handleInputFocus('cont')"
      @blur="handleInputBlur('cont')"
    >
    <span class="spin" :style="{ 'display': inputFocused === 'cont' ? 'none' : 'block' }"></span>
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
  export default {
    name: 'CommunityWrite',
    directives: {
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
          cont:'',
          nicknameStyle:{},
          tagStyle:{},
          titleStyle:{},
          contStyle:{},
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
      toggleTextarea() {
        if (this.inputFocused !== 'cont') {
            this.handleInputFocus('cont');
        }
      },
      handleTextareaFocus() {
        // textarea가 포커스를 받을 때 .spin을 숨김
        this.$refs.contTextarea.nextSibling.style.display = 'none';
      },
      
      handleInputFocus(val) {
        this.inputFocused = val;
        this.inputBlured = null;
      },
      handleInputBlur(val) {
        this.inputFocused = null;
        this.inputBlured = val;

        // 닉네임 값이 있을 때
        if (this.input.nickname !== '') {
            this.input.nicknameStyle = {
            'line-height': '18px',
            'font-size': '18px',
            };
        } else {
            this.input.nicknameStyle = {};
        }

        // 태그 값이 있을 때
        if (this.input.tag !== '') {
            
            this.input.tagStyle = {
                'line-height': '18px',
                'font-size': '18px',
            };
            // 태그 값이 '#'으로 시작하지 않으면 '#'을 추가
            if (!this.input.tag.startsWith('#')) {
                this.input.tag = '#' + this.input.tag;
            }
        } else {
            this.input.tagStyle = {};
        }

        // 제목 값이 있을 때
        if (this.input.title !== '') {
            this.input.titleStyle = {
            'line-height': '18px',
            'font-size': '18px',
            };
        } else {
            this.input.titleStyle = {};
        }

        // 내용 값이 있을 때
        if (this.input.cont !== '') {
            this.input.contStyle = {
            'line-height': '18px',
            'font-size': '18px',
            };
        } else {
            this.input.contStyle = {};
        }
      },
    },
  };
  
  
  </script>
  
  
  <style scoped>
  
  /* @import '@/css/addVideoForm.css'; */
  
  
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
  font-size: 18px;
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
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
  
  .ui {
    z-index: 1; /* 화면위에 나타남 */
  }
  
  .title{
    text-align: center;
  }
  </style>
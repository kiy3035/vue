<template>
  <div>
    <!-- CommunityDetail 컴포넌트 내용은 생략하고 필요한 경우에 채워넣으세요. -->
    <div class="item_card2">
      <div class="materialContainer2 ui">
        <div class="box" style="background-image: url('https://img.freepik.com/premium-vector/cute-santa-claus-character-isolated-on-white_295036-185.jpg'); background-size: 1360px 610px; overflow: hidden;">
          <!-- 닫기 아이콘 -->
          <button class="close-button" @click="closeForm">
            <font-awesome-icon :icon="['fas', 'times']" />
          </button>
          <form id="Writeform">
            <div class="title2"><img
            data-v-a968263a=""
            data-v-476b23f8=""
            src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/657726a1017800001.png?type=thumb&amp;opt=C72x72.fwebp"
            alt=""
          /></div>
            <div class="box-content">
              <!-- 왼쪽 영역 -->
              <div class="left-box">
                <!-- 제목 -->
                <div class="input" :class="{ 'focused': inputFocused === 'title', 'blured' : inputBlured === 'title' }">
                  <label for="title" :style="input.titleStyle">Title</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    v-model="input.title"
                    @focus="handleInputFocus('title')"
                    @blur="handleInputBlur('title')"
                    :disabled="!isUserAuthorized" style="color: #000;font-weight: bold;"
                  />
                  <span class="spin"></span>
                </div>
                <div class="input" :class="{ 'focused': inputFocused === 'nickname', 'blured' : inputBlured === 'nickname' }">
                  <div class="label-icon-container">
                    <label for="nickname" :style="input.nicknameStyle">
                      <svg class="svg-inline--fa fa-user iconCSS" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path></svg>
                    </label><input type="text" name="nickname" id="nickname" v-model="input.nickname" :disabled="isUserAuthorized2" style="color: #000;font-weight: bold;"/>
                    <span class="spin"></span>
                  </div>
                </div>
              <div class="input-group">
        <!-- 첫 번째 인풋 박스 -->
        <div class="input" :class="{ 'focused': inputFocused === 'tag1', 'blured' : inputBlured === 'tag1' }">
          <label for="tag1" :style="input.tag1Style">Hashtag</label>
          <input
            type="text"
            name="tag1"
            id="tag1"
            v-model="input.tag1"
            @input="handleTagInput('tag1')"
            @focus="handleInputFocus('tag1')"
            @blur="handleInputBlur('tag1')"
            style="font-size: 16px; background: #f0f0f0; font-style: italic; color: #000;font-weight: bold;"
            :disabled="!isUserAuthorized"
          />
          <span class="spin"></span>
        </div>

        <!-- 두 번째 인풋 박스 -->
        <div class="input" :class="{ 'focused': inputFocused === 'tag2', 'blured' : inputBlured === 'tag2' }">
          <input
            type="text"
            name="tag2"
            id="tag2"
            v-model="input.tag2"
            @input="handleTagInput('tag2')"
            @focus="handleInputFocus('tag2')"
            @blur="handleInputBlur('tag2')"
            style="font-size: 16px; background: #f0f0f0; font-style: italic; color: #000;font-weight: bold;"
            :disabled="!isUserAuthorized"
          />
          <span class="spin"></span>
        </div>

        <!-- 세 번째 인풋 박스 -->
        <div class="input" :class="{ 'focused': inputFocused === 'tag3', 'blured' : inputBlured === 'tag3' }">
          <input
            type="text"
            name="tag3"
            id="tag3"
            v-model="input.tag3"
            @input="handleTagInput('tag3')"
            @focus="handleInputFocus('tag3')"
            @blur="handleInputBlur('tag3')"
            style="font-size: 16px; background: #f0f0f0; font-style: italic; color: #000;font-weight: bold;"
            :disabled="!isUserAuthorized"
          />
          <span class="spin"></span>
        </div>
      </div>
      </div>
              <!-- 오른쪽 영역 -->
              <div class="right-box">
                <!-- 내용 -->
                <div>
                  <textarea name="cont" id="cont" v-model="input.cont" style="height:293px; background-color: lightgoldenrodyelloway;" :disabled="!isUserAuthorized"></textarea>
                </div>
              </div>
            </div>

            <!-- 버튼 -->
            <div class="button submit" :style="{ 'width': isUserAuthorized ? '10%' : 'auto', 'left': isUserAuthorized ? '34%' : 'auto', 'margin-left': isUserAuthorized ? '10px' : 'auto' }" v-if="isUserAuthorized"> 
              <button @click="deleteForm">
                <span>Delete</span>
                <i class="fa fa-check"></i>
              </button>
            </div>
            <div class="button submit" :style="{ 'width': isUserAuthorized ? '10%' : 'auto', 'left': isUserAuthorized ? '34%' : 'auto', 'margin-left': isUserAuthorized ? '10px' : 'auto' }" v-if="isUserAuthorized"> 
              <button @click="updateForm">
                <span>Update</span>
                <i class="fa fa-check"></i>
              </button>
            </div>
            <div class="button submit" :style="{ 'width': isUserAuthorized ? '10%' : '', 'left': isUserAuthorized ? '34%' : '', 'margin-left': isUserAuthorized ? '10px' : '' }"> 
              <button @click="closeForm">
                <span>Close</span>
                <i class="fa fa-check"></i>
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'CommunityDetail',
  props: ['item'], // showDetailPage를 prop으로 받아옵니다.
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
          tag1: '#',
          tag2: '#',
          tag3: '#',
          title: '',
          cont:'',
          nicknameStyle:{},
          tag1Style:{'line-height': '18px',
            'font-size': '18px'},
          titleStyle:{},
          contStyle:{},
        },
      };
    },
  
  methods: {
    closeForm() {
      this.$emit("closeForm");
    },
    updateForm() {
      console.log(this.item)

      event.preventDefault();

      const postData = {
        tag1: this.input.tag1,
        tag2: this.input.tag2,
        tag3: this.input.tag3,
        title: this.input.title,
        cont: this.input.cont,
        id: this.item.id
      };

      console.log('Registering post:', postData);

      if(postData.title === ''){
        alert("제목을 입력하세요.");
        $("#title").focus();
        return;
      }
      if(postData.cont === ''){
        alert("내용을 입력하세요.");
        $("#cont").focus();
        return;
      }
      $.ajax({
        type: "POST",
        url: "http://localhost:7001/update",
        data: JSON.stringify(postData),
        contentType: 'application/json',
        success: function() {
          alert("게시글이 수정 되었습니다.");
          // 부모 컴포넌트에 이벤트를 전달하여 창을 닫습니다.
          // this.$emit("closeForm");
          const closeButton = document.querySelector('.close-button');
          const clickEvent = new Event('click');
          closeButton.dispatchEvent(clickEvent);
        },
        error: function(xhr, status, error) {
          alert("에러발생! 관리자에게 문의하세용! " + error);
        }
      });
    },
    deleteForm() {

      event.preventDefault();
      
      const isConfirmed = window.confirm("정말 삭제하시겠습니까?");

      if (!isConfirmed) {
        return;
      }

      const postData = {
          id: this.item.id
      };

      $.ajax({
        type: "POST",
        url: "http://localhost:7001/delete",
        data: JSON.stringify(postData),
        contentType: 'application/json',
        success: function() {
          alert("게시글이 삭제 되었습니다.");
          // 부모 컴포넌트에 이벤트를 전달하여 창을 닫습니다.
          // this.$emit("closeForm");
          const closeButton = document.querySelector('.close-button');
          const clickEvent = new Event('click');
          closeButton.dispatchEvent(clickEvent);
        },
        error: function(xhr, status, error) {
          alert("에러발생! 관리자에게 문의하세용! " + error);
        }
      });
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
      // 해시태그 입력 처리
      handleTagInput(tagName) {
      // 사용자가 입력한 값이 #으로 시작하지 않으면 #을 추가
      if (!this.input[tagName].startsWith('#')) {
        this.input[tagName] = '#' + this.input[tagName];
      }
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
  mounted() {
    console.log(this.item); // 받아온 데이터 확인
    this.input.title = this.item.title;
    this.input.cont = this.item.cont;
    this.input.nickname = this.item.nickname;
    this.input.tag1 = this.item.tag1;
    this.input.tag2 = this.item.tag2;
    this.input.tag3 = this.item.tag3;

    this.handleInputBlur(); 
    console.log("ho : " + sessionStorage.getItem('userEmail')); // 로그인 세션정보
    console.log("ho1 : " + (this.item.email == sessionStorage.getItem('userEmail')));
  },
  computed: {
    isUserAuthorized() {
      return this.item.email === sessionStorage.getItem('userEmail');
    },
    isUserAuthorized2() {
      return this.item.email;
    },
  }
};
</script>

<style scoped>

  .item_card2 {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    background-color: white;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    width: 80%; /* 수정: 원하는 크기로 조정 */
    height: 80%; /* 수정: 원하는 크기로 조정 */
    box-sizing: border-box; /* 패딩을 고려하여 전체 크기 지정 */
  }
  #Writeform {
    max-width: 100%; /* 변경된 부분 */
    margin: 20px auto -20px;
  }
  .materialContainer2 {
    width: 100%;
    height:100%;
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
  }
  .box {
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 9999px rgba(0, 0, 0, 100);
  }
  .box-content {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .left-box,
  .right-box {
    flex: 1;
    padding: 20px;
  }

  .title2 {
    font-size: 34px;
    font-weight: 700;
    letter-spacing: 2px;
    color: #ED2553;
    margin-bottom: 20px;
    text-align: center;
  }
  .button.submit {
      width: 10%;
      left: 45%;
  }
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
  .input-group {
    display: flex;
  }
  .input {
    flex: 1;
    margin-right: 10px;  /* 각 인풋 박스 사이의 간격 조절 */
  }
  .authorized {
    left: 34%;
    margin-left: 10px;
  }
</style>
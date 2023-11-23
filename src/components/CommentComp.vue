<template>
  <div class="comment-comp">
    <div id="form-container">
      <div id="form-inner-container">
        <div id="videoInfo-container">
          <h2>{{this.videoData.title}}</h2>
              <font-awesome-icon 
                icon="xmark" 
                @click="closeCommentComp"
                class="close-button"/>
          <form>
            <div class="icon-container2" >
              <input type="text" v-model="commentText" placeholder="댓글을 입력하세요.">
            </div>

            <div id="form-controls">
                <font-awesome-icon icon="pen" @click="inputComment(this.videoData)" />
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      commentText: '',
    };
  },
  props: {
    videoData: {
        type: Object,
        required: true
    }
  },
  mounted(){
    this.getComments();
  },
  methods: {
    closeCommentComp(){
      this.$emit("close"); // 부모 컴포넌트로 이벤트 전달
    },
    inputComment(data){

      const userEmail = sessionStorage.getItem('userEmail');
      const datas = {
        videoId : data.id,
        videoTitle : data.title,
        videoComment : this.commentText,
        userEmail : userEmail
      }

      const url = 'http://localhost:7001/inputComment'

      axios.post(url, datas)
        .then(response => {
          console.log(response);
          this.commentText = null;
          // this.getComments();
        })
        .catch(error => {
          console.log('Error:', error);
        });
    },
    getComments(){
      console.log("댓글가져오는중");

      const url = 'http://localhost:7001/getAllComments'

      axios.get(url)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log('Error:', error);
        });
    }

  }
  
}
</script>

<style scoped>

    @import '@/css/videoInfo.css';

    .comment-comp {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-height: 90%;
        width: 50%;
        z-index: 1000;
    }

    #form-controls [name="bottomIcon"] :hover{
        color: red;
    }

    .close-button {
        position: absolute !important;
        top: 150px !important;
        right: 100px !important;
        padding: 8px 16px;
        color: #ff8899;
        background-color: transparent;
        cursor: pointer;
    }

    .close-button:hover {
        color: red;
    }

    .icon-container2 {
        position: relative;
    }

    .icon-container2 input {
        /* position: absolute; */
        margin-top: 70%;
        width: 100%;
    }
</style>

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
          <div class="comment-container">
              <ul>
                <li v-for="(comment, index) in comments" :key="index" class="comment-item">
                  <span class="user-name" >{{ comment.INP_USER }}</span >
                  <span class="comment-text" >
                      {{ comment.isExpanded ? comment.VIDEO_COMMENT : truncatedComment(comment.VIDEO_COMMENT) }}
                  </span >
                  <button v-if="comment.VIDEO_COMMENT.length > maxCommentLength" @click="toggleComment(index)" class="more-button">
                      {{ comment.isExpanded ? '접기' : '더보기' }}
                  </button>
                  <font-awesome-icon icon="trash-can" class="trash-can-icon" @click="deleteComment(comment)" v-if="comment.INP_USER === userEmail"/>
                  <span class="date" >{{ formatVideoDate(comment.INP_DATE) }}</span >
                </li>
              </ul>
          </div>    
          <form>
            <div class="icon-container2">
              <input type="text" v-model="commentText" placeholder="댓글을 입력하세요.">
            </div>
            <div id="form-controls">
                <font-awesome-icon icon="pen" @click="inputComment(this.videoData)" class="pen-css"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import { ref } from 'vue';

export default {
  data() {
    return {
      comments: ref([]),
      commentText: '',
      maxCommentLength: 5,
      userEmail: null,
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
    this.userEmail = sessionStorage.getItem('userEmail');
  },
  methods: {
    deleteComment(data){

      const url = 'http://localhost:7001/deleteComment'

      const datas = {
        videoId : data.VIDEO_ID,
        videoComment : data.VIDEO_COMMENT,
        userEmail : data.INP_USER
      }
 
      axios.post(url, datas)
        .then(() => {
          this.getComments(); // 댓글목록 갱신
          this.$emit("commentCount", this.videoData.id); // 부모 컴포넌트로 인자 전달
        })
        .catch(error => {
          console.log('Error:', error);
        });
    },
    toggleComment(index) {
      this.comments[index].isExpanded = !this.comments[index].isExpanded;
    },
    truncatedComment(comment) {
      return comment.length > this.maxCommentLength ? comment.slice(0, this.maxCommentLength) + '...' : comment;
    },
    formatVideoDate(date) { // 한국날짜 포맷
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      const formattedDate = new Date(date).toLocaleDateString('ko-KR', options);
      return formattedDate;
    },
    closeCommentComp(){
      this.$emit("close"); // 부모 컴포넌트로 이벤트 전달
    },
    inputComment(data){

      if(this.commentText === ''){
        alert("댓글을 입력하세요.");
        return;
      }

      // const userEmail = sessionStorage.getItem('userEmail');
      const datas = {
        videoId : data.id,
        videoTitle : data.title,
        videoComment : this.commentText,
        userEmail : this.userEmail
      }

      const url = 'http://localhost:7001/inputComment'

      axios.post(url, datas)
        .then(() => {
          this.getComments(); // 댓글목록 갱신
          this.commentText = null; // 값 입력하면 리셋
          this.$emit("commentCount", this.videoData.id); // 부모 컴포넌트로 인자 전달
        })
        .catch(error => {
          console.log('Error:', error);
        });
    },
    getComments(){
      const url = 'http://localhost:7001/getAllComments';

      const data = {
        videoId: this.videoData.id,
      };

      axios.get(url, { params: data })
        .then(response => {
          this.comments = response.data;
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
    top: 170px !important;
    right: 120px !important;
    padding: 8px 16px;
    color: #ff8899;
    background-color: transparent;
    cursor: pointer;
  }

  .user-name {
    font-size: 14px;
    margin-right: 10px;
    flex-shrink: 0;
    color: #3498db;
  }

  .comment-text {
    font-size: 20px;
    font-weight: bold;
    flex: 1;
    color: #333;
  }

  .close-button:hover {
    color: red;
  }

  .icon-container2 {
    position: absolute;
    bottom: 50;
    left: 50%;
    width: 60%;
    transform: translateX(-50%);
    margin-top: 10px;
  }

  .icon-container2 input {
    width: 100%;
  }
    
  .comment-item {
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #ddd;
  }

  .pen-css {
    position: absolute;
    color: #ff8899;
    width: 20px;
    height: 20px;
    cursor: pointer;
    right: 150px;
    top: 740px;
  }

  .pen-css :hover{
    color: red;
  }

  .comment-container {
    height: 400px;
    overflow-y: auto;
    margin-top : 30px;
    list-style: none;
    padding: 0;
  }

  .more-button {
    background-color: transparent;
    border: none;
    color: #7b99c0;
    cursor: pointer;
    font-size: 14px;
  }

  .more-button:hover {
    text-decoration: underline;
  }

  .trash-can-icon {
    font-size: 18px;
    margin-left: 10px;
    flex-shrink: 0;
    color: #e74c3c;
    cursor: pointer;
  }

  .date {
    font-size: 12px;
    margin-left: 10px;
    flex-shrink: 0;
    color: #555;
  }
    
</style>

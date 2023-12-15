<template>
  <div class="chat-list-container">
    <h1>Chat List</h1>
        <button class="btn btn-primary new-chat" @click="clickFriendsListComp">New Chat</button>
    <ul>
      <li v-for="(chat, index) in chatList" :key="index" @click="selectChat(index)">
        <div class="chat-thumbnail">
          <img :src="require(`@/assets/${chat.img}`)" alt="채팅방 썸네일">
        </div>
        <div class="chat-info">
          <div class="chat-id">{{ chat.id }}</div>
          <div class="last-message">{{ chat.lastMessage }}</div>
          <div class="last-time">{{ chat.time }}</div>
        </div>
      </li>
    </ul>

    <div v-if="showFriendsListComp" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeFriendsListComp">&times;</span>
        <FriendsListComp @close="closeFriendsListComp" />
      </div>
    </div>

  </div>
</template>


<script>
import FriendsListComp from '@/components/chat/FriendsListComp.vue';
import axios from 'axios';

export default {
  components: {
    FriendsListComp,
  },
  data() {
    return {
      userEmail: null,
      showFriendsListComp: false,
      chatList: [],
    };
  },
  mounted(){
    this.userEmail = sessionStorage.getItem('userEmail');
    this.getChatList();
  },
  methods: {
    getChatList(){
      const myId = this.userEmail;
      const url = `http://localhost:7001/getLastMessage?myId=${myId}`;

      axios.get(url)
        .then(response => {
          console.log(response.data);
          for(var i = 0; i < response.data.length; i++){
              var data = {
                id : response.data[i].OTHER_ID,
                lastMessage : response.data[i].MESSAGE,
                time : dateFormat(response.data[i].INP_DATE),
                img : response.data[i].IMG_PATH,
              }
              this.chatList.push(data);
          }
        })
    },
    clickFriendsListComp(){
      this.showFriendsListComp = true;
    },
    closeFriendsListComp() {
      this.showFriendsListComp = false;
    },
    selectChat() {
      // 채팅방 선택 로직 추가
    },
    
  },
};

  function dateFormat(time){
    var dateObject = new Date(time);

    // 한국 시간대로 변환
    var koreanDateFormat = new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'Asia/Seoul'
    });

    // 한국 시간으로 형식화된 문자열 반환
    return koreanDateFormat.format(dateObject);
    }

</script>


<style scoped>

.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  width: 25%;
  background-color: #fefefe;
  /* padding: 20px; */          /* 2겹으로 됨 */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.close {
  color: #aaa;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}

.close :hover{
  color: #560e0e;
}

.chat-list-container {
  padding: 5% 30%
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

.chat-thumbnail img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.chat-info {
  margin-left: 10px;
}

.chat-id {
  text-align: left;
  font-weight: bold;
}

.last-message {
  color: #888;
  text-align: left;
  font-weight: bold;
  font-size: 20px;
  font-family: 'Noto Sans', sans-serif;
}

.last-time {
  color: #888;
  text-align: left;
  font-size: 13px;
}

.new-chat{
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>

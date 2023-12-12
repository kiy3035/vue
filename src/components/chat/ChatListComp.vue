<template>
  <div class="chat-list-container">
    <h1>Chat List</h1>
        <button class="btn btn-primary new-chat" @click="clickFriendsListComp">New Chat</button>
    <ul>
      <li v-for="(chat, index) in chatList" :key="index" @click="selectChat(index)">
        <div class="chat-thumbnail">
          <!-- 채팅방 썸네일 이미지 -->
          <img src="https://via.placeholder.com/40" alt="채팅방 썸네일">
        </div>
        <div class="chat-info">
          <div class="chat-title">{{ chat.title }}</div>
          <div class="last-message">{{ chat.lastMessage }}</div>
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

export default {
  components: {
    FriendsListComp,
  },
  data() {
    return {
      showFriendsListComp: false,
      chatList: [
        { title: '친구 1', lastMessage: '안녕하세요!' },
        { title: '친구 2', lastMessage: '뭐해?' },
        { title: '친구 3', lastMessage: '밥 먹었어?' },
      ],
    };
  },
  methods: {
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
}

.chat-info {
  margin-left: 10px;
}

.chat-title {
  font-weight: bold;
}

.last-message {
  color: #888;
}

.new-chat{
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>

<template>
  <div class="friends-list-container">
    <h2>Friends List</h2>
    <div class="friend-item" v-for="friend in friends" :key="friend.id">
      <input type="radio" :id="'friend_' + friend.id" v-model="selectedFriend" :value="friend.id">
      <label :for="'friend_' + friend.id">{{ friend.name }}</label>
    </div>
    <button class="btn btn-primary" @click="openNewChat">Go</button>

    <div v-if="showNewChatComp" class="modal">
      <div class="modal-content">
        <span class="close-chat" @click="closeNewChatComp">&times;</span>
          <NewChatComp :selectedFriendName="selectedFriend" @close="closeNewChatComp" />
      </div>
    </div>
        
  </div>
</template>

<script>
import NewChatComp from '@/components/chat/NewChatComp';

export default {
  components: {
    NewChatComp,
  },
  data() {
    return {
      friends: [
        { id: 1, name: '친구 1' },
        { id: 2, name: '친구 2' },
        { id: 3, name: '친구 3' },
      ],
      selectedFriend: null,
      showNewChatComp: false,
    };
  },
  methods: {
    openNewChat() {
      if (this.selectedFriend !== null) {
        const selectedFriend = this.friends.find(friend => friend.id === parseInt(this.selectedFriend));
        alert(`선택한 친구: ${selectedFriend.name}`);
        this.showNewChatComp = true;
        this.selectedFriend = selectedFriend.name;
      } else {
        alert('친구를 선택하세요.');
      }
    },
    closeNewChatComp() {
      this.showNewChatComp = false;
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
  width: 50%;
  background-color: #fefefe;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  margin-top:70px;
}

.close-chat {
  color: #aaa;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}

.friends-list-container {
  /* max-width: 50%;
  max-height: 150%; */
  /* margin: 0 auto; */
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.friend-item {
  width: 100%;
  margin-bottom: 10px;
}

/* 추가적인 스타일링을 필요에 따라 여기에 추가하세요 */
</style>

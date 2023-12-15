<template>
  <div class="friends-list-container">
    <h2>Friends List</h2>
    <div class="friend-item" v-for="friend in friends" :key="friend.id">
      <input type="radio" :id="'friend_' + friend.id" v-model="selectedFriend" :value="friend.id">
      <label :for="'friend_' + friend.id" style="margin-left:10px;">{{ friend.email }}</label>
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
import axios from 'axios';

export default {
  components: {
    NewChatComp,
  },
  data() {
    return {
      userEmail: null,
      friends: [],
      selectedFriend: null,
      showNewChatComp: false,
    };
  },
  mounted(){
    this.getFriendsList();
    this.userEmail = sessionStorage.getItem('userEmail');
  },
  methods: {
    getFriendsList(){
      const url = 'http://localhost:7001/getFriendsList';

      axios.get(url)
        .then(response => {
          console.log(response.data);
          for(var i = 0; i < response.data.length; i++){
            if(response.data[i].EMAIL !== this.userEmail){
              var data = {
                id : i,
                email : response.data[i].EMAIL
              }
              this.friends.push(data);
            }
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    openNewChat() {
      if (this.selectedFriend !== null) {
        const selectedFriend = this.friends.find(friend => friend.id === parseInt(this.selectedFriend));
        console.log(`선택한 친구: ${selectedFriend.email}`);
        this.showNewChatComp = true;
        this.selectedFriend = selectedFriend.email;
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

.close-chat :hover{
  color: #e10d0d;
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

</style>

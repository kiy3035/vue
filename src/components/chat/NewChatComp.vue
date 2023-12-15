<template>

  <div class="chat-container">
    <div class="chat-messages">
      {{selectedFriendName}}
      <!-- <p v-if="connected">소켓이 연결되어 있습니다</p>
      <p v-else>소켓이 연결되어 있지 않습니다</p> -->
        <div
            v-for="(message, index) in messages"
            :key="index"
            :class="{'my-message': message.sender === 'me', 'your-message': message.sender !== 'me'}"
        >
            {{ message.message }}
        </div>
    </div>

    <!-- 메시지 입력 폼 -->
    <div class="form">
      <input
        class="form__input"
        type="text"
        placeholder="메세지를 입력하세요."
        v-model.trim="message"
        @keyup.enter="sendMessage"
      />
      <div @click="sendMessage" class="form__submit">
        <svg
          width="30"
          height="30"
          viewBox="0 0 68 68"
          fill="#CCCCCC"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_26_10)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M48.0833 19.799C48.619 20.3347 48.806 21.127 48.5665 21.8457L35.8385 60.0294C35.5946 60.7614 34.9513 61.2877 34.1855 61.382C33.4198 61.4763 32.6681 61.1217 32.2539 60.4707L22.593 45.2893L7.41158 35.6285C6.76065 35.2142 6.40604 34.4625 6.50031 33.6968C6.59458 32.931 7.12092 32.2878 7.85287 32.0438L46.0366 19.3159C46.7553 19.0763 47.5476 19.2633 48.0833 19.799ZM26.5903 44.1204L33.3726 54.7782L42.0926 28.6181L26.5903 44.1204ZM39.2642 25.7897L23.7619 41.292L13.1041 34.5097L39.2642 25.7897Z"
              fill=""
            />
          </g>
          <defs>
            <clipPath id="clip0_26_10">
              <rect
                width="48"
                height="48"
                fill="white"
                transform="translate(33.9412) rotate(45)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    selectedFriendName: String
  },
  data() {
    return {
      message: '',
      messages: [],
      socket: null,
      // connected: false,
      userEmail: null,
    };
  },
  methods: {
    sendMessage() {
      const newMessage = {
        sender: "me",
        message: this.message
      };

      const chatData = {
        myId: this.userEmail,
        otherId: this.selectedFriendName,
        message: this.message
      };

      this.socket.send(JSON.stringify(chatData));

      this.messages.push(newMessage);
      this.message = '';
    },
    getAllMessages(){
      const myId = this.userEmail;
      const otherId = this.selectedFriendName;

      const url = `http://localhost:7001/getAllMessages?myId=${myId}&otherId=${otherId}`;

      axios.get(url)
        .then(response => {
          console.log(response.data);

          for(var i = 0; i < response.data.length; i++){
            if(this.userEmail == response.data[i].MY_ID){
              var messageFromMe = {
                sender: "me",
                message: response.data[i].MESSAGE
              };
              this.messages.push(messageFromMe);
            }else{
              var messageFromOther = {
                sender: "other",
                message: response.data[i].MESSAGE
              };
              this.messages.push(messageFromOther);
            }
          }

        })
        .catch(error => {
          console.error(error);
        });
    },
  },
  mounted() {
    this.userEmail = sessionStorage.getItem('userEmail');

    this.getAllMessages();

    this.socket = new WebSocket('ws://localhost:7001/ws/chat');

    this.socket.addEventListener('open', () => {
      // this.connected = true;
    });

    this.socket.addEventListener('close', () => {
      // this.connected = false;
    });

    
  },
  beforeUnmount() {
    // if (this.socket) {
    //   this.socket.disconnect();
    // }
  },
};

</script>


<style scoped>
  @import '@/css/newChatForm.css';

</style>

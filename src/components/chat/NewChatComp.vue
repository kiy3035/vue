<template>
  <div class="chat-container" ref="chatContainer" >
    <div class="chat-messages">
        <div class="selected-friend">
          {{selectedFriendName}}
        </div>
        <div v-for="(message, index) in messages" :key="index">
          <div v-if="shouldShowDate(index, message)" class="message-date">
            <span class="date-text">{{ message.firstMessage }}</span>
          </div>
          <div class="message-bubble">
            <div :class="{'my-message': message.sender === 'me', 'your-message': message.sender === 'other'}">
                {{ message.message }}
              <div class="message-time">
                {{ message.time }}
              </div>
            </div>  
          </div>
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
    selectedFriendName: String,
  },
  data() {
    return {
      message: '',
      messages: [],
      socket: null,
      userEmail: null,
      dateArray: [],
    };
  },
  methods: {
    scrollToBottom() { // 안돼서 해야함
      const chatContainer = this.$refs.chatContainer;
      if (chatContainer) {
        console.log("스크롤바 함순데 안됨 ㅡㅡ")
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }    
    },
    sendMessage() {
      const newMessage = {
        sender: "me",
        message: this.message,
        time: extractTimeFromDate(new Date),
        firstMessage: setYYMMDD(new Date)  // YYYY MM DD 요일
      };

      const chatData = {
        myId: this.userEmail,
        otherId: this.selectedFriendName,
        message: this.message
      };

      this.socket.send(JSON.stringify(chatData));
      if(newMessage.message == ""){
        alert("내용을 입력하세요.");
        return;
      }
      this.messages.push(newMessage);
      this.message = '';
      this.scrollToBottom;
    },
    // 오늘 날짜인지 확인하는 메소드
    isToday(date) {
      const today = new Date();
      return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      );
    },
    shouldShowDate(index, message) {
      console.log("index:             " + index)
      console.log("message:             " + JSON.stringify(message))

      if (index === 0) {
        return true; // 첫 번째 메시지는 항상 날짜를 표시
      }

    // 이전 메시지의 firstMessage와 현재 메시지의 firstMessage 비교
    const prevFirstMessage = this.messages[index - 1].firstMessage;
    return message.firstMessage !== prevFirstMessage;
    },
    getAllMessages(){
      var myId = this.userEmail;
      var otherId = this.selectedFriendName;

      if(otherId === undefined){
        otherId = this.selectedFriendName;
      }

      const url = `http://localhost:7001/getAllMessages?myId=${myId}&otherId=${otherId}`;

      axios.get(url)
        .then(response => {
          console.log(response.data);

          for(var i = 0; i < response.data.length; i++){
            if(this.userEmail == response.data[i].MY_ID){
              var messageFromMe = {
                sender: "me",
                message: response.data[i].MESSAGE,
                time: extractTimeFromDate(response.data[i].INP_DATE), // 오후 HH:MM
                firstMessage: setYYMMDD(response.data[i].INP_DATE)  // YYYY MM DD 요일
              };
              this.messages.push(messageFromMe);
              console.log(this.messages)
            }else{
              var messageFromOther = {
                sender: "other",
                message: response.data[i].MESSAGE,
                time: extractTimeFromDate(response.data[i].INP_DATE),
                firstMessage: setYYMMDD(response.data[i].INP_DATE)
              };
              this.messages.push(messageFromOther);
            }
          }

        })
        .catch(error => {
          console.error(error);
        });
          this.scrollToBottom();
    },
  },
  mounted() {
    this.userEmail = sessionStorage.getItem('userEmail');

    this.getAllMessages();

    this.socket = new WebSocket('ws://localhost:7001/ws/chat');
  },
};

function extractTimeFromDate(time) {

  // 받은 날짜 문자열을 Date 객체로 변환
  const dateObject = new Date(time);

  // 한국 시간대로 변환
  dateObject.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });

  // 시간과 분을 가져오기
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();

  // 오전/오후 구분
  const period = hours < 12 ? '오전' : '오후';

  // 12시간제로 변환
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();

  // 오전/오후와 시간, 분을 문자열로 조합하여 반환
  return `${period} ${formattedHours}:${formattedMinutes}`;
}

function setYYMMDD(dateString) {
  const date = new Date(dateString);

  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: 'long',
  };

  const formattedDate = date.toLocaleDateString('ko-KR', options);

  return formattedDate;
}

</script>


<style scoped>
  @import '@/css/newChatForm.css';

</style>

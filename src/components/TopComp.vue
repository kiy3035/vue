<template>
  <div style="float:right;">
    <router-link to="/" class="btn" style="top: 30px; right: 10px;" data-text="Home"></router-link>
    <router-link to="/login" @click="logout" class="btn" style="top: 30px; right: 10px;"    
                 :data-text="loginInOut === 'Log In' ? 'Login' : 'Logout'"></router-link>
    <router-link to="/myPage" v-if="hideMyPage" class="btn" style="top: 30px; right: 10px;" data-text="My Page"></router-link>
    <!-- <router-link to="/fesco_login" class="btn" style="top: 30px; right: 10px; width: 150px;" data-text="FESCO Login"></router-link>
    <router-link to="/fesco_booking_entry" class="btn" style="top: 30px; right: 10px; width: 300px;" data-text="FESCO Booking Entry"></router-link>
    <router-link to="/fesco_joinTest" class="btn" style="top: 30px; right: 10px; width: 300px;" data-text="FESCO Join Test"></router-link> -->
  </div>
</template>


<script>

  export default {
  data() {
    return {
      loginInOut: "Log In",
      storedEmail: null,
      hideMyPage : false,
    };
  },
  created() {
    this.storedEmail = sessionStorage.getItem('userEmail');
    console.log("로그인한 이메일" + this.storedEmail);
    if (this.storedEmail) {
      this.loginInOut = "Log Out";
      this.hideMyPage = true; // 로그인 상태에서는 My Page 보이게
    }else{
      this.loginInOut = "Log In";
    }
  },
  methods: {
    logout() {
      if(this.loginInOut === "Log Out"){
        sessionStorage.removeItem('userEmail');
        alert("로그아웃 되었습니다.");
        this.loginInOut = "Log In";
        this.hideMyPage = false;
        console.log('hideMyPage 값:', this.hideMyPage);
      }
    },
  },
};

</script>


<style scoped>
  @import '@/css/bootstrap.css';

  .btn {
    transform: translate(0%, -50%);
    width: 100px;
    height: 30px;
    line-height: 30px;
    font-size: 15px;
    text-align: center;
    font-family: sans-serif;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    background: #ccc;
    position: relative;
  }

  .btn:before{
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    background: #AFA5D9;
    color: #fff;
    transition: 0.5s;
    transform-origin: bottom;
    transform: translatey(-100%) rotatex(90deg);
  }

  .btn:hover:before {
    transform: translatey(0) rotatex(0deg);
  }

  .btn:after{
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    background: #6623d9;
    color: #fff;
    transition: 0.5s;
    transform-origin: top;
    transform: translatey(0) rotatex(0deg);
  }
  .btn:hover:after
  {
    transform: translatey(100%) rotatex(90deg);
  }

</style>
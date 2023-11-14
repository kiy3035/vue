<template>

  <div class="container2">
    <link rel="stylesheet" href=https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css /> <!-- font awesome 라이브러리 -->
    
    <!-- Heading -->
    <h1 class="h1man">{{ pageTitle }}</h1>
    
    <!-- Links -->
    <ul class="links">
      <li>
        <a href="#" @click="changePage($event, 'signin')">SIGN IN</a>
      </li>
      <li>
        <a href="#" @click="changePage($event, 'signup')">SIGN UP</a>
      </li>
      <li>
        <a href="#" @click="changePage($event, 'reset')" style="float:right;">RESET</a>
      </li>
    </ul>
    
    <!-- Form -->
    <form action="http://localhost:7001/login" method="post" id="loginForm" >
      <!-- email input -->
      <div class="first-input input__block first-input__block">
        <input type="email" class="input" id="email" name="email" placeholder="Email" />
      </div>
      <!-- password input -->
      <div class="input__block">
        <input type="password" class="input" id="password" name="password"  placeholder="Password" />
      </div>
      <!-- repeat password input -->
      <div class="input__block">
        <input type="password" class="input repeat__password" id="repeat__password" placeholder="Repeat password" />
      </div>
      <!-- sign in button -->
      <button type="button" class="signin__btn" id="btnSubmit">
        Sign in
      </button>
    </form>
    <!-- separator -->
    <div class="separator">
      <p>OR</p>
    </div>
    <!-- google button -->
    <button class="google__btn">
      <i class="fab fa fa-google"></i>
      Sign in with Google
    </button>
    <!-- google button -->
    <button class="github__btn">
      <i class="fab fa fa-github"></i>
      Sign in with GitHub
    </button>

    <footer>
      <p>
        <i class="fa fa-star"></i> 
        Thank you for visiting
        <i class="fa fa-star"></i> 
      </p>
      <p>
        Chouaib Blgn :
        <a href="https://www.facebook.com/chouaib45" >
          <i class="fab fa fa-facebook"></i>
        </a>
        <a href="http://twitter.com/chouaibblgn45">
          <i class="fab fa fa-twitter"></i> 
        </a>
        <a href="http://instagram.com/chouaib_blgn">
          <i class="fab fa fa-instagram"></i> 
        </a>
        <a href="http://linkedin.com/in/chouaibblgn/">
          <i class="fab fa fa-linkedin"></i>
        </a>
        <a href="https://www.behance.net/geek30">
          <i class="fab fa fa-behance"></i>
        </a>
      </p>
    </footer>
  </div>

</template>


<script>
import $ from 'jquery';

  var type;

  $(document).ready(function(){

  });

export default {
  data() {
    return {
      currentPage: 'signin', // Default page
    };
  },
  computed: {
    pageTitle() {
      return this.currentPage === 'signin' ? 'SIGN IN' :
             this.currentPage === 'signup' ? 'SIGN UP' :
             this.currentPage === 'reset' ? 'RESET' : '';
    },
  },
  methods: {
    changePage($event, page) {
      let first_input = $("form").find(".first-input");
      let hidden_input = $("form").find(".input__block").find("#repeat__password");
      let signin_btn  = $("form").find(".signin__btn");

      if(page === "signin"){
        $($event.currentTarget).parent().parent().siblings("h1").text("SIGN IN");
        $($event.currentTarget).parent().css("opacity","1");
        $($event.currentTarget).parent().siblings().css("opacity",".6");
        first_input.addClass("first-input__block").removeClass("signup-input__block");
        hidden_input.css({
          "opacity" : "0",
          "display" : "none"
        });
        signin_btn.text("Sign in");
        this.currentPage = page;
      }
      else if(page === "signup"){
        $($event.currentTarget).parent().parent().siblings("h1").text("SIGN UP");
        $($event.currentTarget).parent().css("opacity","1");
        $($event.currentTarget).parent().siblings().css("opacity",".6");
        first_input.removeClass("first-input__block").addClass("signup-input__block");
        hidden_input.css({
          "opacity" : "1",
          "display" : "block"
        });
        signin_btn.text("Sign up");
        this.currentPage = page;
      }
      else if(page === "reset"){
        $('input').each(function() {
          $(this).val('');
          $("#email").focus();
        });
      }
    },
  },
  mounted() {
    document.getElementById("btnSubmit").addEventListener("click", submitForm);
  },
}

function validation() {

  type = $(".h1man").text(); // signin, signup
  var email = $("#email").val();
  var password = $("#password").val();
  var repeatPassword = $("#repeat__password").val();

  if(type === "SIGN UP"){
    if(email === ''){
      alert("email 을 입력하세요.");
      $("#email").focus();
      return;
    }
    if(password !== '' && repeatPassword !== ''){
      if(password !== repeatPassword) {
        alert("비밀번호가 일치하지 않습니다.");
        $("#password").focus();
        return;
      }
    }
    if(password === '' || repeatPassword === ''){
      alert("password 을 입력하세요.");
      $("#password").focus();
      return;
    }
  }
  else if(type === "SIGN IN"){
    if(email === '' && password === ''){
      alert("email 을 입력하세요.");
      $("#email").focus();
      return;
    }
    if(email === '' && password !== ''){
      alert("email 을 입력하세요.");
      $("#email").focus();
      return;
    }
    if(password === '' && email !== ''){
      alert("password 를 입력하세요.");
      $("#password").focus();
      return;
    }
  }

  return true;
}

function submitForm(event) {
    event.preventDefault();
    var valid = validation();

    if(!valid){
      return false;
    }

    // 폼 내부 데이터 가져오기
    var formData = new FormData(document.getElementById("loginForm"));

    // FormData 객체를 JSON 객체로 변환
    var formDataJSON = {};

    formData.forEach(function (value, key) {
      formDataJSON[key] = value;
    });

    if(type === "SIGN UP"){
      $.ajax({
        type: "POST",
        url: "http://localhost:7001/signup",
        data: JSON.stringify(formDataJSON),
        contentType: 'application/json',
        success: function() {
          alert("회원가입을 축하드립니다.");
          window.location.href = '/login';
        }
      });
    }else if(type === "SIGN IN"){
      $.ajax({
        type: "POST",
        url: "http://localhost:7001/login",
        data: JSON.stringify(formDataJSON),
        contentType: 'application/json',
        success: function(response) {
          if (response.includes("@")) {
            alert("로그인 성공");
            sessionStorage.setItem('userEmail', response);
            window.location.href = '/';
          }else{
            alert("로그인 실패.\n아이디와 비밀번호를 확인하세요.");
          }
        },
        error: function(xhr, status, error) {
          // 서버와의 통신 중 에러가 발생했을 때의 처리
          alert("에러 발생: " + error);
        }
      });
    }
}


</script>


<style scoped>
  @import '@/css/loginPage.css';
</style>
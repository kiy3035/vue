<template>
    <div class="form-container">
        <form action="http://localhost:7001" method="post" id="updateForm" enctype="multipart/form-data">
            <input type="file" ref="image" id="image" name="image" style="display:none;" @change="changedImg($event)">
            <label>Profile Image
              <font-awesome-icon 
                :icon="['fas', 'pen']" 
                @click="inputImage"
                style="cursor:pointer"/>
            </label>
            <img v-if="imageUrl" :src="require(`@/assets/${imageUrl}`)">
            <img v-if="changeImageUrl" :src="changeImageUrl">

            <br>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" v-model="email" :readonly="isReadonly" required>

            <label for="password">Password</label>
            <input type="password" id="password" name="password" required>

            <label for="password2">Repeat Password</label>
            <input type="password" id="password2" name="password2" required>

            <button type="button" id="btnSubmit">변경</button>
        </form>
  </div>
</template>


<script>
import $ from 'jquery';
import axios from 'axios';
import {gfnAlert} from '@/js/common.js';


export default {
  data() {
    return {
      email: sessionStorage.getItem('userEmail') || '',
      password: '',
      password2: '',
      isReadonly: true,
      selectedFile: null,
      imageUrl: null,
      changeImageUrl: null,

    };
  },
  methods: {
    inputImage(){
      this.$refs.image.click();
    },
    changedImg(event){
      if (event.target.files.length > 0) {
        this.selectedFile = event.target.files[0];
        const file = this.$refs.image.files[0];
        this.imageUrl = null;
        this.changeImageUrl = URL.createObjectURL(file);
      }
    },
    async getUserImg(){

      const url = 'http://localhost:7001/getUserImage';

      const data = {
        params: {
          email: this.email,
        },
      };

      axios.get(url, data)
        .then((response) => {
          console.log(response.data);
          this.imageUrl = response.data;
        })
        .catch(error => {
          console.log('Error:', error);
        });
    }
  },
  created() {
    const storedEmail = sessionStorage.getItem('userEmail');
    if (storedEmail) {
      this.email = storedEmail;
    }
  },
  mounted() {
    document.getElementById("btnSubmit").addEventListener("click", submitForm);
    this.getUserImg();
  },
};

  function validation() {

    var password = $("#password").val();
    var password2 = $("#password2").val();

    if(password !== password2){
      gfnAlert('비밀번호가 일치하지 않습니다.');
      $("#password2").focus();
      return;
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
      var formData = new FormData(document.getElementById("updateForm"));

      // FormData 객체를 JSON 객체로 변환
      var formDataJSON = {};

      formData.forEach(function (value, key) {
        formDataJSON[key] = value;
        console.log(key, value)
      });

      const url = 'http://localhost:7001/updateUserInfo';
      const axiosConfig = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };

      axios.post(url, formDataJSON, axiosConfig)
        .then(() => {
          gfnAlert("정보가 변경되었습니다.");
          window.location.href = '/';
        })
        .catch(error => {
          console.log('Error:', error);
        });
      
  }


</script>


<style scoped>

.form-container {
  width: 500px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #007bb5;
}

input[readonly] {
  background-color: #f2f2f2; /* 회색 배경색 */
  color: #666; /* 글자 색 */
  cursor: not-allowed; /* 마우스 커서를 표시하지 않음 */
}

</style>
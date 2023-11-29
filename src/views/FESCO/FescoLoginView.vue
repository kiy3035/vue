<template>
  <form @submit.prevent="login">
    <label for="username">Username:</label>
    <input type="text" id="username" v-model="username" required/>
    <br/>
    <label for="password">Password:</label>
    <input type="password" id="password" v-model="password" required/>
    <br/>
    <button type="submit">Login</button>
  </form>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      console.log('Username:', this.username);
      console.log('Password:', this.password);

      const datas = {
        username : this.username,
        password : this.password,
      }

      const url = 'http://localhost:7001/FESCO/login'

      axios.post(url, datas)
        .then((reponse) => {
            alert(reponse);
        })
        .catch(error => {
          console.log('Error:', error);
        });
    },
  },
};
</script>

<style scoped>
form {
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>

<template>
  <form @submit.prevent="joinTest">
    <label for="arapNo">arapNo:</label>
    <input type="text" id="arapNo" v-model="arapNo" autocomplete="off" required />
    <br/>
    <br/>
    <button type="submit">Go</button>
  </form>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      arapNo: '',
    };
  },
  methods: {
    joinTest() {
      console.log('arapNo:', this.arapNo);

      const datas = {
        arapNo : this.arapNo,
      }

      const url = 'http://localhost:7001/FESCO/joinTest'

      axios.post(url, datas)
        .then((response) => {
            alert(response.data)
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

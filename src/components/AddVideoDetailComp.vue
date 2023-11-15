<template>
  <div>
    <div class="form-container">
      <button class="close-button" @click="closeForm">
        <font-awesome-icon :icon="['fas', 'times']" />
      </button>
      <form @submit.prevent="createPost" style="margin-top:50px;">
        <label for="title">제목</label>
        <input v-model="post.title" type="text" id="title" required />

        <label for="content">내용</label>
        <textarea v-model="post.content" id="content" rows="4" required></textarea>

         <br>
        <button type="submit">등록</button>
      </form>
    </div>
  </div>
</template>


<script>

export default {
  data() {
    return {
      post: {
        title: '',
        content: '',
      },
    };
  },
  components: {
    // FontAwesomeIcon,
  },
  
  methods: {
    createPost() {
      console.log('Creating post:', this.post);
      // Your logic for creating a post goes here
    },
    closeForm() {
      this.$emit("closeForm");
    },
  },
};
</script>


<style scoped>

h1 {
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

form {
  max-width: 400px;
  margin: 0 auto;
}

label {
  display: block;
  margin-bottom: 8px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
}

button {
  background-color: #4caf50;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
}

.form-container {
  position: relative;
  max-width: 400px;
  height: 380px;
  margin: 0 auto;
}

.close-button {
  position: absolute;
  top: -200px;
  right: -5px;
  background: none;
  border: none;
  cursor: pointer;
  color: green;
}
</style>

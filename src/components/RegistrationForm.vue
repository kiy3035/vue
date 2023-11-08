<template>
  <div class="container">
    <h1>회원가입</h1>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="username">사용자 이름</label>
        <input type="text" class="form-control" id="username" v-model="formData.username" required>
      </div>
      <div class="form-group">
        <label for="email">이메일 주소</label>
        <input type="email" class="form-control" id="email" v-model="formData.email" required>
      </div>
      <div class="form-group">
        <label for="password">비밀번호</label>
        <input type="password" class="form-control" id="password" v-model="formData.password" required>
      </div>
      <button type="submit" class="btn btn-primary">가입하기</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    register() {
      // 회원가입 로직을 구현하고 API 호출 등을 수행합니다.
      console.log('회원가입 정보:', this.formData);
      // 여기에서 실제 서버 호출을 추가할 수 있습니다.
    },
  },
};
</script>

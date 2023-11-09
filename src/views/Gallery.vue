<template>
  <div>
    <!-- 파일 업로드 폼 -->
    <input type="text" v-model="videoData.title" placeholder="제목" />
    <input type="text" v-model="videoData.description" placeholder="설명" />
    <input type="file" @change="handleFileChange" accept="video/*" />
    <button @click="uploadVideo">업로드</button>

    <!-- 업로드된 동영상 목록 -->
    <div v-for="video in uploadedVideos" :key="video._id">
      <h3>{{ video.title }}</h3>
      <p>{{ video.description }}</p>
      <video :src="`/uploads/${video.videoPath}`" controls></video>
    </div>
  </div>
</template>

<script>
export default {
  name:'kk-',
  data() {
    return {
      videoData: {
        title: "",
        description: "",
        videoFile: null,
      },
      uploadedVideos: [],
    };
  },
  methods: {
    handleFileChange(event) {
      this.videoData.videoFile = event.target.files[0];
    },
    async uploadVideo() {
      const formData = new FormData();
      formData.append("title", this.videoData.title);
      formData.append("description", this.videoData.description);
      formData.append("video", this.videoData.videoFile);

      try {
        // 동영상 업로드 API 엔드포인트로 POST 요청 보내기
        const response = await fetch("http://localhost:3000/upload", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        if (data.success) {
          // 업로드 성공 시 동영상 목록 다시 가져오기
          this.getUploadedVideos();
        } else {
          console.error("업로드 실패");
        }
      } catch (error) {
        console.error("업로드 오류:", error);
      }
    },
    async getUploadedVideos() {
      try {
        // 동영상 목록 API 엔드포인트로 GET 요청 보내서 업로드된 동영상 목록 가져오기
        const response = await fetch("http://localhost:3000/videos");
        this.uploadedVideos = await response.json();
      } catch (error) {
        console.error("동영상 목록 가져오기 오류:", error);
      }
    },
  },
  mounted() {
    // 페이지 로드 시 업로드된 동영상 목록 가져오기
    this.getUploadedVideos();
  },
};
</script>

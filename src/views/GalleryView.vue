<template>
  <div>
    <!-- 파일 업로드 폼 -->
    <input type="text" v-model="videoData.title" placeholder="제목" />
    <input type="text" v-model="videoData.description" placeholder="설명" />
    <input type="file" @change="handleFileChange" accept="video/*" />
    <button @click="uploadVideo">업로드</button>

    <!-- 업로드된 동영상 목록 -->
    <div v-for="video in uploadedVideos" :key="video.id">
      <h3>{{ video.title }}</h3>
      <p>{{ video.description }}</p>
      <video :src="video.videoPath" controls></video>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryView",
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
    name:'ho-',
    handleFileChange(event) {
      this.videoData.videoFile = event.target.files[0];
    },
    async uploadVideo() {
      const formData = new FormData();
      formData.append("title", this.videoData.title);
      formData.append("description", this.videoData.description);
      formData.append("video", this.videoData.videoFile);

      try {
        const response = await fetch("http://localhost:8080/api/videos/upload", {
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
        const response = await fetch("http://localhost:8080/api/videos");
        const data = await response.json();
        this.uploadedVideos = data.data;
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

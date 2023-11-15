<template>
  <div class="video-list">
    <div v-for="video in videos" :key="video.id" class="video-item">
      <video :src="video.path" controls></video>
      <h3>{{ video.title }}</h3>
      <p>{{ video.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: [],
    };
  },
  mounted() {
    // 컴포넌트가 마운트되면 비디오 데이터를 가져옴
    this.fetchVideos();
  },
  methods: {
    async fetchVideos() {
      try {
        // 비디오 데이터 가져오는 API 호출
        const response = await fetch('http://localhost:7001/api/videos');
        const data = await response.json();
        // 가져온 데이터를 컴포넌트의 데이터에 할당
        this.videos = data.map(video => {
          console.log(video);
          return {
            id: video.video_no,
            title: video.title,
            path: video.video_no,
            // description: video.description,       부가적인 설명인듯? 내용?
            // filePath: `data:${video.contentType};base64,${video.base64Data}`,
            // path: video.path,
            // path: '1699953924404.mp4',
            // path: video.video_no,
            // path: process.env.BASE_URL + video.path,
          };
        });
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    },
  },
};
</script>

<style scoped>
  .video-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .video-item {
    width: 500px;
    margin: 40px;
  }

  video {
    width: 100%;
    height: auto;
  }
</style>

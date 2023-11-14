<template>
  <div class="video-list">
    <div v-for="video in videos" :key="video.id" class="video-item">
      <iframe :src="getVideoEmbedUrl(video.url)" frameborder="0" allowfullscreen></iframe>
      <h3>{{ video.title }}</h3>
      <p>{{ video.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          id: 1,
          title: "Video 1",
          description: "Description of Video 1",
          url: "https://www.youtube.com/watch?v=cMTdq4VGqoI"
        },
        {
          id: 2,
          title: "Video 2",
          description: "Description of Video 2",
          url: "https://www.youtube.com/watch?v=oqkv5CGFukQ"
        },
        // Add more video objects as needed
      ]
    };
  },
  methods: {
    getVideoEmbedUrl(url) {
      const videoId = url.split("v=")[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
  }
};
</script>

<style scoped>
.video-list {
  display: flex;
  flex-direction: column; /* 수정된 부분: 수직으로 나열 */
  align-items: center; /* 추가된 부분: 중앙 정렬 */
}

.video-item {
  width: 300px;
  margin: 20px;
}

iframe {
  width: 100%;
  height: 200px;
}
</style>

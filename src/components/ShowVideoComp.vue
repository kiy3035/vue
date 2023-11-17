<template>
  <div class="video-list" :style="{ alignItems: videoListAlignItems }">
    <div v-for="video in videos" :key="video.id" class="video-item" :data-video-path="video.path" ref="videoItem">
      <video :src="video.path" controls muted ref="videoElement" @play="handleVideoPlay"></video>
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
      observer: null,
      autoPlayVideoIndex: -1,
      videoListAlignItems: 'center', // 초기값 설정
    };
  },
  mounted() {
    this.fetchVideos();
  },
  methods: {
    async fetchVideos() {
      try {
        const response = await fetch('http://localhost:7001/api/videos');
        const data = await response.json();
        this.videos = data.map(video => ({
          id: video.video_no,
          title: video.title,
          path: video.video_no,
        }));

        this.$nextTick(() => this.initIntersectionObserver());
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    },
    initIntersectionObserver() {
      this.observer = new IntersectionObserver(this.handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      });

      if (this.$refs.videoItem) {
        this.$refs.videoItem.forEach(item => this.observer.observe(item));
      }
    },
    handleIntersection(entries) {
      entries.forEach(entry => {
        const videoElement = entry.target.querySelector('video');

        if (entry.isIntersecting) {
          videoElement.play();

          if (this.autoPlayVideoIndex !== -1) {
            this.$refs.videoItem[this.autoPlayVideoIndex].classList.remove('focused');
          }

          entry.target.classList.add('focused');
          this.autoPlayVideoIndex = this.videos.findIndex(video => video.path === entry.target.dataset.videoPath);

          // 왼쪽 정렬로 변경
          this.videoListAlignItems = 'flex-start';

          // 전체 바디에 배경색 적용
          document.body.style.background = 'black';

          // 중앙으로 스크롤 조절
          const rect = entry.target.getBoundingClientRect();
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const centerY = rect.top + scrollTop - window.innerHeight / 2 + rect.height / 2;
          window.scrollTo({ top: centerY, behavior: 'smooth' });
        } else {
          videoElement.pause();
          videoElement.currentTime = 0;

          entry.target.classList.remove('focused');
          document.body.style.background = 'none'; // 영상이 보이지 않을 때 배경 제거

          // 다시 가운데 정렬로 변경
          this.videoListAlignItems = 'center';
        }
      });
    },
    handleVideoPlay(event) {
      this.$refs.videoItem.forEach(item => {
        const videoElement = item.querySelector('video');
        if (videoElement !== event.target) {
          videoElement.pause();
          videoElement.currentTime = 0;
          item.classList.remove('focused');
        }
      });
    },
  },
};
</script>

<style scoped>
  .video-list {
    display: flex;
    flex-direction: column;
    margin-top: 600px;
  }

  .video-item {
    width: 800px;
    height: 600px;
    margin: 150px;
    display: flex;
    flex-direction: column;
    align-items: center; /* 중앙 정렬로 초기화 */
  }

  .focused {
    border: 2px solid black; /* 포커스 시 보더 추가 */
  }

  video {
    width: 100%;
    height: 100%;
  }
</style>

<template>
  <div>
      <font-awesome-icon
        :icon="['fas', 'play']"
        id="playIcon"
        @click="toggleVideoList"
        v-show="showIcon"
        style="width:150px; height:150px; margin-top:150px; color: #000000;" />
      <div v-if="divVideoList" class="video-list" :style="{ alignItems: videoListAlignItems }" style="margin-top:-100px;">
          <div v-for="video in videos" :key="video.id" class="video-item" :data-video-path="video.path" ref="videoItem">
              <div class="video-frame">
                  <video :src="video.path" controls muted ref="videoElement" @play="handleVideoPlay"></video>
              </div>    
              <div id="video-info">
                <div id="form-container">
                  <div id="form-inner-container">
                    <div id="videoInfo-container">
                      <h2>{{ video.title }}</h2>
                      <form>

                        <div class="icon-container">
                          <font-awesome-icon icon="calendar" class="iconCSS"/>
                          <input type="text" name="inpDT" id="inpDT" :value="formatVideoDate(video.inpDT)" readonly>
                        </div>

                        <div class="icon-container">
                          <font-awesome-icon icon="user" class="iconCSS"/>
                          <input type="text" name="nickname" id="nickname" v-model="video.nickname" readonly>
                        </div>
                        
                        <div class="icon-container">
                          <font-awesome-icon icon="file-lines" class="iconCSS"/>
                          <textarea class="content-textarea" name="content" id="content" v-model="video.content" readonly></textarea>
                        </div>

                        <div id="form-controls">
                          <button type="button">
                              <font-awesome-icon icon="thumbs-up" class="iconCSS" id="like" name="bottomIcon"/>
                          </button>
                          <button type="button" >
                              <font-awesome-icon icon="comment" class="iconCSS" id="comment" name="bottomIcon"/>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
          </div>
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
      divVideoList: false,
      isHovered: false,
    };
  },
  methods: {
    formatVideoDate(date) {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = new Date(date).toLocaleDateString('ko-KR', options);
    return formattedDate;
    },
    toggleVideoList() {
      this.divVideoList = !this.divVideoList;
      this.showIcon = !this.showIcon;
      this.fetchVideos();
    },
    showIcon() {
      this.showIcon = !this.showIcon;
    },
    async fetchVideos() {
      try {
        const response = await fetch('http://localhost:7001/api/videos');
        const data = await response.json();
        this.videos = data.map(video => ({
          id: video.video_no,
          title: video.title,
          content: video.content,
          nickname: video.user_nickname,
          inpDT: video.inp_dt,
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
        threshold: 0.8,
      });

      if (this.$refs.videoItem) {
        this.$refs.videoItem.forEach(item => this.observer.observe(item));
      }
    },
    handleIntersection(entries) {
      console.log(entries);

      entries.forEach(entry => {
        const videoElement = entry.target.querySelector('video');

        if (entry.isIntersecting) {
          videoElement.play();
          this.$emit('valueFromShow', 'D3D3D3');

          if (this.autoPlayVideoIndex !== -1) {
            this.$refs.videoItem[this.autoPlayVideoIndex].classList.remove('focused');
          }

          entry.target.classList.add('focused');
          this.autoPlayVideoIndex = this.videos.findIndex(video => video.path === entry.target.dataset.videoPath);

          // 왼쪽 정렬로 변경
          this.videoListAlignItems = 'flex-start';

          // 전체 바디에 배경색 적용
          document.body.style.background = '#D3D3D3 ';

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
          // homeView로 값 전달
          this.$emit('valueFromShow', 'noFocus');
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
  @import '@/css/videoInfo.css';

  .video-list {
    display: flex;
    flex-direction: column;
    margin-top: 600px;
    flex-wrap: wrap;
  }

  .video-item {
    width: 1400px;
    height: 600px;
    margin: 150px;
    display: flex;
    flex-direction: row;
    align-items: center; /* 중앙 정렬로 초기화 */
  }

  .video-frame {
    flex: 1.3; /* 자식 요소들이 같은 공간을 차지하도록 함 */
    box-sizing: border-box;
  }

  .focused {
  }

  video {
    width: 100%;
    height: 100%;
  }

  #video-info {
    flex: 1; /* 자식 요소들이 같은 공간을 차지하도록 함 */
    box-sizing: border-box;
  }

  .icon-container {
    display: flex;
    align-items: center;
  }

  .iconCSS {
    width: 30px;
    height: 40px;
    margin-right: 10px;
  }

  #form-controls [name="bottomIcon"] :hover{
    color: red;
  }

  .content-textarea {
    height: 200px;
  }

</style>

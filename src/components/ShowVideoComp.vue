<template>
  <div>
      <CommentComp v-if="showComp" :videoData="clickedVideo" @close="showComp = false" @commentCount="handleCommentCount"/>
      <font-awesome-icon
        :icon="['fas', 'play']"
        id="playIcon"
        @click="toggleVideoList"
        v-show="showIcon"
        style="width:150px; height:150px; margin-top:150px; color: #000000;" />
      <div v-if="divVideoList" class="video-list" :style="{ alignItems: videoListAlignItems }" style="margin-top:-100px;">
          <div v-for="video in videos" :key="video.id" class="video-item" ref="videoItem">
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
                          <font-awesome-icon icon="calendar" class="iconCSS" @mouseover="handleMouseOver(index)" @mouseout="handleMoustOut"/>
                          <div v-if="showTooltip" class="tooltip" />날짜
                          <input type="text" name="inpDT" id="inpDT" :value="formatVideoDate(video.inpDT)" readonly>
                        </div>

                        <div class="icon-container">
                          <font-awesome-icon icon="user" class="iconCSS" @mouseover="handleMouseOver('user')" @mouseout="handleMoustOut"/>
                          <div v-if="showTooltip2" class="tooltip" />작성자
                          <input type="text" name="email" id="email" v-model="video.email" readonly>
                        </div>
                        
                        <div class="icon-container">
                          <font-awesome-icon icon="bars" class="iconCSS" @mouseover="handleMouseOver('bars')" @mouseout="handleMoustOut"/>
                          <div v-if="showTooltip3" class="tooltip" />카테고리
                          <input type="text" name="category" id="category" v-model="video.category" readonly />
                        </div>

                        <div class="icon-container">
                          <font-awesome-icon icon="file-lines" class="iconCSS" @mouseover="handleMouseOver('file-lines')" @mouseout="handleMoustOut"/>
                          <div v-if="showTooltip4" class="tooltip" />내용
                          <textarea class="content-textarea" name="content" id="content" v-model="video.content" readonly />
                        </div>

                        <div id="form-controls">
                          <button type="button" class="like-comment">
                              <input v-model="video.id" style="display:none;">
                              <input v-model="video.title" style="display:none;">
                              <font-awesome-icon icon="thumbs-up" class="iconCSS" id="like" name="bottomIcon" @click="clickLike(video)" :style="{ color: video.likeIconColor }"/>
                              <div style="margin-right: 15px;">{{ video.likeCount }}</div>
                          </button>
                          <button type="button" class="like-comment">
                              <font-awesome-icon icon="comment" class="iconCSS" id="comment" name="bottomIcon" @click="clickComment(video)"/>
                              <div style="margin-right: 15px;">{{ video.commentCount }}</div>
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

import axios from 'axios';
import CommentComp from '@/components/CommentComp.vue';

export default {
  
  data() {
    return {
      videos: [],
      observer: null,
      autoPlayVideoIndex: -1,
      videoListAlignItems: 'center', // 초기값 설정
      divVideoList: false,
      isHovered: false,
      likedList: [], // 최초로 받아오는 값
      noDupLikedList: [], // 위에 배열에서 중복 제거한 값
      showComp: false,
      clickedVideo: null,
      tooltipText: '',
      showTooltip: false,
    };
  },
  components: {
    CommentComp
  },
  mounted() {
    const userEmail = sessionStorage.getItem('userEmail');
    
    const dataToSend = {
      userEmail: userEmail
    };

    var url = 'http://localhost:7001/getLikedVideoList'

    axios.post(url, dataToSend)
      .then(response => {
        this.likedList = response.data;

        // 중복 제거
        for (let i = 0; i < this.likedList.length; i++) {
        if (this.noDupLikedList.indexOf(this.likedList[i].VIDEO_ID) === -1) {
          this.noDupLikedList.push(this.likedList[i].VIDEO_ID);
        }
      }
    })
    .catch(error => {
      console.log('Error:', error);
    });

  },
  methods: {
    handleMouseOver(icon){
                console.log(icon)

      switch(icon){
        case 'calendar':
          this.showTooltip = true;
          break;
        case 'user':
          this.showTooltip = true;
          break;
        case 'bars':
          this.showTooltip = true;
          break;
        case 'file-lines':
          this.showTooltip = true;
          break;
      }
    },
    handleMoustOut(){
      // console.log("마우스아웃")
      // this.showTooltip = false;
    },
    handleCommentCount(videoId){
      const url = 'http://localhost:7001/getCommentCount';

      const data = {
        videoId: videoId,
      };

      axios.get(url, { params: data })
        .then(response => {
          const videoToUpdate = this.videos.find(video => video.id === videoId);
          if (videoToUpdate) {
            videoToUpdate.commentCount = response.data;
          }
        })
        .catch(error => {
          console.log('Error:', error);
        });
    },
    clickLike: async function(video) {

        const userEmail = sessionStorage.getItem("userEmail");

        // 서버로 전송할 데이터
        const dataToSend = {
          videoId: video.id,
          videoTitle: video.title,
          userEmail: userEmail
        };
  
        var url = 'http://localhost:7001/like'

        try {
          const response = await axios.post(url, dataToSend);
          if (response.data !== undefined) {
            video.likeCount = response.data;
            video.likeIconColor = video.likeIconColor === 'red' ? '#ff8899' : 'red';
          }
        }
        catch(error){
          console.log(error);
        }
    },
    clickComment(video){
      console.log("댓글창:::" + JSON.stringify(video));
      this.clickedVideo = video;
      this.showComp = true;
    },
    formatVideoDate(date) { // 한국날짜 포맷
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
          id: video.video_id,
          title: video.title,
          content: video.content,
          email: video.user_email,
          inpDT: video.inp_dt,
          path: video.video_url,
          // url: video.video_url,
          likeCount: video.like_count,
          commentCount: video.comment_count,
          category: video.category,
        }));

        // 일치하면 좋아요 누른 상태로 보이게
        for (var i = 0; i < this.videos.length; i++) {
          if (this.noDupLikedList.includes(this.videos[i].id)) {
            this.videos[i].likeIconColor = 'red';
          }
        }
        
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

      entries.forEach(entry => {
        const videoElement = entry.target.querySelector('video');

        if (entry.isIntersecting) {
                console.log('Video Source:', videoElement.src);

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
    cursor: default;
  }

  #form-controls [name="bottomIcon"] :hover{
    color: red;
  }

  .content-textarea {
    height: 200px;
    resize: none;
  }

  #playIcon :hover{
    color: #966fbf;
    cursor: pointer;
  }

  .tooltip {
    position: fixed;
    background-color: #333;
    color: #fff;
    padding: 5px;
    border-radius: 6px;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 1000;
  }

  .tooltip.active {
    visibility: visible;
    opacity: 1;
  }

</style>

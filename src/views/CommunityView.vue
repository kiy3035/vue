<template>
  <div>
    <section class="content-feature" style="" data-v-476b23f8="" data-v-676cec7c="">
      <div class="inner_path" data-v-476b23f8="">
        <h3 class="screen_out" data-v-476b23f8=""></h3>
        <div class="wrap_tit" data-v-476b23f8="">
          <img
            data-v-a968263a=""
            data-v-476b23f8=""
            src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/657726a1017800001.png?type=thumb&amp;opt=C72x72.fwebp"
            alt=""
          />
          <strong class="tit_path" data-v-476b23f8="" style="font-weight: bold; font-size: xx-large">
            &nbsp; 커뮤니티
          </strong>
        </div>
      </div>
    </section>
    <ul data-v-73310296="" role="tablist" aria-labelledby="titNews" class="list_tab">
      <li data-v-73310296="" role="presentation">
        <button
          type="button"
          id="tabNews1"
          role="tab"
          aria-selected="true"
          aria-controls="tabNewsContent1"
          data-tiara-layer="Click_all"
          data-tiara-action-name="Click_all"
          class="button_tab"
          :class="{ 'on': selectedTab === 'all' }"
          @click="selectedTab = 'all'"
        >
          전체글
        </button>
      </li>
      <li data-v-73310296="" role="presentation">
        <button
          type="button"
          id="tabNews2"
          role="tab"
          aria-selected="false"
          aria-controls="tabNewsContent2"
          data-tiara-layer="Click_press_release"
          data-tiara-action-name="Click_press_release"
          class="button_tab"
          :class="{ 'on': selectedTab === 'pressRelease' }"
          @click="selectedTab = 'pressRelease'"
        >
          개념글
        </button>
      </li>
      <li data-v-73310296="" role="presentation">
        <button
          type="button"
          id="tabNews3"
          role="tab"
          aria-selected="false"
          aria-controls="tabNewsContent3"
          data-tiara-layer="Click_media_relations"
          data-tiara-action-name="Click_media_relations"
          class="button_tab"
          :class="{ 'on': selectedTab === 'mediaRelations' }"
          @click="selectedTab = 'mediaRelations'"
        >
          &nbsp;공지&nbsp;
        </button>
      </li>
      <li data-v-73310296="" role="presentation" style="margin-top: 36px;">
        <div class="switch_btnbox">
          <!-- &nbsp;<a class="btn_write txt" href="">글쓰기</a> -->
          <!-- &nbsp;<a class="btn_write txt" @click="showWritePage = true" style="width:85px; height:36px; margin-top:-15px; ">글쓰기</a> -->
          <a class="btn_write txt" @click="openWriteForm" style="width:85px; height:36px; margin-top:-15px; ">글쓰기</a>
          <!-- 글쓰기 화면 표시 -->
          <!-- <community-write v-if="showWritePage" /> -->
          <!-- 모달을 열 때 CommunityWrite 컴포넌트 사용 -->
          <CommunityWrite v-if="showWritePage" @closeForm="closeWriteForm" />
        </div>
      </li>
    </ul>
  </div>
  <ul id="tabNewsContent1" role="tabpanel" aria-labelledby="tabNews1" class="list_card list_card_type2" data-v-676cec7c="">
    <li data-v-676cec7c="">
      <div data-v-676cec7c="" class="item_card" style="background-color: white">
        <span class="wrap_cont">
          <span role="text" class="info_cate" style="margin-left: 5px;">
            <img
              data-v-a968263a=""
              src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/6562f7bc017800001.png?type=thumb&amp;opt=C72x72.fwebp"
              width="36"
              height="36"
              alt=""
              class="ico_cate"
            />
            <span class="txt_date">
              <span class="screen_out" style="font-weight: bold;">
                찰장군b&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              2023.11.17 17:50&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img
                data-v-a968263a=""
                src="https://img.freepik.com/free-photo/3d-render-thumb-up-sign-isolated-hand-gesture_107791-15906.jpg?size=626&amp;ext=jpg&amp;ga=GA1.1.43073888.1700201348&amp;semt=sph"
                width="30"
                height="30"
                alt=""
                class="ico_cate"
              />
              10
            </span>
          </span>
          <a href="/page/detail/10712" class="link_item" id="card10712" data-tiara-layer="click_all_1" data-tiara-action-name="click_all_1">
            <strong class="tit_card">웹투게더 어린이집 근로복지공단 보육공모전 최우수나이스데</strong>
            <span class="wrap_thumb"></span>
          </a>
          <span role="text" class="info_card">
            <span class="txt_keyword">#남구로</span>
            <span class="txt_keyword">#구로디지털단지</span>
            <span class="txt_keyword">#맛집없음</span>
          </span>
        </span>
      </div>
    </li>
  </ul>
  
</template>

<script>
import CommunityWrite from '@/components/CommunityWrite.vue';

export default {
  components: {
    CommunityWrite,
  },
  data() {
    return {
      showWritePage: false,
    };
  },
  mounted() {
    // 컴포넌트가 마운트될 때 실행되는 로직
    this.toggleNavbarElement(false); // .navbar 엘리먼트를 숨김
  },
  beforeUnmount() {
    // 컴포넌트가 언마운트되기 전에 실행되는 로직
    this.toggleNavbarElement(true); // .navbar 엘리먼트를 표시
  },
  methods: {
    toggleNavbarElement(show) {
      // .navbar 클래스를 가진 엘리먼트를 찾아서 표시 또는 숨김
      const navbarElement = document.querySelector('.navbar');
      if (navbarElement) {
        navbarElement.style.display = show ? 'block' : 'none';
      }
    },
    openWriteForm() {
      // 모달을 열 때 필요한 로직 작성...
      this.showWritePage = true;
    },
    closeWriteForm() {
      // 모달을 닫을 때 필요한 로직 작성...
      this.showWritePage = false;
    },
  },
};
</script>



<style scoped>
  @import '@/css/communityView.css';

  /* 2. '글쓰기' 버튼을 둥근 코너로 만들기 */
  .btn_write {
    border-radius: 20px;
    display: inline-block; /* 둥근 코너를 적용하기 위해 inline-block으로 표시 */
  }

  /* 3. '글쓰기' 버튼에 호버 효과 추가하기 */
  .btn_write:hover {
    cursor: pointer;
  }
</style>

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
          <a class="btn_write txt" @click="openWriteForm" style="width:85px; height:36px; margin-top:-15px; ">글쓰기</a>
          <!-- 모달을 열 때 CommunityWrite 컴포넌트 사용 -->
          <CommunityWrite v-if="showWritePage" @closeForm="closeWriteForm" />
        </div>
      </li>
    </ul>
  </div>
  <!-- <ul id="tabNewsContent1" role="tabpanel" aria-labelledby="tabNews1" class="list_card list_card_type2" data-v-676cec7c=""> -->
    <ul v-if="communityData.length > 0" id="tabNewsContent1" role="tabpanel" aria-labelledby="tabNews1" class="list_card list_card_type2" data-v-676cec7c="">
    <li data-v-676cec7c="" v-for="item in communityData" :key="item.id">
       <div data-v-676cec7c="" class="item_card" :class="{ 'active': item.showDetailPage }" style="background-color: white">
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
              <span class="screen_out" style="font-weight: bold;">{{ item.nickname }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              {{ item.inp_dt }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img
                data-v-a968263a=""
                src="https://img.freepik.com/free-photo/3d-render-thumb-up-sign-isolated-hand-gesture_107791-15906.jpg?size=626&amp;ext=jpg&amp;ga=GA1.1.43073888.1700201348&amp;semt=sph"
                width="30"
                height="30"
                alt=""
                class="ico_cate"
              />
              {{ item.like_count }}
            </span>
          </span>
          <a class="link_item" :id="'card' + item.id" :data-tiara-layer="'click_all_' + item.id" :data-tiara-action-name="'click_all_' + item.id" @click="openDetailForm(item)">
            <strong class="tit_card">{{ item.title }}</strong>
            <span class="wrap_thumb"></span>
          </a>

            <CommunityDetail v-if="item.showDetailPage" @closeForm="closeDetailForm(item.id)" />
      

          <span role="text" class="info_card">
            <span class="txt_keyword">{{ item.tag1 }}</span>
            <span class="txt_keyword">{{ item.tag2 }}</span>
            <span class="txt_keyword">{{ item.tag3 }}</span>
          </span>
        </span>
      </div>
    </li>
  </ul>
  <div v-else>
    <!-- 데이터가 없는 경우에 대한 UI -->
    <p>No data available.</p>
  </div>
  
</template>

<script>
import CommunityWrite from '@/components/CommunityWrite.vue';
import CommunityDetail from '@/components/CommunityDetail.vue';
import $ from 'jquery';

export default {
  components: {
    CommunityWrite,
    CommunityDetail,
  },
  data() {
    return {
      showWritePage: false,
      showDetailPage: false,
      communityData: [], // 데이터를 담을 배열
      selectedTab: 'all', // 'all'을 초기값으로 설정
    };
  },
  mounted() {
    // 컴포넌트가 마운트될 때 실행되는 로직
    this.toggleNavbarElement(false); // .navbar 엘리먼트를 숨김

    // 데이터 조회 로직 추가
    this.fetchData();
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
    openDetailForm(item) {
      // 선택된 아이템만 열도록 수정
      this.communityData.forEach(communityItem => {
        communityItem.showDetailPage = communityItem.id === item.id;
      });

      // 나머지 아이템은 닫도록 설정
      this.showDetailPage = true;

      console.log(item);
    },


    closeDetailForm(itemId) {
      const closedItem = this.communityData.find(item => item.id === itemId);
      if (closedItem) {
        // this.$set(closedItem, 'showDetailPage', false);
        this.showWritePage = false;
      }
    },
    openWriteForm() {
      // 모달을 열 때 필요한 로직 작성...
      this.showWritePage = true;
    },
    closeWriteForm() {
      // 모달을 닫을 때 필요한 로직 작성...
      this.showWritePage = false;
      // 게시글 목록을 다시 불러오는 메서드를 호출
      this.fetchData();
    },
    fetchData() {
      const self = this;

      // jQuery를 사용하여 Ajax로 데이터 가져오기
      $.ajax({
        url: 'http://localhost:7001/communitySearch', // 수정이 필요한 URL로 변경
        method: 'GET',
        dataType: 'json',
        success: function(data) {
          self.communityData = data.map(community => ({
            nickname: community.nickname,
            inp_dt: community.inp_dt,
            like_count: community.like_count,
            title: community.title,
            cont: community.cont,
            tag1: community.tag1,
            tag2: community.tag2,
            tag3: community.tag3,
          }));
        },
        error: (error) => {
          console.error('Error fetching data:', error);
        },
      });
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
  .item_card {
  position: relative; /* 부모 요소에 대해 상대적으로 위치하도록 설정 */
}

  .item_card .wrap_cont {
    position: absolute; /* 컴포넌트를 부모에 대해 절대적으로 위치하도록 설정 */
    top: 0;
    left: 0;
  }
  
  .item_card.active {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    background-color: white;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    width: 80%; /* 수정: 원하는 크기로 조정 */
    height: 80%; /* 수정: 원하는 크기로 조정 */
    box-sizing: border-box; /* 패딩을 고려하여 전체 크기 지정 */
  }
</style>

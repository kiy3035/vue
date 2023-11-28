<template>
  <div>
    <!-- CommunityDetail 컴포넌트 내용은 생략하고 필요한 경우에 채워넣으세요. -->
    <div class="item_card2">ho</div>
  </div>
</template>

<script>
export default {
  // props: ['showDetailPage'], // showDetailPage를 prop으로 받아옵니다.

  // 컴포넌트 로직 등을 추가하세요.
};
</script>

<style scoped>

  .item_card2 {
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
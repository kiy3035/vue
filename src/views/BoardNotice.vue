<template>   
  <div>
    <div id="survey" style="display: none;"></div>
    <table class="gall_list">
      <caption>게시판</caption>
      <colgroup>
        <col style="width:7%">
        <col>
        <col style="width:18%">
        <col style="width:6%">
        <col style="width:6%">
        <col style="width:6%">
      </colgroup>
      <thead>
        <tr>
          <th scope="col">번호</th>
          <th scope="col">제목</th>
          <th scope="col">글쓴이</th>
          <th scope="col">작성일</th>
          <th scope="col">조회</th>
          <th scope="col">추천</th>
        </tr>
        <tr>
          <td colspan="7" class="table-divider"></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in itemList" :key="index">
          <td style="text-align: center;">{{ item.number }}</td>
          <td style="text-align: center;">{{ item.title }}</td>
          <td style="text-align: center;">{{ item.author }}</td>
          <td style="text-align: center;">{{ item.date }}</td>
          <td style="text-align: center;">{{ item.views }}</td>
          <td style="text-align: center;">{{ item.likes }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- <div>
    <br><br>
    <button type="button" class="list_" @click="listKindTab('all', 'list')">전체글</button>
    <button type="button" class="list_" style="margin-left: 5px;" @click="listKindTab('recommend', 'list')">베스트글</button>
    <button type="button" id="btn_write" class="list_" style="background-color: blue;margin-left: 1260px;" @click="goWrite('')">글쓰기</button>
  </div> -->
</template>
<style>
.table-divider {
  border-top: 1px solid #000; 
}
</style>

<script>
export default {
  name: 'notice-',
  data() {
    return {
      itemList: [
        {
          id: 1,
          number: 1,
          title: "제목1",
          author: "글쓴이1",
          date: "2023-11-08",
          views: 100,
          likes: 10,
        },
      ],
    };
  },
  methods: {
    listKindTab(kind, tab) {
      console.log(kind, tab);
    },
    goWrite(url) {
      window.location.href = url;
    },
  }
}
</script>

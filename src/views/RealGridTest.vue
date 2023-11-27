<template>
  <div>
    <button class="sukTest" @click="fetchData">회원 조회</button>
    <div id="realgrid" style="height: 400px; margin-top:30px;"></div>
  </div>
</template>

<script>
import { ValueType } from 'realgrid';
import { GridView, LocalDataProvider } from 'realgrid';
import axios from 'axios';

export default {
  name: 'RealGrid',
  data() {
    return {
      dataProvider: null,
      gridView: null,
      rows: []  // rows를 컴포넌트 데이터 속성으로 추가
    };
  },
  methods: {
    async fetchData() {
      try {
        const apiUrl = 'http://localhost:7001/searchTest';

        // 데이터를 요청하여 받아오기
        const response = await axios.get(apiUrl);
        const transformedData = response.data.map(item => ({
          EMAIL: item.email,
          INP_USR: item.inp_USR,
          NICKNAME: item.nickname,
          INPDATE: item.inpdate
        }));
        console.log(response)
        // RealGrid에 데이터 설정
        this.dataProvider.setRows(transformedData);
        // this.dataProvider.setRows(this.rows);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    
    toggleNavbarElement(show) {
      const navbarElement = document.querySelector('.navbar');
      if (navbarElement) {
        navbarElement.style.display = show ? 'block' : 'none';
      }
    },
  },
  mounted() {
    // 컴포넌트가 마운트될 때 실행되는 로직
    this.toggleNavbarElement(false); // .navbar 엘리먼트를 숨김

    const fields = [
      {fieldName: "EMAIL",    dataType: ValueType.TEXT},
      {fieldName: "INP_USR",  dataType: ValueType.TEXT},
      {fieldName: "NICKNAME", dataType: ValueType.TEXT},
      {fieldName: "INPDATE",  dataType: ValueType.DATE}
    ];

    const columns = [
      {name: "EMAIL",     fieldName: "EMAIL",   width: "300",  header: {text: "이메일"}},
      {name: "INP_USR",   fieldName: "INP_USR", width: "60",   header: {text: "성함"}},
      {name: "NICKNAME",  fieldName: "NICKNAME",width: "120",  header: {text: "닉네임"}},
      {name: "INPDATE",   fieldName: "INPDATE", width: "120",  header: {text: "가입일자"}}
    ];

    this.dataProvider = new LocalDataProvider(false);
    this.gridView = new GridView('realgrid');
    this.gridView.setDataSource(this.dataProvider);
    this.dataProvider.setFields(fields);

    // columns를 그리드에 설정
    this.gridView.setColumns(columns);

  },
  beforeUnmount() {
    // 컴포넌트가 언마운트되기 전에 실행되는 로직
    this.toggleNavbarElement(true); // .navbar 엘리먼트를 표시
  },
};
</script>

<style scoped>
@import '@/css/realgrid-style.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  margin-bottom: 15px;
  border-top: 2px solid #9ba6b5;
  border-left: 1px solid #d8d8d8;
  border-right: 1px solid #d8d8d8;
  border-bottom: 1px solid #d8d8d8;
}

.sukTest {
  margin-top: 100px;
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: black;
  color: white;
  margin-left: 10px;
  margin-top: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
</style>

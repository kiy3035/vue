<template>
  <div id="realgrid" style="width: 100%; height: 400px;"></div>
</template>

<script>
import { ValueType } from 'realgrid';
import { GridView, LocalDataProvider } from 'realgrid';
// import { GridView, LocalDataProvider } from 'realgrid';

export default {
  name: 'RealGrid',
  data() {
    return {
      dataProvider: null,
      gridView: null,
    };
  },
  mounted() {
      const fields = [
      {
        fieldName: "Name",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "FullName",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "Age",
        dataType: ValueType.NUMBER,
      },
      {
        fieldName: "Company",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "Email",
        dataType: ValueType.TEXT,
      },
    ];

    const columns = [
      {
        name: "Name",
        fieldName: "Name",
        width: "80",
        header: {
          text: "Name",
        },
      },
      {
        name: "FullName",
        fieldName: "FullName",
        width: "150",
        header: {
          text: "Full Name",
        },
      },
      {
        name: "Company",
        fieldName: "Company",
        width: "220",
        header: {
          text: "Company Name",
        },
      },
      {
        name: "Age",
        fieldName: "Age",
        width: "130",
        header: {
          text: "Age",
        },
      },
      {
        name: "Email",
        fieldName: "Email",
        width: "300",
        header: {
          text: "Email",
        },
      },
    ];

    const rows = [
      {
        Name: "Kessie",
        FullName: "Vijendra N. Raj",
        Email: "mus.Donec.dignissim@Praesent.edu",
        Company: "Arcu Et Pede Incorporated",
        Age: "17",
      },
      {
        Name: "Evelyn",
        FullName: "Hridaynath K. Ismail",
        Email: "fringilla.euismod@elementum.edu",
        Company: "Aliquam Tincidunt Ltd",
        Age: "28",
      },
    ];

    this.dataProvider = new LocalDataProvider(false);
    this.gridView = new GridView('realgrid');
    this.gridView.setDataSource(this.dataProvider);
    this.dataProvider.setFields(fields);
    this.gridView.setColumns(columns);
    this.dataProvider.setRows(rows);
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

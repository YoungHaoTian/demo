<template>
    <div>
        <ta-table :columns="tableColumns" :dataSource="tableData" :haveSn="true">

        </ta-table>
        <br>
        <ta-table :columns="columns" :dataSource="data" >
        </ta-table>
    </div>


</template>
<script>
  const tableColumns = [
    {
      title: '姓名',
      dataIndex: 'name'
    }, {
      title: '年龄',
      dataIndex: 'age'
    }, {
      title: '性别',
      dataIndex: 'sex',
      collectionType: 'sex'
    }, {
      title: '地址',
      dataIndex: 'address'
    }]

  const tableData = [{
    key: '1',
    sex: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  }, {
    key: '2',
    sex: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  }, {
    key: '3',
    sex: '0',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  }]
  const data = [{
    key: '1',
    name: '张三',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: '北京',
  }, {
    key: '2',
    name: '李四',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: '上海',
  }, {
    key: '3',
    name: '王五',
    age: 25,
    tel: '合并行',
    phone: 18900010002,
    address: '成都',
  }, {
    key: '4',
    name: '赵四',
    age: 50,
    tel: '0575-22098909',
    phone: 18900010002,
    address: '广州',
  }, {
    key: '5',
    name: '田七',
    age: 38,
    tel: '合并列',
    phone: 18900010002,
    address: '深圳',
  }];

  const columns = [{
    title: '姓名',
    dataIndex: 'name',
  }, {
    title: '年龄',
    dataIndex: 'age',
  }, {
    title: '座机 手机',
    colSpan: 2,  //表头合并
    dataIndex: 'tel',
    customRender:(text, record, index)=>{
      let obj = {
        children: text,
        attrs: {},
      };
      //合并行
      if (index === 2) {
        obj.attrs.rowSpan = 2;
      }
      if (index === 3) {
        obj.attrs.rowSpan = 0;
      }
      //合并列
      if(index === 4){
        obj.attrs.colSpan = 2;
      }
      return obj;
      // console.log(text,record,index)
    }
  }, {
    title: '手机',
    colSpan: 0,  //被合并的列设置为0
    dataIndex: 'phone',
    customRender:(text,record,index)=>{
      let obj = {
        children:text,
        attrs:{}
      }
      //合并列
      if(index === 4){
        obj.attrs.colSpan = 0;
      }
      return obj;
    }

  }, {
    title: '地址',
    dataIndex: 'address',
  }];

  export default {
    name: 'textTable',
    data () {
      return {
        tableColumns,
        tableData,
        data,
        columns
      }
    }
  }
</script>
<style scoped>

</style>
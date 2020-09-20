<template>
    <ta-form :autoFormCreate="(form)=>{this.form1 = form}">
        <ta-table :columns="columns" :dataSource="tableData">
            <span slot="nameTitle">input示例 <ta-icon type="edit"/></span>
            <ta-table-edit :editForm="form1" slot="name" slot-scope="text, record" type="input" :row-editable="true" :rules="[{ required: true, message: '姓名不能为空'}]"></ta-table-edit>
            <ta-table-edit :editForm="form1" slot="age" slot-scope="text, record" type="inputNumber" :row-editable="true" :rules="[{validator: fnValidate}]"></ta-table-edit>
            <ta-table-edit :editForm="form1" slot="sex" slot-scope="text, record" type="select" :option="CollectionData('SEX')" :row-editable="true"></ta-table-edit>
            <ta-table-edit :editForm="form1" slot="hobby" slot-scope="text, record" type="select" :multiple="true" :option="hobbyList" :row-editable="true"></ta-table-edit>
            <ta-table-edit :editForm="form1" slot="action" slot-scope="text, record" :dataSource="tableData" type="rowEdit" :beforeChange="fnBeforeChange" @change="changeData" @tableChange="fnTableChange" @rowDelete="fnRowDelete"></ta-table-edit>
        </ta-table>
    </ta-form>
</template>
<script>
  const hobbyList = [{label: '足球', value: 0}, {label: '篮球', value: 1}, {label: '排球', value: 2}, {label: '乒乓球', value: 3, disabled: true}]
  const columns = [
    { dataIndex: 'name', width: 200, slots: { title: 'nameTitle' }, scopedSlots: { customRender: 'name' }, overflowTooltip: true },
    { title: 'inputNumber示例', dataIndex: 'age', scopedSlots: { customRender: 'age' } },
    { title: 'select-单选示例', dataIndex: 'sex', scopedSlots: { customRender: 'sex' } },
    { title: 'select-多选示例', dataIndex: 'hobby', scopedSlots: { customRender: 'hobby' } },
    { title: '操作', dataIndex: 'action', width: 150, scopedSlots: { customRender: 'action' } }
  ]

  const tempData = []
  for (let i = 0; i < 6; i++) {
    tempData.push({
      key: i.toString(),
      name: `Name ${i}`,
      age: i,
      sex: `${i % 3}`,
      hobby: [i % 3]
    })
  }

  export default {
    data () {
      return {
        tableData: [],
        columns,
        hobbyList
      }
    },
    mounted () {
      this.tableData = tempData
    },
    methods: {
      fnBeforeChange ({newData, record, rowKey}, callback) {
        // 单元格数据保存前数据处理（newData：返回改变后的行数据、record：该行的行数据、rowKey：该行的rowKey值、callback：回调函数，可判断数据是否正确）
        // 注意，callback 必须被调用
        if (newData.name === '123') {
          callback('name不能为123')
        } else {
          callback()
          // 可在此处对表格数据进行处理
          Object.assign(record, newData)
        }
      },
      changeData ({newData, record, rowKey}) {
        // 将行数据修改为新值（newData：返回改变的值、record：该行的行数据、rowKey：该行的rowKey值）
        // 也可当表格编辑状态关闭后，在此处对表格数据进行处理
        Object.assign(record, newData)
      },
      fnTableChange (dataSource) {
        // 将返回有editable属性的表格数据，赋给表格
        this.tableData = dataSource
      },
      fnRowDelete (deleteId) {
        // 返回主键id，即rowKey的值
        this.tableData = this.tableData.filter((item) => item.key !== deleteId)
      },
      fnValidate (rule, value, callback) {
        // 自定义校验 与表单中的校验用法相同
        if (value === 110) {
          callback('输入值不能为"110"')
        } else {
          // 注意，callback 必须被调用
          callback()
        }
      }
    }
  }
</script>

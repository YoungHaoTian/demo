<template>
    <div>
        <ta-card :headStyle="{border:'none'}" :bodyStyle="{border:'none'}">
            <div slot="title" :style="titleStyle">
                <span>处方总量计算小工具</span>
            </div>
            <ta-form :autoFormCreate="(form)=>{this.form = form}" :formLayout="true" :col="3">
                <ta-form-item label="医保类型">
                    <ta-select placeholder="请选择医保类型"/>
                </ta-form-item>
                <ta-form-item label="药品通用名">
                    <ta-select placeholder="请先选择医保类型"/>
                </ta-form-item>
                <ta-form-item label="药品商品名">
                    <ta-select placeholder="请先选择药品通用名"/>
                </ta-form-item>

                <ta-form-item label="适用病种">
                    <ta-select placeholder="请先选择药品通用名"/>
                </ta-form-item>
                <ta-form-item label="方案剂量">
                    <ta-input placeholder="请输入"/>
                </ta-form-item>
                <ta-form-item label="用药频次">
                    <ta-input placeholder="请输入" style="width:35%" addon-after="天"/>
                    <ta-input placeholder="请输入" style="width:35%;margin-left: 5%" addon-after="次"/>
                </ta-form-item>

                <ta-form-item label="治疗周期">
                    <ta-date-picker
                            :disabledDate="disabledStartDate"
                            format="YYYY-MM-DD"
                            v-model="startValue"
                            placeholder="周期开始时间"
                            @openChange="handleStartOpenChange"
                            style="width:40%"
                    />
                    <ta-date-picker
                            :disabledDate="disabledEndDate"
                            format="YYYY-MM-DD"
                            placeholder="周期结束时间"
                            v-model="endValue"
                            :open="endOpen"
                            @openChange="handleEndOpenChange"
                            style="width:40%;margin-left:5%"
                    />
                </ta-form-item>

                <ta-form-item label="周期天数">
                    <ta-input placeholder="请输入" addon-after="天"/>
                </ta-form-item>
                <ta-form-item label="额外包装">
                    <ta-input placeholder="请输入"/>
                </ta-form-item>
            </ta-form>
        </ta-card>
        <ta-card>
            <div slot="title" style="text-align: right;margin-right:20px">
                周期总量：
            </div>
            <ta-table :columns="tableColumns" :dataSource="tableData">
                <div slot="way">
                    <ta-input placeholder="请输入" style="width:30%" addon-after="天"/>
                    <ta-input placeholder="请输入" style="width:30%;margin-left:2%" addon-after="次"/>
                </div>
                <ta-input slot="countOnce" placeholder="请输入"/>
                <ta-input slot="days" placeholder="请输入" addon-after="天"/>

                <div slot="action">
                    <a href="javascript:;" style="margin-right:10px">删除</a>
                    <a href="javascript:;">马上计算</a>
                </div>
            </ta-table>
        </ta-card>
    </div>
</template>

<script>
  const tableColumns = [
    {
      title: '处方序号',
      dataIndex: 'index',
      width: '150px'
    }, {
      title: '用法',
      dataIndex: 'way',
      scopedSlots: { customRender: 'way' },
      width: '400px'
    }, {
      title: '单次用量',
      dataIndex: 'countOnce',
      scopedSlots: { customRender: 'countOnce' },
      width: '300px'
    }, {
      title: '用药天数',
      dataIndex: 'days',
      scopedSlots: { customRender: 'days' }
    }, {
      title: '总量/实际量',
      dataIndex: 'total'
    }, {
      title: '操作',
      dataIndex: 'action',
      scopedSlots: { customRender: 'action' }
    }]
  const tableData = [{
    key: '1',
    index: '【当前】处方',
    way: '',
    countOnce: '',
    days: '',
    // total:'',
    action: ''
  }]
  export default {
    name: 'layout1',
    data () {
      return {
        startValue: null,
        endValue: null,
        endOpen: false,
        titleStyle: {
          borderBottom: '1px solid #d2d2d2',
          paddingBottom: '10px'
        },
        tableColumns,
        tableData
      }
    },
    watch: {
      startValue (val) {
        console.log('startValue', val)
      },
      endValue (val) {
        console.log('endValue', val)
      }
    },
    methods: {
      disabledStartDate (startValue) {
        const endValue = this.endValue
        if (!startValue || !endValue) {
          return false
        }
        return startValue.valueOf() > endValue.valueOf()
      },
      disabledEndDate (endValue) {
        const startValue = this.startValue
        if (!endValue || !startValue) {
          return false
        }
        return startValue.valueOf() >= endValue.valueOf()
      },
      handleStartOpenChange (open) {
        if (!open) {
          this.endOpen = true
        }
      },
      handleEndOpenChange (open) {
        this.endOpen = open
      },
    },
  }
</script>

<style>
    .ant-card-bordered {
        border: none;
    }

    .ant-card-head {
        /*padding-left: 0*/
        border-bottom: none;
    }

</style>

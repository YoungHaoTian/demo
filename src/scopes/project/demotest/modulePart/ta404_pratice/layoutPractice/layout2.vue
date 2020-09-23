<template>
    <div style="height:650px">
        <ta-border-layout :layout="{left:'280px'}" :showPadding="false" id="parent-layout">
            <div slot="left" class="fit">
                <ta-card :headStyle="{padding:'10px 20px'}" :bodyStyle="{padding:'20px'}">
                    <div slot="title" style="font-weight: 600"><span>患者列表</span></div>
                    <div style="width:100%">
                        <div>
                            <ta-button-group style="width: 100%">
                                <ta-button size="small" type="primary" class="button"
                                           style="width: 50%;font-size: 12px">
                                    全部
                                </ta-button>
                                <ta-button  size="small" style="border-color: #1890ff;color:#1890ff;width: 50%;font-size: 12px">今天</ta-button>
                            </ta-button-group>
                        </div>
                        <div style="margin-top:20px">
                            <div style="width:35%;display: inline-block;color:#999999;font-size: 13px;text-align: left">费用状态：</div>
                            <ta-select default-value="全部" size="small" style="width:65%;display: inline-block;"/>
                        </div>
                    </div>
                </ta-card>
                <ta-card id="patient-list" :headStyle="{borderTop:'1px solid #EBEEF5 !important',padding:'20px'}"
                         :bodyStyle="{padding:'0'}">
                    <div slot="title">
                        <div>
                            <ta-input  placeholder="请输入患者姓名或身份证">
                                <ta-icon slot="prefix" type="search"/>
                            </ta-input>
                        </div>
                    </div>
                    <div style="width:100%">
                        <ta-list itemLayout="horizontal"
                                :dataSource="persons">
                            <ta-list-item slot="renderItem" slot-scope="item, index" :ref="`name${index}`"
                                          @click="handleClickItem(`name${index}`)">
                                <div style="width:100%">
                                    <div class="name" :class="`name${index}`">{{item.name}}</div>
                                    <div class="extra">
                                        <span style="line-height:100%;">{{item.description}}</span>
                                    </div>
                                    <div class="spend"><span :style="{color:Number(item.spend)>=0?'black':'red'}">{{item.spend}}</span>&nbsp;<span
                                            style="color:#aaa">元</span></div>
                                </div>
                            </ta-list-item>
                        </ta-list>
                    </div>
                </ta-card>
            </div>
            <ta-border-layout :showBorder='false' :layout="{header:'140px'}" id="children-layout">
                <div slot="header" id="personInfo">
                    <ta-list>
                        <ta-list-item>
                            <ta-list-item-meta :style="{padding:'15px'}">
                                <div slot="description" style="padding:5px">
                                    <div style="width:100%">
                                        <span class="description">原发病：糖料病肾病</span>
                                        <span class="description">血管通路：AVF</span>
                                        <span class="description">首次透析日期：2019-11-19</span>
                                    </div>
                                    <div style="width:100%">
                                        <span class="description">责任护士：熊芮</span>
                                        <span class="description">责任医生：余少斌</span>
                                        <span class="description">
                                            <ta-tag style="color:#aaa;background:white">跌倒坠床高危</ta-tag>
                                            <ta-tag style="color:#aaa;background:white">pad标签</ta-tag>
                                            <ta-tag style="color:#aaa;background:white">自定义标签1</ta-tag>
                                        </span>
                                    </div>
                                </div>
                                <div slot="title" style="padding:5px">
                                    <div style="font-weight: 600;font-size:18px;display: inline-block;"><span>王佳佳</span>
                                    </div>
                                    <div style="display: inline-block;margin-left: 10px;">
                                        <ta-icon type="woman" style="color:#aaa;font-size:14px"/>
                                    </div>
                                    <div style="display: inline-block;margin-left:15px;color:#606266;font-size:14px">
                                        <ta-breadcrumb>
                                            <ta-breadcrumb-item>34岁</ta-breadcrumb-item>
                                            <ta-breadcrumb-item>门诊自费</ta-breadcrumb-item>
                                            <ta-breadcrumb-item>门诊</ta-breadcrumb-item>
                                            <ta-breadcrumb-item>13000000000</ta-breadcrumb-item>
                                        </ta-breadcrumb>
                                    </div>

                                    <div style="position: absolute;top:0;right:0">
                                        <div style="text-align: center;display:inline-block;">
                                            <div style="color: red;font-size:15px;font-weight: 600;width:100%">乙</div>
                                            <div style="width:100%;font-size: 12px;color:#aaa">感染信息</div>
                                        </div>
                                        <div style="text-align: center;display:inline-block;margin-left: 15px">
                                            <div style="color: #1890ff;font-size:15px;font-weight: 600;width:100%">
                                                ￥6120
                                            </div>
                                            <div style="width:100%;font-size: 12px;color:#aaa">费用余额</div>
                                        </div>
                                    </div>
                                </div>
                                <ta-avatar slot="avatar" :size="86"
                                           src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                            </ta-list-item-meta>
                        </ta-list-item>
                    </ta-list>
                </div>
                <div>
                    <ta-card :head-style="{borderBottom:'none',height:'50px'}">
                        <div slot="title" style="position:relative">
                            <ta-form :autoFormCreate="(form)=>{this.form = form}" :formLayout="true" label-width="70px"
                                     :gutter="10">
                                <ta-form-item initValue="全部" label="费用类型" field-decorator-id="costType" :span="4">
                                    <ta-select size="small"/>
                                </ta-form-item>
                                <ta-form-item initValue="全部" label="项目类别" field-decorator-id="projectType" :span="4">
                                    <ta-select size="small"/>
                                </ta-form-item>
                                <ta-form-item label=" " labelWidth="0" field-decorator-id="projectName" :span="4">
                                    <ta-input size="small" placeholder="请输入项目名称">
                                        <ta-icon slot="prefix" type="search"/>
                                    </ta-input>
                                </ta-form-item>
                                <ta-form-item label="查询时间" field-decorator-id="searchTime" :span="6">
                                    <ta-range-picker size="small"/>
                                </ta-form-item>
                            </ta-form>
                            <div style="position:absolute;top: 4px;right: 0;">
                                <ta-button type="primary" class="button" size="small">导出</ta-button>
                                <ta-button type="primary" class="button" size="small">预缴</ta-button>
                                <ta-button size="small" style="font-size: 12px;width:50px">退费</ta-button>
                            </div>
                        </div>
                        <ta-table :columns="tableColumns" :dataSource="tableData">
                            <template slot="total" slot-scope="text,record">
                                <span>{{Number(record.number)*Number( record.price)}}</span>
                            </template>
                        </ta-table>
                    </ta-card>
                </div>
            </ta-border-layout>
        </ta-border-layout>
    </div>
</template>

<script>
  import moment from 'moment'

  const tableColumns = [
    {
      title: '项目类别',
      dataIndex: 'projectType'
    }, {
      title: '项目名称',
      dataIndex: 'projectName'
    }, {
      title: '费用类型',
      dataIndex: 'costType',
    }, {
      title: '规格',
      dataIndex: 'specification'
    }, {
      title: '数量',
      dataIndex: 'number'
    }, {
      title: '单价（元）',
      dataIndex: 'price'
    }, {
      title: '总金额（元）',
      dataIndex: 'total',
      scopedSlots: { customRender: 'total' },
    }, {
      title: '当前余额（元）',
      dataIndex: 'balance'
    }, , {
      title: '时间',
      dataIndex: 'dateTime'
    }]

  const tableData = [{
    projectType: '治疗',
    projectName: 'HD内瘘',
    costType: '消费',
    number: '1',
    price: '510',
    dateTime: '2020-03-28 09:28:58',
    balance: '6120'
  }, {
    projectType: '治疗',
    projectName: 'HD插管',
    costType: '消费',
    number: '1',
    price: '510',
    dateTime: '2020-03-27 15:10:34',
    balance: '6630'
  }, {
    projectType: '治疗',
    projectName: 'HDF插管',
    costType: '消费',
    number: '1',
    price: '510',
    dateTime: '2020-03-24 17:20:04',
    balance: '7140'
  }, {
    projectType: '治疗',
    projectName: 'HDF内瘘',
    costType: '预缴',
    number: '5',
    price: '510',
    dateTime: '2020-03-20 16:27:18',
    balance: '7650'
  }, {
    projectType: '治疗',
    projectName: 'HD内瘘',
    costType: '预缴',
    number: '10',
    price: '510',
    dateTime: '2020-03-20 16:27:05',
    balance: '5100'
  },]
  console.log(tableData)
  export default {
    name: 'layout2',
    data () {
      return {
        persons: [{
          name: '王佳佳',
          description: '门诊自费',
          spend: '6120'
        }, {
          name: '吴笛',
          description: '城镇职工',
          spend: '-660'
        }, {
          name: '张工牌',
          description: '城镇职工',
          spend: '-779'
        }, {
          name: '候界靖',
          description: '城镇职工',
          spend: '-667'
        }, {
          name: '朱少雪',
          description: '城镇职工',
          spend: '-510'
        }, {
          name: '何土',
          description: '门诊自费',
          spend: '-510'
        },],
        preClickItem: null,//记录上一次点击的item元素
        tableData,
        tableColumns,
      }
    },
    mounted () {

    },
    methods: {
      handleClickItem (ref) {
        if (!this.preClickItem) {//第一次点击，直接生成样式
          this.$refs[ref].$el.style.backgroundColor = 'rgb(237 246 255)'
          this.$refs[ref].$el.style.borderBottomColor = 'rgb(101 181 255)'
          this.$refs[ref].$el.style.color = '#1890ff'
          //使用ref的值来记录当前点击元素
          this.preClickItem = ref
        } else {//非第一次点击，分为前一次和本次所点击的元素一致以及不一致
          //清除前一次样式
          this.$refs[this.preClickItem].$el.style.backgroundColor = ''
          this.$refs[this.preClickItem].$el.style.borderBottomColor = ''
          this.$refs[this.preClickItem].$el.style.color = ''

          //设置本次样式
          this.$refs[ref].$el.style.backgroundColor = 'rgb(237 246 255)'
          this.$refs[ref].$el.style.borderBottomColor = 'rgb(101 181 255)'
          this.$refs[ref].$el.style.color = '#1890ff'

          //更新属性
          this.preClickItem = ref
        }
      }
    }
  }
</script>

<style>
    .ant-card-bordered {
        border: none
    }

    .borderLayout.showBorder {
        border: 4px solid #F0F2F5;
        border-right: 10px solid #F0F2F5;
    }

    #patient-list .ant-list-item {
        padding: 20px;
        height: 60px;
    }

    #patient-list .ant-list-split .ant-list-item {
        border-bottom: 2px solid #EBEEF5;
    }

    #patient-list .ant-list-item:hover {
        background-color: rgb(237 246 255);
        border-bottom: 2px solid rgb(101 181 255) !important;
        color: #1890ff;
    }

    .name {
        display: inline-block;
        font-weight: 600;
        font-size: 16px
    }

    .extra {
        display: inline-block;
        /*align-items: center;*/
        /*display: flex;*/
        margin-left: 15px;
        font-size: 12px;
        color: #aaa;
    }

    .spend {
        display: inline-block;
        float: right;
    }

    #patient-list .ant-list-split .ant-list-item:last-child {
        border-bottom: 2px solid #EBEEF5;
    }

    #children-layout .layoutCon {
        padding: 15px;
    }

    #children-layout .ant-list-item {
        padding: 0;
        position: relative;
    }

    .description {
        display: inline-block;
        text-align: left;
        width: 30%;
        color: #aaa;
        font-size: 12px
    }

    .button {
        /*background-color: #40a9ff;
        border-color: #40a9ff;*/
        font-size:12px;
        width:50px;
    }

    /*#personInfo .ant-list-split .ant-list-item:last-child {
        border: none;
    }*/

    .ant-table-tbody > tr > td {
        font-size: 12px;
        color:#5b5b5b;
    }

    .ant-table-thead > tr > th {
        font-weight: 500;
        font-size: 13px;
    }

    .ant-form label {
        font-size: 13px !important;
    }

    .ant-select {
        font-size: 13px;
    }

    input::-webkit-input-placeholder {
        /* placeholder颜色 */
        color: #aab2bd;
        /* placeholder字体大小 */
        font-size: 12px;
    }

</style>

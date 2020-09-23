<template>
    <div style="height:750px">
        <ta-border-layout :layout="{right:'350px'}">
            <div>
                <ta-card id="part1" :bordered="false">
                    <div style="display: inline-block;">
                        <span>读卡：</span>
                        <ta-select/>
                        <ta-button>读</ta-button>
                    </div>
                    <div style="display: inline-block;margin-left: 30px">
                        <span>卡号：</span>
                        <ta-input value="社保卡/身份证/就诊卡" :disabled="true" style="width: 80%"/>
                    </div>
                    <div style="display: inline-block;margin-left: 15px">
                        <ta-button>查询</ta-button>
                        <ta-button style="margin-left:30px">提取预约</ta-button>

                        <ta-button type="primary" style="margin-left:100px">挂号</ta-button>
                        <ta-button style="margin-left:30px">重置</ta-button>
                    </div>
                </ta-card>
                <ta-card id="part2" :bordered="false">
                    <div slot="title"><span style="height:100%">个人信息</span></div>
                    <div style="padding: 30px 30px 0 0">
                        <ta-form :auto-form-create="(form)=>{this.infoForm=form}" :formLayout="true" :col="4"
                                 :labelCol="{span:10}" :wrapper-col="{span:14}">
                            <ta-form-item :required="true" label="姓名" field-decorator-id="name">
                                <ta-input/>
                            </ta-form-item>
                            <ta-form-item label="身份证号" field-decorator-id="certno">
                                <ta-input/>
                            </ta-form-item>
                            <ta-form-item :required="true" label="性别" field-decorator-id="gend">
                                <!--                                <ta-select :collection-type="sex"/>-->
                                <ta-select>
                                    <ta-select-option value="0">无</ta-select-option>
                                    <ta-select-option value="1">男</ta-select-option>
                                    <ta-select-option value="2">女</ta-select-option>
                                </ta-select>
                            </ta-form-item>
                            <ta-form-item label="出生日期" field-decorator-id="brdy">
                                <ta-date-picker/>
                            </ta-form-item>

                            <ta-form-item :init-value="{input1:'1',input2:'2',input3:'3',input4:'月'}" :required="true"
                                          label="年龄" field-decorator-id="age">
                                <MyInput/>
                            </ta-form-item>
                            <ta-form-item label="联系人" field-decorator-id="contact">
                                <ta-input/>
                            </ta-form-item>
                            <ta-form-item label="联系人电话" field-decorator-id="phone">
                                <ta-input/>
                            </ta-form-item>

                            <ta-form-item :span="6"/>

                            <ta-form-item
                                    :initValue="{select1:'select1',select2:'select2',select3:'select3',input:'input'}"
                                    label="所在地区" field-decorator-id="liveAddr"
                                    style="margin-top:20px;margin-left: 20px" :span="24" :wrapperCol="{span:21}"
                                    :label-col="{span:2}">
                                <MySelect/>
                            </ta-form-item>
                        </ta-form>
                        <!--                        <ta-button type="primary" @click="test">测试自定义组件</ta-button>-->
                    </div>
                </ta-card>
                <ta-card id="part3" :bordered="false">
                    <div slot="title"><span style="height:100%">挂号信息</span></div>
                    <div>
                        <div style="padding: 30px 30px 0 0">
                            <ta-form :auto-form-create="(form)=>{this.registerForm=form}" :formLayout="true" :col="4"
                                     :labelCol="{span:10}" :wrapper-col="{span:14}">
                                <ta-form-item :required="true" label="病人类型" field-decorator-id="patientType">
                                    <ta-select/>
                                </ta-form-item>
                                <ta-form-item label="挂号类型" field-decorator-id="registerType">
                                    <ta-select/>
                                </ta-form-item>
                                <ta-form-item label="保险类型" field-decorator-id="insuranceType">
                                    <ta-select/>
                                </ta-form-item>
                                <ta-form-item label="就诊时间" field-decorator-id="time">
                                    <ta-date-picker/>
                                </ta-form-item>

                                <ta-form-item label="科室" field-decorator-id="department">
                                    <ta-select/>
                                </ta-form-item>
                                <ta-form-item label="医生" field-decorator-id="doctor">
                                    <ta-select/>
                                </ta-form-item>
                                <ta-form-item label="挂号金额" field-decorator-id="registerCost">
                                    <ta-input :disabled="true"/>
                                </ta-form-item>
                                <ta-form-item label="挂号金额" field-decorator-id="registerCostSelect">
                                    <ta-select style="width:70%"/>
                                    <ta-icon style="width:30%" type="pay-circle"/>
                                </ta-form-item>
                            </ta-form>
                        </div>
                    </div>
                </ta-card>
                <ta-card id="part4" :bordered="false">
                    <div style="display:flex">
                        <ta-card id="children1" :bordered="false">
                            <div slot="title">
                                <span style="height:100%">收费信息</span>
                                <div style="width:70%;position:absolute;right:0;top:7px"><span
                                        style="width:20%;margin-right:5px">发票号</span>
                                    <ta-input value="12345678" style="width:80%"/>
                                </div>
                            </div>
                            <div style="padding:10px 10px 20px 30px">
                                <div style="text-align: right;margin-top: 15px">
                                    <span style="margin-right:5px;font-size: 20px;font-weight: 800;color:red">应收</span>
                                    <ta-input style="width:80%;display: inline-block;" :disabled="true"/>
                                </div>
                                <div style="text-align: right;margin-top: 15px">
                                    <span style="margin-right:5px;font-size: 20px;font-weight: 800;">实收</span>
                                    <ta-input style="width:80%;display: inline-block;"/>
                                </div>
                                <div style="text-align: right;margin-top: 15px">
                                    <span style="margin-right:5px;font-size: 20px;font-weight: 800;">找补</span>
                                    <ta-input style="width:80%;display: inline-block;" :disabled="true"/>
                                </div>
                            </div>
                        </ta-card>
                        <ta-card id="children2" :bordered="false"
                                 :bodyStyle="{/*display:'flex',alignItems: 'center',*/height:'200px'}">
                            <div slot="title">
                                <span style="height:100%">收费信息</span>
                            </div>
                            <div style="width:100%;height:150px;border:1px solid #EBEEF5;margin-top:20px;display:flex;padding:10px">
                                <div style="width: 50%;">
                                    <ta-row>
                                        <ta-col span="16" :style="{textAlign:'right'}"><span>医保号：</span></ta-col>
                                        <ta-col span="8">54645246</ta-col>
                                    </ta-row>
                                    <ta-row style="margin-top:5px">
                                        <ta-col span="16" :style="{textAlign:'right'}"><span>就诊方式：</span></ta-col>
                                        <ta-col span="8"/>
                                    </ta-row>
                                    <ta-row style="margin-top: 5px">
                                        <ta-col span="16" :style="{textAlign:'right'}"><span>账户余额：</span></ta-col>
                                        <ta-col span="8">5364.00</ta-col>
                                    </ta-row>
                                    <ta-row style="margin-top:5px">
                                        <ta-col span="16" :style="{textAlign:'right'}"><span>其中账户抵消：</span></ta-col>
                                        <ta-col span="8">879.00</ta-col>
                                    </ta-row>
                                    <ta-row style="margin-top:5px">
                                        <ta-col span="16" :style="{textAlign:'right'}"><span>本次报销：</span></ta-col>
                                        <ta-col span="8"></ta-col>
                                    </ta-row>
                                </div>
                                <div>
                                    <ta-row>
                                        <ta-col span="16" :style="{textAlign:'right'}"><span>账户支付：</span></ta-col>
                                        <ta-col span="8">123456</ta-col>
                                    </ta-row>
                                    <ta-row style="margin-top:5px">
                                        <ta-col span="16" :style="{textAlign:'right'}"><span>医保支付：</span></ta-col>
                                        <ta-col span="8"/>
                                    </ta-row>
                                </div>
                            </div>
                        </ta-card>
                        <ta-card id="children3" :bordered="false" :bodyStyle="{/*display:'flex',alignItems: 'center',*/height:'200px'}">
                        </ta-card>
                    </div>
                </ta-card>
            </div>
            <div slot="right">
                <ta-table :columns="columns" :data-source="tableData"/>
            </div>
        </ta-border-layout>
    </div>
</template>

<script>
  import MyInput from './MyInput'
  import MySelect from './MySelect'

  const columns = [{
    title: '医生',
    dataIndex: 'doctor',
  }, {
    title: '类别',
    dataIndex: 'type',
  }, {
    title: '余号数',
    dataIndex: 'leaveNumber',
  }]

  const tableData = [{
    key: '1',
    doctor: '张医生',
    type: '儿科',
    leaveNumber: '59'
  }, {
    key: '2',
    doctor: '李医生',
    type: '骨科',
    leaveNumber: '20'
  }]

  export default {
    name: 'layout3',
    data () {
      return {
        columns,
        tableData
      }
    },
    components: {
      MyInput,
      MySelect
    },
    methods: {
      test () {
        console.log(this.form.getFieldValue('age'))
      }
    }
  }
</script>

<style>
    .borderLayout.showBorder {
        border: 2px solid #F0F2F5;
    }

    .ant-table-tbody > tr > td {
        font-size: 12px;
        text-align: center;
    }

    .ant-table-thead > tr > th {
        font-size: 13px;
        text-align: center;
    }

    #part4 .ant-card-body {
        padding: 0;
    }

    #part1 .ant-card-body {
        padding: 0 0 0 50px;
    }

    #children2 .ant-card-body,
    #children1 .ant-card-body {
        border-top: 1px solid #EBEEF5;
    }

    #part3 .ant-card-body,
    #part2 .ant-card-body {
        border-top: 1px solid #EBEEF5;
        border-bottom: 1px solid #EBEEF5;
    }

    .borderLayout > div.showBorder.right {
        border-left: 20px solid #F0F2F5;
    }


    #part3 .ant-card-head,
    #part2 .ant-card-head {
        padding: 15px 0 0 0px;
        border-bottom: none;
    }

    #children1, #children2, #children3 {
        width: 30%;
        margin-right: 3%;
    }

    #children1 {
        position: relative;
    }

    #children3 .ant-card-head,
    #children2 .ant-card-head,
    #children1 .ant-card-head {
        border-bottom: none;
        padding: 15px 0 0 0px;
    }
</style>

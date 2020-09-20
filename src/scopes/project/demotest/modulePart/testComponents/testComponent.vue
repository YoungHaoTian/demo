<!--created by zsm -->
<template>
    <div>
        <ta-form :autoFormCreate="(form)=>{this.form = form}" :formLayout="true" :col="5">
            <ta-form-item
                    label='姓名'
                    fieldDecoratorId="name"
                    :require="{message:'请输入姓名!'}">
                <ta-input placeholder='input placeholder' />
            </ta-form-item>
            <ta-form-item
                    label='性别'
                    fieldDecoratorId="sex"
                    :require="{message:'请选择性别!'}">
                <ta-select style="width: 100%">
                    <ta-select-option value="1">男</ta-select-option>
                    <ta-select-option value="2">女</ta-select-option>
                </ta-select>
            </ta-form-item>
            <ta-form-item
                    label='年龄'
                    fieldDecoratorId="age">
                <ta-input placeholder='input placeholder' />
            </ta-form-item>
            <ta-form-item
                    label='民族'
                    fieldDecoratorId="mingz">
                <ta-select style="width: 100%">
                    <ta-select-option value="1">汉族</ta-select-option>
                </ta-select>
            </ta-form-item>
            <ta-form-item
                    label='证件号码'
                    fieldDecoratorId="idcard"
                    :require="{message:'请输入身份证号码!'}"
                    :fieldDecoratorOptions="{rules: [{ idCard: '2', message: '输入的身份证号码不合法'}]}">
                <ta-input placeholder='input placeholder' />
            </ta-form-item>
            <ta-form-item
                    label='联系电话'
                    fieldDecoratorId="phone"
                    :require="{message:'请输入电话号码!'}"
                    :fieldDecoratorOptions="{rules: [{ phone: 'mobile', message: '输入的手机号码不合法'}]}">
                <ta-input placeholder='input placeholder' />
            </ta-form-item>
            <ta-form-item label="" :wrapperCol="{span: 18,offset: 6}">
                <ta-button @click="setFieldValue" style="margin-right: 10px">设置值</ta-button>
                <ta-button type='primary' @click="handleSubmit">提交</ta-button>
            </ta-form-item>
        </ta-form>

    </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {
      // 文本框赋值
      setFieldValue(){
        let values = {'name': 'Nacy','sex':'1','idcard':'5401061995106035410','phone':'13850107544'}
        this.form.setFieldsValue(values)
      },
      // 提交
      handleSubmit () {
        let formData = this.form.getFieldsValue()
        this.Base.submit(
          // 表单对象this.form,如果没有自动校验可以为null
          this.form, {
            url: 'demo/tableRestService/test', // url
            data: formData, // 表单数据
            autoValid: true// 提交前是否自动验证
          }, {
            // 成功回调
            successCallback: (data) => {
              console.log(data)
            },
            // 失败回调
            failCallback: (data) => {
              console.log(data)
            }
          })
      }
    },
    computed: {

    }
  }
</script>

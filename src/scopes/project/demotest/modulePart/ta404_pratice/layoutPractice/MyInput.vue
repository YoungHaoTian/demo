<template>
    <div style="justify-content: center;display: flex;">
        <ta-input maxlength="2" style="display: inline-block;width:32%" :value="value.input1" @change="handleChange($event,1)"/>
        <div style="display: inline-block;width:26%;position:relative;margin-left: 5%;margin-right: 5%">
            <ta-input maxlength="2" style="position:absolute;top:-16px" :value="value.input2" @change="handleChange($event,2)"/>
            <ta-input maxlength="2" style="position:absolute;top:16px" :value="value.input3" @change="handleChange($event,3)"/>
        </div>
        <ta-input maxlength="1" style="display: inline-block;width:32%" :value="value.input4" @change="handleChange($event,4)"/>
    </div>
</template>

<script>
  export default {
    name: 'MyInput',
    props: {
      value: {
        type: Object,
        default () {
          return {
            input1: '',
            input2: '',
            input3: '',
            input4: '月',
          }
        }
      }
    },
    data () {
      return {}
    },
    mounted () {
      console.log(this.value)
    },
    methods: {
      handleChange ({ target }, index) {
        const item = `input${index}`
        this.changeValue({ [item]: target.value })
      },
      //触发整体修改,触发change事件
      changeValue (value) {
        //提供 onChange 事件或 trigger 的值同名的事件。
        this.$emit('change', Object.assign({}, this.value, value))
      }
    }
  }
</script>

<style scoped>

</style>

<template>
    <div style="display:flex;">
        <ta-select :default-value="value.select1" style="margin-right: 40px" @change="handleChange($event,'select1')"/>
        <ta-select :default-value="value.select2" style="margin-right: 40px" @change="handleChange($event,'select2')"/>
        <ta-select :default-value="value.select3" style="margin-right: 40px" @change="handleChange($event,'select3')"/>
        <ta-input :value="value.input" @change="handleChange($event,'input')"/>
    </div>
</template>

<script>
  export default {
    name: 'MySelect',
    props: {
      value: {
        type: Object,
        default () {
          return {
            select1: '',
            select2: '',
            select3: '',
            input: '',
          }
        }
      }
    },
    methods: {
      handleChange ({ target }, item) {
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

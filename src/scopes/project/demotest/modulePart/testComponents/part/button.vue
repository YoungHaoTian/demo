<template>
    <div>
        <h2>
            {{msg}}
            <ta-button @click="()=>{this.testEvent('123456789')}">test</ta-button>
        </h2>
    </div>
</template>

<script>
  export default {
    name: 'buttonComponent',
    props: {
      msg: {
        type: String
      },
      testEvent: {
        type: Function
      }
    },
    data () {
      return {}
    }
  }
</script>

<style scoped type="text/less">

</style>

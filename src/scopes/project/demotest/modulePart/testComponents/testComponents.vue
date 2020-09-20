<template>
    <div>
        <h1>
            测试各种组件
        </h1>
        <test-button msg="测试button组件ing..."></test-button>
    </div>
</template>

<script>
  import testButton from './part/button'

  export default {
    name: 'testComponents',
    components: { testButton },
    data () {
      return {}
    }
  }
</script>

<style scoped type="text/less">

</style>

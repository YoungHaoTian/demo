<template>
    <div style="width: 100%;height:150px">
        <ta-border-layout :layout="{header:'50px'}" :showBorder="false">
            <div slot="header">
                <img src="../static/title1.png"/>属性一
            </div>
            <ta-form layout="horizontal"
                     :form-layout="true" :col="col" :style="{marginRight:'100px'}">
                <ta-form-item label="自动补全">
                    <ta-auto-complete
                            :dataSource="dataSource1"
                            @search="handleSearch"/>
                </ta-form-item>
                <ta-form-item label="带清除按钮">
                    <ta-auto-complete
                            :allowClear="true"/>
                </ta-form-item>
                <ta-form-item label="自定义输入框">
                    <ta-auto-complete>
                        <ta-input-search/>
                    </ta-auto-complete>
                </ta-form-item>
            </ta-form>
        </ta-border-layout>

        <ta-border-layout :layout="{header:'50px'}" :showBorder="false">
            <div slot="header">
                <img src="../static/title1.png" alt="加载失败"/>属性二
            </div>
            <ta-form layout="horizontal" :col="col" :style="{marginRight:'100px'}"
                     :form-layout="true">
                <ta-form-item label="带默认值">
                    <ta-auto-complete default-value="111"/>
                </ta-form-item>
                <ta-form-item label="带提示内容">
                    <ta-auto-complete placeholder="请输入..."/>
                </ta-form-item>
                <ta-form-item label="展开的下拉框">
                    <ta-auto-complete :default-open="true" :open="true">
                        <template slot="dataSource">
                            <ta-select-option v-for="item in dataSource2" :value="item" :key="item">{{item}}
                            </ta-select-option>
                        </template>
                    </ta-auto-complete>
                </ta-form-item>
            </ta-form>
        </ta-border-layout>

        <ta-border-layout :layout="{header:'50px'}" :showBorder="false">
            <div slot="header">
                <img src="../static/title1.png" alt="加载失败"/>属性三
            </div>
            <ta-form layout="horizontal" :col="col" :style="{marginRight:'100px'}"
                     :form-layout="true">
                <ta-form-item label="禁止使用">
                    <ta-auto-complete
                            :disabled="true"/>
                </ta-form-item>
                <ta-form-item label="忽略大小写">
                    <ta-auto-complete
                            :dataSource="dataSource2"
                            :filter-option="filterOption"
                    />
                </ta-form-item>
            </ta-form>
        </ta-border-layout>
    </div>
</template>

<script>
  export default {
    name: 'part1',
    data () {
      return {
        dataSource1: [],
        dataSource2: ['beijing', 'shanghai', 'sichuan'],
        clientHeight: '',
        col: {
          xs: 1,
          sm: 2,
          md: 2,
          lg: 3,
        },
      }
    },
    /* mounted () {
     // 获取浏览器可视区域高度
      this.clientHeight = `${document.documentElement.clientHeight}`
      // window.onresize事件一般放在 created 或者 mounted 生命周期函数中，浏览器可视区域大小改变时触发。
      // 将指向vue的this赋值给其它变量: const _this = this
      window.onresize = () => {
        this.clientHeight = `${document.documentElement.clientHeight}`
        // 如果需要调用methods中的函数: _this.changeFixed(this.clientHeight)
        // 由于 window.onresize 中的this指向的是window，不是指向vue
        // 所以需要在window.onresize事件前，将指向vue的this赋值给其它变量，比如"_this"。
      }
    },*/
    // 由于window.onresize是全局事件，在其他页面改变界面时也会执行，这样可能会出现问题，
    // 所以需要在结束界面时，注销window.onresize事件。
    /*destroyed () {
      window.onresize = null
    },*/
    /* watch: {
       // 如果 `clientHeight` 发生改变，执行 changeFixed 函数
       clientHeight: function () {
         this.changeFixed(this.clientHeight)
       },
     },*/
    methods: {
      handleSearch (value) {
        this.dataSource1 = !value ? [] : [
          value,
          value + value,
          value + value + value,
        ]
      },
      filterOption (input, option) {
        return option.componentOptions.children[0].text.toUpperCase().indexOf(input.toUpperCase()) >= 0
      },// 根据 clientHeight 修改样式
      /*changeFixed (clientHeight) {
        this.$refs.main_div.style.height = clientHeight + 'px'
      },*/
    },
  }
</script>

<style scoped>
    .borderLayout > div.showBorder.header > div {
        border: none;
    }
    .ant-form-item-control{
        width: 80%;
    }
</style>

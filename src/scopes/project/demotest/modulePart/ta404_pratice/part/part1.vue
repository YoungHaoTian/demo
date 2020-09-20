<template>
    <div>
        <div style="margin-top: 30px">
            <ta-row>
                <ta-col><img src="../static/title1.png"/>属性一</ta-col>
            </ta-row>
        </div>
        <div style="margin-top: 30px">
            <ta-row type="flex" justify="space-around">
                <ta-col :span="7">
                    <span>自动补全：</span>
                    <ta-auto-complete
                            :dataSource="dataSource1"
                            @search="handleSearch"
                            style="width: 75%"/>
                </ta-col>
                <ta-col :span="7">
                    <span>带清除按钮：</span>
                    <ta-auto-complete
                            style="width: 75%"
                            :allowClear="true"/>
                </ta-col>
                <ta-col :span="7">
                    <span>自定义输入框：</span>
                    <ta-auto-complete
                            style="width: 75%">
                        <ta-input-search/>
                    </ta-auto-complete>
                </ta-col>
            </ta-row>
        </div>

        <div style="margin-top: 60px">
            <ta-row>
                <ta-col><img src="../static/title1.png"/>属性二</ta-col>
            </ta-row>
        </div>
        <div style="margin-top: 30px">
            <ta-row type="flex" justify="space-around">
                <ta-col :span="7">
                    <span>带默认值：</span>
                    <ta-auto-complete
                            style="width: 75%"
                            default-value="111"/>
                </ta-col>
                <ta-col :span="7">
                    <span>带提示内容：</span>
                    <ta-auto-complete
                            style="width: 75%"
                            placeholder="请输入..."/>
                </ta-col>
                <ta-col :span="7">
                    <span>展开的下拉框：</span>
                    <ta-auto-complete
                            style="width: 75%">
                        <template slot="dataSource">
                            <ta-select-option v-for="item in dataSource2" :value="item" :key="item">{{item}}
                            </ta-select-option>
                        </template>
                    </ta-auto-complete>
                </ta-col>
            </ta-row>
        </div>

        <div style="margin-top: 60px">
            <ta-row>
                <ta-col><img src="../static/title1.png"/>属性三</ta-col>
            </ta-row>
        </div>
        <div style="margin-top: 30px">
            <ta-row type="flex" justify="space-around">
                <ta-col :span="7">
                    <span>禁止使用：</span>
                    <ta-auto-complete
                            style="width: 75%"
                            :disabled="true"/>
                </ta-col>
                <ta-col :span="7">
                    <span>忽略大小写：</span>
                    <ta-auto-complete
                            style="width: 75%"
                            :dataSource="dataSource2"
                            :filter-option="filterOption"
                    />
                </ta-col>
                <ta-col :span="7"/>
            </ta-row>
        </div>

    </div>
</template>

<script>
  export default {
    name: 'part1',
    data () {
      return {
        dataSource1: [],
        dataSource2: ['beijing', 'shanghai', 'sichuan']
      }
    },
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
      }
    }
  }
</script>

<style scoped>

</style>

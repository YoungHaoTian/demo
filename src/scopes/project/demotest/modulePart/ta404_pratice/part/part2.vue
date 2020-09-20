<template>
    <div>
        <div style="margin-top: 30px">
            <ta-row>
                <ta-col><img src="../static/title1.png"/>属性一</ta-col>
            </ta-row>
        </div>
        <div style="margin-top: 30px">
            <ta-row type="flex" justify="space-around" >
                <ta-col :span="7">
                    <span>级联选择：</span>
                    <ta-cascader :options="options"/>
                </ta-col>
                <ta-col :span="7">
                    <span>渲染展示项：</span>
                    <ta-cascader :options="options">
                        <template slot="displayRender" slot-scope="{labels,selectedOptions}">
                            <span v-for="(label, index) in labels" :key="selectedOptions[index].value">
                                <span v-if="index === labels.length - 1">{{label}}</span>
                                <span v-else>{{label}}-</span>
                            </span>
                        </template>
                    </ta-cascader>
                </ta-col>
                <ta-col :span="7">
                    <span>定义展开方式：</span>
                    <ta-cascader :options="options" expand-trigger="hover"
                                 :display-render="displayRender"/>
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
                    <span>自设样式：</span>
                    <ta-cascader :options="options" :popup-style="{backgroundColor:'red',color:'white'}"/>
                </ta-col>
                <ta-col :span="7">
                    <span>自定义后缀：</span>
                    <ta-cascader :options="options">
                        <ta-icon type="caret-down" slot="suffixIcon"/>
                    </ta-cascader>
                </ta-col>
                <ta-col :span="7">
                    <span>限制搜索条数：</span>
                    <ta-cascader :options="options" :show-search="{limit:1,filter}"/>
                </ta-col>
            </ta-row>
        </div>

    </div>
</template>

<script>
  export default {
    name: 'part1',
    data () {
      return {
        options: [{
          value: 'sichuan',
          label: '四川',
          children: [{
            value: 'chengdu',
            label: '成都'
          }]
        }, {
          value: 'zhejiang',
          label: '浙江',
          children: [{
            value: 'hangzhou',
            label: '杭州'
          }]
        }, {
          value: 'guangdong',
          label: '广东',
          children: [{
            value: 'guangzhou',
            label: '广州'
          }]
        }],
      }
    },
    methods: {
      displayRender ({ labels }) {
        let select = ''
        for (const label in labels) {
          if (Number(label) !== labels.length - 1) {
            select += labels[label] + '-'
          } else {
            select += labels[label]
          }
        }
        return select
      },
      filter(inputValue,path){
        return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1))
      }
    }
  }
</script>

<style scoped>

</style>

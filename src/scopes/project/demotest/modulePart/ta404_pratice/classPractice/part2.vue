<template>
    <div style="width: 100%;height:150px">
        <ta-border-layout :layout="{header:'50px'}" :showBorder="false">
            <div slot="header">
                <img src="../static/title1.png"/>属性一
            </div>
            <ta-form layout="horizontal"
                     :form-layout="true" :col="col">
                <ta-form-item label="级联选择">
                    <ta-cascader :options="options"/>
                </ta-form-item>
                <ta-form-item label="渲染展示项">
                    <ta-cascader :options="options">
                        <template slot="displayRender" slot-scope="{labels,selectedOptions}">
                            <span v-for="(label, index) in labels" :key="selectedOptions[index].value">
                                <span v-if="index === labels.length - 1">{{label}}</span>
                                <span v-else>{{label}}-</span>
                            </span>
                        </template>
                    </ta-cascader>
                </ta-form-item>
                <ta-form-item label="定义展开方式">
                    <ta-cascader :options="options" expand-trigger="hover"
                                 :display-render="displayRender"/>
                </ta-form-item>
            </ta-form>
        </ta-border-layout>

        <ta-border-layout :layout="{header:'50px'}" :showBorder="false">
            <div slot="header">
                <img src="../static/title1.png"/>属性二
            </div>
            <ta-form layout="horizontal"
                     :form-layout="true" :col="col">
                <ta-form-item label="自设样式">
                    <ta-cascader :options="options" :popup-style="{backgroundColor:'red',color:'white'}" popupClassName="customRender"/>
                </ta-form-item>
                <ta-form-item label="自定义后缀">
                    <ta-cascader :options="options" @change="()=>{this.flag=true}">
                        <ta-icon v-if="flag" type="caret-down" slot="suffixIcon"/>
                        <ta-icon v-else type="caret-up" slot="suffixIcon"/>
                    </ta-cascader>
                </ta-form-item>
                <ta-form-item label="限制搜索条数">
                    <ta-cascader :options="options" :show-search="{limit:1,filter}"/>
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
        flag: false,
        col: {
          xs: 1,
          sm: 2,
          md: 2,
          lg: 3,
        },
        flag:true
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
      filter (inputValue, path) {
        return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1))
      }
    }
  }
</script>

<style>
    .customRender .ant-cascader-menu-item:hover {
        background-color: #188eff;
    }

    .borderLayout > div.showBorder.header > div {
        border: none;
    }

    .customRender .ant-cascader-menu-item-active {
        background-color: #188eff;
    }

    .ant-form-item-control{
        width: 80%;
    }
</style>

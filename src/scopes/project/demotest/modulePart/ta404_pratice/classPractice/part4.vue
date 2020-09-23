<template>
    <div style="width: 100%;height:150px">
        <ta-border-layout :layout="{header:'50px'}" :showBorder="false">
            <div slot="header">
                <img src="../static/title1.png"/>属性一
            </div>
            <ta-form layout="horizontal" :form-layout="true" :col="col">
                <ta-form-item label="前缀和后缀">
                    <ta-input>
                        <ta-select slot="addonBefore" defaultValue="Http://">
                            <ta-select-option value="Http://">http://</ta-select-option>
                            <ta-select-option value="Https://">https://</ta-select-option>
                        </ta-select>
                        <ta-select slot="addonAfter" defaultValue=".com">
                            <ta-select-option value=".com">.com</ta-select-option>
                            <ta-select-option value=".jp">.jp</ta-select-option>
                            <ta-select-option value=".cn">.cn</ta-select-option>
                            <ta-select-option value=".org">.org</ta-select-option>
                        </ta-select>
                    </ta-input>
                </ta-form-item>
                <ta-form-item label="添加前后图标">
                    <ta-input>
                        <ta-icon slot="prefix" type="apple"/>
                        <ta-icon slot="suffix" type="environment"/>
                    </ta-input>
                </ta-form-item>
                <ta-form-item label="搜索框">
                    <ta-input-search style="width:75%"/>
                </ta-form-item>
            </ta-form>
        </ta-border-layout>

        <ta-border-layout :layout="{header:'50px'}" :showBorder="false">
            <div slot="header">
                <img src="../static/title1.png"/>属性二
            </div>
            <ta-form layout="horizontal" :form-layout="true" :col="col">
                <ta-form-item label="金额的格式化">
                    <ta-input-number :asAmount="true"/>
                </ta-form-item>
                <ta-form-item label="最大值(30.00)">
                    <ta-input-number :max="30.00" :precision="2" :step="0.01"/>
                </ta-form-item>
                <ta-form-item label="最小值(10.00)">
                    <ta-input-number :min="10.00" :precision="2" :step="0.01"/>
                </ta-form-item>
            </ta-form>
        </ta-border-layout>

        <ta-border-layout :layout="{header:'50px'}" :showBorder="false">
            <div slot="header">
                <img src="../static/title1.png"/>属性三
            </div>
            <ta-form layout="horizontal"
                     :form-layout="true" :col="col">
                <ta-form-item label="保留两位小数">
                    <ta-input-number :precision="2" :step="0.01"/>
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
        col: {
          xs: 1,
          sm: 2,
          md: 2,
          lg: 3,
        },
      }
    },
    mounted () {
    },
    methods: {},
  }
</script>

<style>
    .ant-form-item-control {
        width: 80%;
    }

    .ant-input-number {
        width: 100%;
    }

    .ant-input-search {
        width: 100% !important;
    }

    .borderLayout > div.showBorder.header > div {
        border: none;
    }

</style>

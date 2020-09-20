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
                    <span>前缀和后缀：</span>
                    <ta-input style="width:75%">
                        <ta-select slot="addonBefore" defaultValue="Http://" style="width: 90px">
                            <ta-select-option value="Http://">http://</ta-select-option>
                            <ta-select-option value="Https://">https://</ta-select-option>
                        </ta-select>
                        <ta-select slot="addonAfter" defaultValue=".com" style="width: 80px">
                            <ta-select-option value=".com">.com</ta-select-option>
                            <ta-select-option value=".jp">.jp</ta-select-option>
                            <ta-select-option value=".cn">.cn</ta-select-option>
                            <ta-select-option value=".org">.org</ta-select-option>
                        </ta-select>
                    </ta-input>
                </ta-col>
                <ta-col :span="7">
                    <span>添加前后图标：</span>
                    <ta-input style="width:75%">
                        <ta-icon slot="prefix" type="apple"/>
                        <ta-icon slot="suffix" type="position"/>
                    </ta-input>
                </ta-col>
                <ta-col :span="7">
                    <span>搜索框：</span>
                    <ta-input-search style="width:75%"/>
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
                    <span>金额的格式化：</span>
                    <ta-input-number style="width:75%" :asAmount="true"/>
                </ta-col>
                <ta-col :span="7">
                    <span>最大值(30.00)：</span>
                    <ta-input-number style="width:75%" :max="30.00" :precision="2" :step="0.01"/>
                </ta-col>
                <ta-col :span="7">
                    <span>最小值(10.00)：</span>
                    <ta-input-number style="width:75%" :min="10.00" :precision="2" :step="0.01"/>
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
                    <span>保留两位小数：</span>
                    <ta-input-number style="width:75%" :precision="2" :step="0.01"/>
                </ta-col>
                <ta-col :span="7">
                </ta-col>
                <ta-col :span="7">
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
      }
    },
    mounted () {
    },
    methods: {
    },
  }
</script>

<style scoped>

</style>

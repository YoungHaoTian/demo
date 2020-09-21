<template>
    <div style="width: 100%;height:150px">
        <ta-border-layout :layout="{header:'50px'}" :showBorder="false">
            <div slot="header">
                <img src="../static/title1.png"/>属性一
            </div>
            <ta-form layout="horizontal"
                     :form-layout="true" :gutter="100" :col="col" :style="{marginRight:'100px'}">
                <ta-form-item label="格式化日期">
                    <ta-date-picker format="YYYY-MM"/>
                </ta-form-item>
                <ta-form-item label="禁用日期项">
                    <ta-date-picker :disabledDate="disabledDate"/>
                </ta-form-item>
                <ta-form-item label="禁用时间项">
                    <ta-date-picker :showTime="{ defaultValue: moment('00:00:00', 'HH:mm:ss') }"
                                    :disabledTime="disabledDateTime"/>
                </ta-form-item>
            </ta-form>
        </ta-border-layout>

        <ta-border-layout :layout="{header:'50px'}" :showBorder="false">
            <div slot="header">
                <img src="../static/title1.png"/>属性二
            </div>
            <ta-form layout="horizontal"
                     :form-layout="true" :gutter="100" :col="col" :style="{marginRight:'100px'}">
                <ta-form-item label="自定义单元格">
                    <ta-date-picker>
                        <template slot="dateRender" slot-scope="current, today">
                            <div :style="getCurrentStyle(current, today)">
                                {{current.date()}}
                            </div>
                        </template>
                    </ta-date-picker>
                </ta-form-item>
                <ta-form-item label="默认日期当天">
                    <ta-date-picker :defaultValue="moment()"/>
                </ta-form-item>
                <ta-form-item label="额外的页脚">
                    <ta-date-picker>
                        <template slot="renderExtraFooter">
                            美好的一天从编程开始
                        </template>
                    </ta-date-picker>
                </ta-form-item>
            </ta-form>
        </ta-border-layout>

        <ta-border-layout :layout="{header:'50px'}" :showBorder="false">
            <div slot="header">
                <img src="../static/title1.png"/>属性三
            </div>
            <ta-form layout="horizontal"
                     :form-layout="true" :gutter="100" :col="col" :style="{marginRight:'100px'}">
                <ta-form-item label="范围选择日期">
                    <ta-range-picker/>
                </ta-form-item>
                <ta-form-item label="预设日期范围">
                    <ta-range-picker :ranges="{ 'day1': [moment(), moment().endOf('month')]}"
                                     :defaultValue="[moment(), moment().endOf('month')]"/>
                </ta-form-item>
            </ta-form>
        </ta-border-layout>
    </div>
</template>

<script>
  import moment from 'moment'

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
    methods: {
      moment,
      disabledDate (current) {
        //不能选择本月1-9日
        if (current) {
          if (current <= moment().date(9).endOf('day') && current >= moment().date(1).startOf('day')) {
            return true
          }
          return false
        }
        return false
      },
      disabledDateTime () {
        // 返回不可选的时间集合
        return {
          disabledHours: () => [8, 9],
          disabledMinutes: () => [30, 31],
          disabledSeconds: () => [58, 59],
        }
      },
      getCurrentStyle (current, today) {
        const style = {}
        if (current.date() === moment().date()) {
          style.backgroundColor = 'red'
        } else {
          style.backgroundColor = 'blue'
        }
        return style
      },
    }
  }
</script>

<style scoped>

</style>

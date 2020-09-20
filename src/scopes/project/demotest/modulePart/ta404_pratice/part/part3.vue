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
                    <span>格式化日期：</span>
                    <ta-date-picker format="YYYY-MM"/>
                </ta-col>
                <ta-col :span="7">
                    <span>禁用日期项：</span>
                    <ta-date-picker :disabledDate="disabledDate"/>
                </ta-col>
                <ta-col :span="7">
                    <span>禁用时间项：</span>
                    <ta-date-picker :showTime="{ defaultValue: moment('00:00:00', 'HH:mm:ss') }"
                                    :disabledTime="disabledDateTime"/>
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
                    <span>自定义单元格：</span>
                    <ta-date-picker>
                        <template slot="dateRender" slot-scope="current, today">
                            <div :style="getCurrentStyle(current, today)">
                                {{current.date()}}
                            </div>
                        </template>
                    </ta-date-picker>
                </ta-col>
                <ta-col :span="7">
                    <span>默认日期当天：</span>
                    <ta-date-picker :defaultValue="moment()"/>
                </ta-col>
                <ta-col :span="7">
                    <span>额外的页脚：</span>
                    <ta-date-picker>
                        <template slot="renderExtraFooter">
                            美好的一天从编程开始
                        </template>
                    </ta-date-picker>
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
                    <span>范围选择日期：</span>
                    <ta-range-picker/>
                </ta-col>
                <ta-col :span="7" :offset="2">
                    <span>预设日期范围：</span>
                    <ta-range-picker :ranges="{ 'day1': [moment(), moment().endOf('month')]}" :defaultValue="[moment(), moment().endOf('month')]"/>
                </ta-col>
                <ta-col :span="5"/>
            </ta-row>
        </div>
    </div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: 'part1',
    data () {
      return {
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

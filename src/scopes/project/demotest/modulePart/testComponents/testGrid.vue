<template>
    <div>
        <h4>基础栅格</h4>
        <span>从堆叠到水平排列，使用单一的一组Row和Col栅格组件，就可以创建一个基本的栅格系统<br>
            注意：所有的列（Col）必须放在Row内</span>
        <div>
            <ta-row>
                <ta-col :span="12" class="item1">col-12</ta-col>
                <ta-col :span="12" class="item2">col-12</ta-col>
            </ta-row>
            <ta-row>
                <ta-col :span="8" class="item1">col-8</ta-col>
                <ta-col :span="8" class="item2">col-8</ta-col>
                <ta-col :span="8" class="item1">col-8</ta-col>
            </ta-row>
            <ta-row>
                <ta-col :span="6" class="item1">col-6</ta-col>
                <ta-col :span="6" class="item2">col-6</ta-col>
                <ta-col :span="6" class="item1">col-6</ta-col>
                <ta-col :span="6" class="item2">col-6</ta-col>
            </ta-row>
        </div>
        <br>
        <div>
            <h4>Flex布局</h4>
            <span>Flex布局基础。使用type="flex"定义flex布局，其子元素根据不同的值start，center，end，<br>
                space-between，space-around分别定义其在父节点里面的水平排列方式</span>
            <p>sub-element align left 子元素在父元素中左对齐</p>
            <ta-row type="flex" justify="start">
                <ta-col :span="4" class="item1">col-4</ta-col>
                <ta-col :span="4" class="item2">col-4</ta-col>
                <ta-col :span="4" class="item1">col-4</ta-col>
                <ta-col :span="4" class="item2">col-4</ta-col>
            </ta-row>
            <p>sub-element align center 子元素在父元素中居中对齐</p>
            <ta-row type="flex" justify="center">
                <ta-col :span="4" class="item1">col-4</ta-col>
                <ta-col :span="4" class="item2">col-4</ta-col>
                <ta-col :span="4" class="item1">col-4</ta-col>
                <ta-col :span="4" class="item2">col-4</ta-col>
            </ta-row>
            <p>sub-element align right 子元素在父元素中右对齐</p>
            <ta-row type="flex" justify="end">
                <ta-col :span="4" class="item1">col-4</ta-col>
                <ta-col :span="4" class="item2">col-4</ta-col>
                <ta-col :span="4" class="item1">col-4</ta-col>
                <ta-col :span="4" class="item2">col-4</ta-col>
            </ta-row>
            <p>sub-element monospaced arrangement 子元素之间填充空格，使其占满整个父元素（等宽排列）</p>
            <ta-row type="flex" justify="space-between">
                <ta-col :span="4" class="item1">col-4</ta-col>
                <ta-col :span="4" class="item2">col-4</ta-col>
                <ta-col :span="4" class="item1">col-4</ta-col>
                <ta-col :span="4" class="item2">col-4</ta-col>
            </ta-row>
            <p>sub-element align full 子元素左右两边填充空格，使其占满父元素（分散排列）</p>
            <ta-row type="flex" justify="space-around">
                <ta-col :span="4" class="item1">col-4</ta-col>
                <ta-col :span="4" class="item2">col-4</ta-col>
                <ta-col :span="4" class="item1">col-4</ta-col>
                <ta-col :span="4" class="item2">col-4</ta-col>
            </ta-row>
        </div>
        <br>

        <div>
            <h4>Flex对齐</h4>
            <span>Flex子元素垂直对齐方式</span><br>

            <p>Align Top 子元素与子元素之间顶部对齐</p>
            <ta-row type="flex" justify="center" align="top">
                <ta-col :span="4" class="item1"><p style="height: 100px">col-4</p></ta-col>
                <ta-col :span="4" class="item2"><p style="height: 50px">col-4</p></ta-col>
                <ta-col :span="4" class="item1"><p style="height: 120px">col-4</p></ta-col>
                <ta-col :span="4" class="item2"><p style="height: 80px">col-4</p></ta-col>
            </ta-row>
            <p>Align Center 子元素与子元素之间垂直居中对齐</p>
            <ta-row type="flex" justify="space-around" align="middle">
                <ta-col :span="4" class="item1"><p style="height: 100px">col-4</p></ta-col>
                <ta-col :span="4" class="item2"><p style="height: 50px">col-4</p></ta-col>
                <ta-col :span="4" class="item1"><p style="height: 120px">col-4</p></ta-col>
                <ta-col :span="4" class="item2"><p style="height: 80px">col-4</p></ta-col>
            </ta-row>
            <p>Align Bottom 子元素与子元素之间底部对齐</p>
            <ta-row type="flex" justify="space-between" align="bottom">
                <ta-col :span="4" class="item1"><p style="height: 100px">col-4</p></ta-col>
                <ta-col :span="4" class="item2"><p style="height: 50px">col-4</p></ta-col>
                <ta-col :span="4" class="item1"><p style="height: 120px">col-4</p></ta-col>
                <ta-col :span="4" class="item2"><p style="height: 80px">col-4</p></ta-col>
            </ta-row>
        </div>
        <br>
        <div>
            <h4>Flex排序</h4>
            <span>从堆叠到水平排列，通过Flex布局的Order来改变元素的排序</span>
            <ta-row type="flex">
                <ta-col :span="6" class="item1" :order="4">1 col-order-4</ta-col>
                <ta-col :span="6" class="item2" :order="3">2 col-order-3</ta-col>
                <ta-col :span="6" class="item1" :order="2">3 col-order-2</ta-col>
                <ta-col :span="6" class="item2" :order="1">4 col-order-1</ta-col>
            </ta-row>
        </div>
        <br>
        <div>
            <h4>区块间隔</h4>
            <span>栅格常常需要和间隔进行配合，你可以使用Row的gutter属性，但我们推荐使用(16+8n)px作为栅格间隔<br>
            其中n是自然数。当然如果需要支持响应式，可以写成{xs:8,sm:16,md:24,lg:32}</span>
            <div class="gutter-example">
                <ta-row :gutter="16">
                    <!--<ta-row :gutter="{xs:8,sm:16,md:24,lg:32}">-->
                    <ta-col class="gutter-row" :span="6">
                        <div class="gutter-box">col-6</div>
                    </ta-col>
                    <ta-col class="gutter-row" :span="6">
                        <div class="gutter-box">col-6</div>
                    </ta-col>
                    <ta-col class="gutter-row" :span="6">
                        <div class="gutter-box">col-6</div>
                    </ta-col>
                    <ta-col class="gutter-row" :span="6">
                        <div class="gutter-box">col-6</div>
                    </ta-col>
                </ta-row>
            </div>
        </div>
        <br>
        <div>
            <h4>左右偏移</h4>
            <span>列偏移，使用offset可以将元素在其原来的基础上，向右侧偏移。例如，:offset="4" 表示将元素向右侧偏移了4个列(column)的宽度</span>
            <div>
                <ta-row>
                    <ta-col :span="8" class="item1">col-8</ta-col>
                    <ta-col :span="8" class="item2" :offset="8">col-8</ta-col>
                </ta-row>
                <ta-row>
                    <ta-col :span="6" class="item1" :offset="6">col-6 col-offset-6</ta-col>
                    <ta-col :span="6" class="item2" :offset="6">col-6 col-offset-6</ta-col>
                </ta-row>
                <ta-row>
                    <ta-col :span="12" class="item1" :offset="6">col-12 col-offset-6</ta-col>
                </ta-row>
            </div>
            <br>
        </div>
        <div>
            <h4>其他属性的响应式</h4>
            <span>span pull push offset order属性可以内嵌到xs sm md lg xl xxl属性中来使用<br>
                其中 :xs="6" 相当于 :xs="{span:6}"</span>
            <div>
                <ta-row>
                    <ta-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }" class="item2">Col</ta-col>
                    <ta-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }" class="item1">Col</ta-col>
                    <ta-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }" class="item2">Col</ta-col>
                </ta-row>
            </div>
        </div>
        <br>

        <div>
            <h4>响应式布局</h4>
            <span>参照Bootstrap的响应式设计，预设六个响应尺寸：xs sm md lg xl xxl</span>
            <div>
                <ta-row>
                    <ta-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10" class="item2">Col</ta-col>
                    <ta-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4" class="item1">Col</ta-col>
                    <ta-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10" class="item2">Col</ta-col>
                </ta-row>
            </div>
        </div>
        <br>


        <div>
            <h4>栅格排序</h4>
            <span>列排序，通过使用push和pull类就可以很容易改变列的(column)的顺序<br>
            pull: 栅格向左移动的格数<br>
            push: 栅格向右移动的格数</span>
            <div>
                <ta-row>
                    <ta-col :span="18" :push="6" class="item2">col-18 col-push-6</ta-col>
                    <ta-col :span="6" :pull="18" class="item1">col-6 col-pull-18</ta-col>
                </ta-row>
            </div>
        </div>
        <br>
        <div>
            <!--<ul>
                <li v-for="(item,index) in 5" :key="item.toString()">{{item}}</li>
            </ul>-->
            <h4>栅格配置器</h4>
            <span>可以简单配置几种等分栅格和间距</span>
            <div id="components-grid-demo-playground">
                <div style="margin-bottom: 16px">
                    <span style="margin-right: 6px">Gutter (px): </span>
                    <div style="width: 50%">
                        <ta-slider
                                :min="0"
                                :max="Object.keys(gutters).length-1"
                                v-model="gutterKey"
                                :marks="this.gutters"
                                :step="null"/>
                    </div>
                    <span style="margin-right:6px">Column Count:</span>
                    <div style="width:50%">
                        <ta-slider
                                :min="0"
                                :max="Object.keys(colCounts).length - 1"
                                v-model="colCountKey"
                                :marks="this.colCounts"
                                :step="null"/>
                    </div>
                </div>
                <ta-row :gutter="gutters[gutterKey]">
                    <ta-col v-for="(item, index) in colCounts[colCountKey]" :key="item.toString()"
                            :span="24/colCounts[colCountKey]">
                        <div>Column</div>
                    </ta-col>
                </ta-row>
                <pre v-text="rowColHtml"/>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'testGrid',
    data () {
      const gutters = {}
      const arr = [8, 16, 24, 32, 40, 48]
      arr.forEach((value, i) => {
        gutters[i] = value
      })//gutters={0:8,1:16,...}
      // console.log(gutters)
      const colCounts = {}
      const arr1 = [2, 3, 4, 6, 8, 12]
      arr1.forEach((value, i) => {
        colCounts[i] = value
      })
      return {
        gutterKey: 1,
        colCountKey: 2,
        colCounts,
        gutters
      }
    },
    computed: {
      rowColHtml () {
        const colCount = this.colCounts[this.colCountKey]
        const getter = this.gutters[this.gutterKey]
        let colCode = '<Row :gutter="' + getter + '">\n'
        for (let i = 0; i < colCount; i++) {
          const spanNum = 24 / colCount
          colCode += '  <Col :span="' + spanNum + '"/>\n'
        }
        colCode += '</Row>'
        return colCode
      }
    }
  }
</script>

<style scoped>
    .item1 {
        background-color: #00acd6;
    }

    .item2 {
        background-color: #1e88e5;
    }

    .gutter-example >>> .ant-row > div {
        background: transparent;
        border: 0;
    }

    .gutter-box {
        background: #00A0E9;
        padding: 5px 0;
    }

    #components-grid-demo-playground [class^="ant-col-"] {
        background: transparent;
        border: 0;
    }

    #components-grid-demo-playground [class^="ant-col-"] > div {
        background: #00A0E9;
        height: 120px;
        line-height: 120px;
        font-size: 13px;
    }

    #components-grid-demo-playground pre {
        background: #a4e099;
        border-radius: 20px;
        font-size: 13px;
        padding: 8px 16px;
    }
</style>
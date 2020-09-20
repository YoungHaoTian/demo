<template>
    <div>
        <br>
        <h4>fixTop上下自适应</h4>
        <span>可以通过layout-type="fixTop"属性设置，主要适用于上部分需要自适应表单，下部分需要铺满容器</span>
        <div style="height: 600px">

            <ta-border-layout layout-type="fixTop">
                <ta-card title="表单" slot="header">
                    <ta-form layout="horizontal" :form-layout="true" :col="col">
                        <ta-form-item label="1">
                            <ta-input/>
                        </ta-form-item>
                        <ta-form-item label="2">
                            <ta-input/>
                        </ta-form-item>
                        <ta-form-item label="3">
                            <ta-input/>
                        </ta-form-item>
                        <ta-form-item label="4">
                            <ta-input/>
                        </ta-form-item>
                        <ta-form-item label="5">
                            <ta-input/>
                        </ta-form-item>
                        <ta-form-item label="6">
                            <ta-input/>
                        </ta-form-item>
                        <ta-form-item label="7">
                            <ta-input/>
                        </ta-form-item>
                        <ta-form-item label="8">
                            <ta-input/>
                        </ta-form-item>
                        <ta-form-item label="9">
                            <ta-input/>
                        </ta-form-item>
                        <ta-form-item label="10">
                            <ta-input/>
                        </ta-form-item>
                        <ta-form-item label="11">
                            <ta-input/>
                        </ta-form-item>
                        <ta-form-item label="12">
                            <ta-input/>
                        </ta-form-item>
                    </ta-form>
                </ta-card>
                <ta-card title="表格" class="fit">
                    <ta-table :columns="columns"
                              :dataSource="tableData"
                              :resizeRender="true"
                              :scroll="scroll">
                        <template slot="footer">
                            <ta-pagination
                                    style="float: right"
                                    url="demo/tableRestService/queryUserByCondition"
                                    ref="gridPager"
                            />
                        </template>
                    </ta-table>
                </ta-card>
            </ta-border-layout>
        </div>
        <br>
        <h4>
            布局基础使用
        </h4>
        <span>
            border布局基础的使用是改造布局，使用layout设置布局参数
        </span>
        <div style="height:600px">
            <ta-border-layout :layout="{header:'70px',footer:'68px',left:'200px',right:'150px'}">
                <div slot="header">
                    我是header
                </div>
                <div>
                    我是主要内容页
                </div>
                <div slot="left">
                    我是left
                </div>
                <div slot="right">
                    我是right
                </div>
                <div slot="footer">
                    我是footer
                </div>
            </ta-border-layout>
        </div>
        <br>


        <h4>
            工具条
        </h4>
        <span>
            border布局，每个布局部分都是可配置工具条的使用
            headerCfg, leftCfg, rightCfg, enterCfg, footerCfg属性配置
        </span>
        <div style="height:600px">
            <ta-border-layout
                    :layout="{header:'170px',footer:'120px',left:'200px',right:'150px'}"
                    :headerCfg="headerCfg"
                    :leftCfg="leftCfg"
                    :rightCfg="rightCfg"
                    :centerCfg="centerCfg"
                    :footerCfg="footerCfg"
            >
                <div slot="header">
                    我是header
                </div>
                <div>
                    我是主要内容页
                </div>
                <div slot="left">
                    我是left
                </div>
                <div slot="right">
                    我是right
                </div>
                <div slot="footer">
                    我是footer
                </div>
            </ta-border-layout>
        </div>
        <br>

        <h4>工具条配置</h4>
        <span>每个布局的工具条都是可以配置的，比如：头部(headerCfg)可以配置的属性有<br>
            &nbsp;title:头名称，如果没有可以设置为空<br>
            &nbsp;expand:是否显示展开收起按钮，默认为false不显示<br>
            &nbsp;expandText:展开收起按钮的提示文字<br>
            &nbsp;showBar:是否显示工具条，默认是false不显示<br>
            &nbsp;state:有工具条时，初始时是否打开header，默认打开true<br>
            同时也可以添加工具条自己的slot，比如header的headerExtraContent
        </span>
        <div style="height: 500px">
            <ta-border-layout
                    :layout="{header:'200px'}"
                    :headerCfg="headerCfg1"
                    :centerCfg="centerCfg1">
                <div slot="headerExtraContent" style="float: right">
                    <ta-input-search
                            placeholder="input search text"
                            style="width: 200px"/>
                </div>
                <div slot="header">我是header</div>
                <div>我是主要内容页</div>
                <div slot="centerExtraContent" style="float: right">
                    <ta-button>按钮</ta-button>
                </div>
            </ta-border-layout>
        </div>
        <br>

        <h4>隐藏边框</h4>
        <span>可以通过showBorder属性控制灰色边框的显示或者隐藏</span>
        <div style="height: 300px">
            <ta-border-layout
                    :show-border="aroundBorder"
                    :headerCfg="headerCfg2"
                    :layout="{header:'200px'}">
                <div slot="header">
                    <ta-button @click="aroundBorder=true">显示四周边框</ta-button>
                    <ta-button @click="aroundBorder=false">隐藏四周边框</ta-button>
                    <ta-button @click="headerBorder=true">显示header的边框</ta-button>
                    <ta-button @click="headerBorder=false">隐藏header的边框</ta-button>
                </div>
                <div slot="center">我是主要内容页</div>
            </ta-border-layout>
        </div>
        <br>


        <h4>嵌套布局</h4>
        <span>
            布局嵌套时请注意：
            <ul>
                <li><span>父容器设置 :showPadding="false" 不要显示padding</span></li>
                <li><span>子容器设置 :showBorder="false" 不要显示隔开边框</span></li>
            </ul>
        </span>
        <div style="height: 600px">
            <ta-border-layout :layout="{left:'120px'}" :showPadding="false">
                <div slot="left">
                    parent left
                </div>
                <ta-border-layout :show-border="false" :layout="{header:'70px'}">
                    <div slot="header">
                        inner header
                    </div>
                    <div>inner center</div>
                </ta-border-layout>
            </ta-border-layout>
        </div>
        <br>

        <h4>详细图示</h4>
        <span>每个布局的详细图示</span>
        <div>
            <img src="./detail.png" style="width:100%">
            <div style="height: 700px">
                <ta-border-layout
                        :layout="{header:'120px',footer:'200px',left:'250px',right:'250px'}"
                        :header-cfg="headerCfg3"
                        :left-cfg="leftCfg3"
                        :right-cfg="rightCfg3"
                        :center-cfg="centerCfg3"
                        :footer-cfg="footerCfg3">
                    <div slot="header">
                        header 顶部内容
                    </div>
                    <div slot="headerExtraContent" style="float: right">
                        headerExtraContent 头部工具条的插槽
                        <ta-input-search
                                placeholder="input search text"
                                style="width: 200px"/>
                    </div>
                    <div slot="left">
                        left 左侧内容
                    </div>
                    <div slot="leftExtraContent">
                        左侧工具条的插槽
                    </div>
                    <div slot="right">
                        right 右侧内容
                    </div>
                    <div slot="rightExtraContent">
                        右侧工具栏的插槽
                    </div>
                    <div slot="footer">
                        footer 底部内容
                    </div>
                    <div slot="footerExtraContent">
                        footerExtraContent 底部工具条的插槽
                    </div>
                    <div style="background-color: #0f990f">
                        center 主要内容容器
                    </div>
                    <div slot="centerFooter">
                        centerFooter 主要内容底部的插槽
                    </div>
                    <div slot="centerExtraContent">
                        centerExtraContent 主要内容工具条的插槽
                    </div>
                </ta-border-layout>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'testBorderLayout'
  }
</script>

<script scoped>
  const hobbyList = [{
    label: '足球',
    value: 0
  }, {
    label: '篮球',
    value: 1
  }, {
    label: '排球',
    value: 2
  }, {
    label: '乒乓球',
    value: 3,
    disabled: true
  }]
  const addressList = [{
    value: 'zhejiang',
    label: '浙江',
    children: [{
      value: 'hangzhou',
      label: '杭州',
      children: [{
        value: 'xihu',
        label: '西湖'
      }]
    }]
  }, {
    value: 'jiangsu',
    label: '江苏',
    children: [{
      value: 'nanjing',
      label: '南京',
      children: [{
        value: 'zhonghuamen',
        label: '中华门'
      }]
    }]
  }]

  const columns = [
    {
      dataIndex: 'name',
      width: 200,
      // title:100,
      slots: { title: 'nameTitle' },
      scopedSlots: { customRender: 'name' },
      overflowTooltip: true
    },
    {
      title: 'inputNumber示例',
      dataIndex: 'age',
      width: 200,
    },
    {
      title: 'select-单选示例',
      dataIndex: 'sex',
      width: 200,
    },
    {
      title: 'select-多选示例',
      dataIndex: 'hobby',
      width: 300,
    },
    {
      title: '日期选择框',
      dataIndex: 'date',
      width: 200,
    },
    {
      title: '日期选择框',
      dataIndex: 'month',
      width: 200,
    },
    {
      title: '日期选择框',
      dataIndex: 'range',
      width: 300,
    },
    {
      title: '日期选择框',
      dataIndex: 'week',
      width: 300,
    },
    {
      title: 'rate示例',
      dataIndex: 'rate',
      width: 300,
    },
    {
      title: 'switch示例',
      dataIndex: 'switch',
      width: 200,
    },
    {
      title: 'cascader示例',
      dataIndex: 'address',
      width: 200,
    },
    {
      title: 'treeSelect-单选示例',
      dataIndex: 'treeSelect',
      width: 200,
    },
    {
      title: 'treeSelect-多选示例',
      dataIndex: 'addresses',
      width: 300,
    },
    {
      title: '操作',
      dataIndex: 'action',
      width: 150,
      fixed: 'right'
    }
  ]

  const tempData = []
  for (let i = 0; i < 11; i++) {
    tempData.push({
      key: i.toString(),
      name: `Name ${i}`,
      age: i,
      sex: `${i % 3}`,
      hobby: [i % 3],
      date: '2019-05-10',
      month: '2019-05',
      range: ['2019-05-10', '2019-05-19'],
      week: '2019-10',
      rate: i % 6,
      switch: Boolean(i % 2),
      address: ['jiangsu', 'nanjing', 'zhonghuamen'],
      treeSelect: 'nanjing',
      addresses: ['jiangsu', 'zhonghuamen', 'nanjing']
    })
  }

  export default {
    data () {
      return {
        tableData: [],
        columns,
        hobbyList,
        addressList,
        col: {
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 6,
          xxl: 12,
        },
        height: '400px',
        scroll: {
          x: 3250,
          y: '100%'
        },
        headerCfg: {
          title: '我好像是header',
          expand: true,
          expandText: 'more',
          showBar: true
        },
        leftCfg: {
          title: '我好像是left',
          expand: true,
          expandText: '点我',
          showBar: true
        },
        rightCfg: {
          title: '我好像是right',
          expand: true,
          expandText: '点点',
          showBar: true
        },
        footerCfg: {
          title: 'footer',
          expand: true,
          expandText: '吱吱',
          showBar: true
        },
        centerCfg: {
          title: 'center',
          showBar: true
        },
        headerCfg1: {
          //头名称，如果没有可以设置为空
          title: 'header',
          //是否显示展开收起按钮，默认为false不显示
          expand: true,
          //展开收起按钮的提示文字
          expandText: '点我',
          //是否显示工具条，默认是false不显示
          showBar: true,
          //工具条高度
          barHeight: '62px',
          //有工具条时，初始时是否打开header，默认打开为true
          state: false
        },
        centerCfg1: {
          title: '我是center的title',
          showBar: true
        },
        aroundBorder: true,
        headerBorder: true,
        headerCfg2: {
          title: '我好像是header',
          expand: true,
          expandText: '点我',
          showBar: true
        },
        headerCfg3: {
          title: 'header',
          expand: true,
          expandText: 'close',
          showBar: true,
          expandCallback(value) {
            console.log(value)
          }
        },
        leftCfg3: {
          title: 'left',
          expand: true,
          expandText: 'close',
          showBar: true
        },
        rightCfg3: {
          title: 'right',
          expand: true,
          expandText: 'close',
          showBar: true
        },
        footerCfg3: {
          title: 'footer',
          expand: true,
          expandText: 'more',
          showBar: true
        },
        centerCfg3: {
          title: 'center',
          showBar: true,
          showFooter: true,
          footerHeight: '68px'
        }
      }
    },
    mounted () {
      this.tableData = tempData
    },
    watch: {
      headerBorder (newVal) {
        this.headerCfg2.showBar = newVal
      }
    }
  }
</script>

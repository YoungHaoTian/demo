<template>
    <div>
        <h1>
            测试Button组件
        </h1>
        <span>按钮有六种类型：主按钮、次按钮、虚线按钮、危险按钮、警示按钮、成功按钮。<br>
            主按钮在同一个操作区域最多出现一次。 可以通过angle属性改变按钮圆角大小。</span>
        <br>
        <div>
            <ta-button type="primary">Primary</ta-button>
            <ta-button>Default</ta-button>
            <ta-button type="dashed">Dashed</ta-button>
            <ta-button type="danger">Danger</ta-button>
            <ta-button type="warning">Warning</ta-button>
            <ta-button type="success">Success</ta-button>



            <ta-button type="success" @click="request">测试请求</ta-button>
        </div>
        <br>
        <div>
            <ta-button angle="0" type="primary">Primary</ta-button>
            <ta-button angle="0">Default</ta-button>
            <ta-button angle="15px" type="dashed">Dashed</ta-button>
            <ta-button angle="15px" type="danger">Danger</ta-button>
            <ta-button angle="15px" type="warning">Warning</ta-button>
            <ta-button angle="15px" type="success">Success</ta-button>
        </div>
        <br><br>


        <div id="components-button-demo-button-group">
            <h4>
                Basic
            </h4>
            <span>
                可以将多个 Button 放入 Button.Group 的容器中。<br>
                通过设置 size 为 large small 分别把按钮组合设为大、小尺寸。若不设置 size，则尺寸为中。<br>
            </span>
            <ta-button-group>
                <ta-button type="warning">Cancel</ta-button>
                <ta-button type="primary">OK</ta-button>
            </ta-button-group>
            <ta-button-group>
                <ta-button :disabled="true">L</ta-button>
                <ta-button :disabled="true">M</ta-button>
                <ta-button :disabled="true">R</ta-button>
            </ta-button-group>

            <ta-button-group>
                <ta-button type="primary">L</ta-button>
                <ta-button>M</ta-button>
                <ta-button>M</ta-button>
                <ta-button type="dashed">R</ta-button>
            </ta-button-group>
            <br>


            <h4>With Icon</h4><br>
            <ta-button-group>
                <ta-button type="primary" icon="left">
                    Go Back
                </ta-button>
                <ta-button type="primary">
                    Go forward
                    <ta-icon type="right"/>
                </ta-button>
            </ta-button-group>

            <ta-button-group>
                <ta-button type="primary">
                    <ta-icon type="cloud"/>
                </ta-button>
                <ta-button type="primary" icon="cloud-download"/>
            </ta-button-group>
        </div>
        <br>
        <h4>不可用状态(disabled)</h4>
        <span>添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。</span>
        <div>
            <ta-button type="primary">Primary</ta-button>
            <ta-button type="primary" :disabled="true">Primary(disabled)</ta-button>
            <br/>
            <ta-button>Default</ta-button>
            <ta-button :disabled="true">Default(disabled)</ta-button>
            <br/>
            <ta-button type="dashed">Dashed</ta-button>
            <ta-button type="dashed" :disabled="true">Dashed(disabled)</ta-button>
            <br/>
            <ta-button type="danger">Danger</ta-button>
            <ta-button type="danger" :disabled="true">Danger(disabled)</ta-button>
            <br/>
            <ta-button type="warning">Warning</ta-button>
            <ta-button type="warning" :disabled="true">Warning(disabled)</ta-button>
            <br/>
            <ta-button type="success">Success</ta-button>
            <ta-button type="success" :disabled="true">Success(disabled)</ta-button>
            <div :style="{ padding: '8px 8px 8px 8px', background: 'rgb(190, 200, 200)' }">
                <ta-button ghost>Ghost</ta-button>
                <ta-button ghost :disabled="true">Ghost(disabled)</ta-button>
            </div>
        </div>
        <br>

        <h4>幽灵按钮(Ghost)</h4>
        <span>幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。</span>
        <div :style="{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }">
            <ta-button type="primary" :ghost="true">Primary</ta-button>
            <ta-button :ghost="true">Default</ta-button>
            <ta-button type="dashed" :ghost="true">Dashed</ta-button>
            <ta-button type="danger" :ghost="true">Danger</ta-button>
            <ta-button type="warning" :ghost="true">Warning</ta-button>
            <ta-button type="success" :ghost="true">Success</ta-button>
        </div>
        <br>

        <h4>图标按钮(icon)</h4>
        <span>当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。<br>
            注意：如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。</span>
        <div>
            <ta-button type="primary" shape="circle" icon="search"></ta-button>
            <ta-button type="primary" icon="search">Search</ta-button>
            <ta-button shape="circle" icon="search"/>
            <ta-button icon="search">Search</ta-button>
            <ta-button type="dashed" shape="circle" icon="search"/>
            <ta-button type="dashed" icon="search">Search</ta-button>
            <ta-button>
                <ta-icon type="search"/>
                Use icon component
            </ta-button>
            <br/>
            <ta-button type="danger" shape="circle" icon="search"></ta-button>
            <ta-button type="danger" icon="search">Search</ta-button>
            <ta-button type="warning" shape="circle" icon="search"></ta-button>
            <ta-button type="warning" icon="search">Search</ta-button>
            <ta-button type="success" shape="circle" icon="search"></ta-button>
            <ta-button type="success" icon="search">Search</ta-button>
            <ta-button>Use icon component
                <ta-icon type="search"/>
            </ta-button>
        </div>
        <br>


        <h4>加载中状态(loading)</h4>
        <span>添加 loading 属性即可让按钮处于加载状态，其中两个按钮分别演示鼠标进入后触发加载状态和点击后延迟1s进入加载状态。</span>
        <div>
            <ta-button type="primary" :loading="true">
                Loading
            </ta-button>
            <ta-button type="primary" size="small" :loading="true">
                Loading
            </ta-button>
            <br/>
            <ta-button type="primary" :loading="loading" @mouseenter="enterLoading">
                mouseenter me!
            </ta-button>
            <ta-button type="primary" icon="poweroff" :loading="iconLoading" @click="enterIconLoading">
                延迟1s
            </ta-button>
            <br/>
            <ta-button shape="circle" :loading="true"/>
            <ta-button type="primary" shape="circle" :loading="true"/>
            <br/>
            <ta-button type="danger" :loading="true">Danger</ta-button>
            <ta-button type="warning" :loading="true">Warning</ta-button>
            <ta-button type="success" :loading="true">Success</ta-button>
        </div>
        <br>


        <h4>多个按钮组合</h4>
        <span>按钮组合使用时，推荐使用1个主操作 + n 个次操作，3个以上操作时把更多操作放到 Dropdown.Button 中组合使用。</span>
        <div>
            <ta-button type="primary">Primary</ta-button>
            <ta-button>secondary</ta-button>
            <ta-dropdown>
                <ta-menu slot="overlay" @click="handleMenuClick">
                    <ta-menu-item key="1">1st item</ta-menu-item>
                    <ta-menu-item key="2">2st item</ta-menu-item>
                    <ta-menu-item key="3">3st item</ta-menu-item>
                </ta-menu>
                <ta-button>
                    Actions
                    <ta-icon type="down"/>
                </ta-button>
            </ta-dropdown>
        </div><br>


        <h4>按钮尺寸</h4>
        <span>按钮有大、中、小三种尺寸。 通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。</span>
        <div>
            <ta-radio-group :value="size" @change="handleSizeChange">
                <ta-radio-button value="large">Large</ta-radio-button>
                <ta-radio-button value="default">Default</ta-radio-button>
                <ta-radio-button value="small">Small</ta-radio-button>
            </ta-radio-group>
            <br/><br/>
            <ta-button type="primary" :size="size">Primary</ta-button>
            <ta-button :size="size">Normal</ta-button>
            <ta-button type="dashed" :size="size">Dashed</ta-button>
            <ta-button type="danger" :size="size">Danger</ta-button>
            <ta-button type="warning" :size="size">Warning</ta-button>
            <ta-button type="success" :size="size">Success</ta-button>
            <br/>
            <ta-button type="primary" shape="circle" icon="download" :size="size"/>
            <ta-button type="primary" icon="upload" :size="size">Upload</ta-button>
            <br/>
            <ta-button-group :size="size">
                <ta-button type="primary">
                    <ta-icon type="left"/>
                    Backward
                </ta-button>
                <ta-button type="primary">
                    Forward
                    <ta-icon type="right"/>
                </ta-button>
            </ta-button-group>
        </div><br>

        <h4>
            block 按钮
        </h4>
        <span>block属性将使按钮适合其父宽度。</span>
        <ta-button type="primary" :block="true">Primary</ta-button>
        <ta-button :block="true">Default</ta-button>
        <ta-button type="dashed" :block="true">Dashed</ta-button>
        <ta-button type="danger" :block="true">danger</ta-button>
        <ta-button type="warning" :block="true">Warning</ta-button>
        <ta-button type="success" :block="true">Success</ta-button>
    </div>
</template>

<script>
  export default {
    name: 'testComponents',
    components: {  },
    data () {
      return {
        loading: false,
        iconLoading: false,
        size: 'large',
      }
    },
    methods: {
      enterLoading () {
        this.loading = true
      },
      enterIconLoading () {
        this.iconLoading = { delay: 1000 }
      },
      handleSizeChange (e) {
        this.size = e.target.value
      },
      handleMenuClick (e) {
        console.log('click', e)
      },
      request(){
        this.Base.submit(null,{
          url: 'test/testRequest',
          data:{
            name:'Jim'
          }
        }).then((data)=>{
          console.log(data)
        })
      }
    }
  }
</script>

<style scoped type="text/less">

    #components-button-demo-button-group h4 {
        margin: 16px 0;
        font-size: 14px;
        line-height: 1;
        font-weight: normal;
    }

    #components-button-demo-button-group h4:first-child {
        margin-top: 0;
    }

    #components-button-demo-button-group .ant-btn-group {
        margin-right: 8px;
    }
</style>

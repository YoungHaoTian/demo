<template>
    <div>
        <h2>基本结构</h2>
        <h3>典型的页面布局</h3>
        <div id="components-layout-demo-basic">
            <ta-layout>
                <ta-layout-header>Header</ta-layout-header>
                <ta-layout-content>Content</ta-layout-content>
                <ta-layout-footer>Footer</ta-layout-footer>
            </ta-layout>

            <ta-layout>
                <ta-layout-header>Header</ta-layout-header>
                <ta-layout>
                    <ta-layout-sider>Sider</ta-layout-sider>
                    <ta-layout-content>Content</ta-layout-content>
                </ta-layout>
                <ta-layout-footer>Footer</ta-layout-footer>
            </ta-layout>

            <ta-layout>
                <ta-layout-header>Header</ta-layout-header>
                <ta-layout>
                    <ta-layout-content>Content</ta-layout-content>
                    <ta-layout-sider>Sider</ta-layout-sider>
                </ta-layout>
                <ta-layout-footer>Footer</ta-layout-footer>
            </ta-layout>

            <ta-layout>
                <ta-layout-sider>Sider</ta-layout-sider>
                <ta-layout>
                    <ta-layout-header>Header</ta-layout-header>
                    <ta-layout-content>Content</ta-layout-content>
                    <ta-layout-footer>Footer</ta-layout-footer>
                </ta-layout>
            </ta-layout>
            <ta-layout>
                <ta-layout-header>Header</ta-layout-header>
                <ta-layout>
                    <ta-layout-sider>Sider</ta-layout-sider>
                    <ta-layout-content>Content</ta-layout-content>
                    <ta-layout-sider>Sider</ta-layout-sider>
                </ta-layout>
            </ta-layout>
        </div>
        <br>

        <h2>自定义触发器</h2>
        <h3>要使用自定义触发器，可以设置 :trigger="null" 来隐藏默认设定</h3>
        <ta-layout id="components-layout-demo-custom-trigger">
            <ta-layout-sider :trigger="null" collapsible v-model="collapsed">
                <div class="logo"/>
                <ta-menu theme="dark" mode="inline" :default-selected-keys="['1']">
                    <ta-menu-item key="1">
                        <ta-icon type="user"/>
                        <span>nav 1</span>
                    </ta-menu-item>
                    <ta-menu-item key="2">
                        <ta-icon type="video-camera"/>
                        <span>nav 2</span>
                    </ta-menu-item>
                    <ta-menu-item key="3">
                        <ta-icon type="upload"/>
                        <span>nav 3</span>
                    </ta-menu-item>
                </ta-menu>
            </ta-layout-sider>
            <ta-layout>
                <ta-layout-header style="background: #fff;padding: 0">
                    <ta-icon class="trigger" :type="collapsed?'menu-unfold':'menu-fold'"
                             @click="()=>collapsed=!collapsed"/>
                </ta-layout-header>
                <ta-layout-content
                        :style="{margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
                    Content
                </ta-layout-content>
            </ta-layout>
        </ta-layout>
        <br>
        <h2>顶部-侧边布局-通栏</h2>
        <h3>同样拥有顶部导航以及侧边栏，区别是两边未留下边距，多用于应用型的网站</h3>
        <ta-layout id="components-layout-demo-top-side-2">
            <ta-layout-header class="header">
                <div class="logo"/>
                <ta-menu theme="dark" mode="horizontal" :default-selected-keys="['2']" :style="{lineHeight:'64px'}">
                    <ta-menu-item key="1">nav 1</ta-menu-item>
                    <ta-menu-item key="2">nav 2</ta-menu-item>
                    <ta-menu-item key="3">nav 3</ta-menu-item>
                </ta-menu>
            </ta-layout-header>
            <ta-layout>
                <ta-layout-sider width="200" style="background: #fff">
                    <ta-menu mode="inline" :default-selected-keys="['1']" :default-open-keys="['sub1']"
                             :style="{height:'100%',borderRight:0}">
                        <ta-sub-menu key="sub1">
                            <span slot="title"><ta-icon type="user"/>sub nav 1</span>
                            <ta-menu-item key="1">option1</ta-menu-item>
                            <ta-menu-item key="2">option2</ta-menu-item>
                            <ta-menu-item key="3">option3</ta-menu-item>
                            <ta-menu-item key="4">option4</ta-menu-item>
                        </ta-sub-menu>
                        <ta-sub-menu key="sub2">
                            <span slot="title"><ta-icon type="laptop"/>sub nav 2</span>
                            <ta-menu-item key="5">option5</ta-menu-item>
                            <ta-menu-item key="6">option6</ta-menu-item>
                            <ta-menu-item key="7">option7</ta-menu-item>
                            <ta-menu-item key="8">option8</ta-menu-item>
                        </ta-sub-menu>
                        <ta-sub-menu key="sub3">
                            <span slot="title"><ta-icon type="notification"/>sub nav 3</span>
                            <ta-menu-item key="9">option9</ta-menu-item>
                            <ta-menu-item key="10">option10</ta-menu-item>
                            <ta-menu-item key="11">option11</ta-menu-item>
                            <ta-menu-item key="12">option12</ta-menu-item>
                        </ta-sub-menu>
                    </ta-menu>
                </ta-layout-sider>
                <ta-layout style="padding: 0 24px 24px">
                    <ta-breadcrumb style="margin:16px 0">
                        <ta-breadcrumb-item>Home</ta-breadcrumb-item>
                        <ta-breadcrumb-item>List</ta-breadcrumb-item>
                        <ta-breadcrumb-item>App</ta-breadcrumb-item>
                    </ta-breadcrumb>
                    <ta-layout-content :style="{background:'#fff',padding:'24px',margin:'0',minHeight:'280px'}">
                        Content
                    </ta-layout-content>
                </ta-layout>
            </ta-layout>
        </ta-layout>
        <br>
        <h2>顶部-侧边布局</h2>
        <h3>拥有顶部导航及侧边栏的页面，多用于展示类网站</h3>
        <ta-layout id="components-layout-demo-top-side">
            <ta-layout-header class="header">
                <div class="logo"/>
                <ta-menu theme="dark" mode="horizontal" :default-selected-keys="['2']" :style="{lineHeight:'64px'}">
                    <ta-menu-item key="1">nav 1</ta-menu-item>
                    <ta-menu-item key="2">nav 2</ta-menu-item>
                    <ta-menu-item key="3">nav 3</ta-menu-item>
                </ta-menu>
            </ta-layout-header>
            <ta-layout-content style="padding: 0 50px">
                <ta-breadcrumb style="margin: 16px 0">
                    <ta-breadcrumb-item>Home</ta-breadcrumb-item>
                    <ta-breadcrumb-item>List</ta-breadcrumb-item>
                    <ta-breadcrumb-item>App</ta-breadcrumb-item>
                </ta-breadcrumb>
                <ta-layout style="padding: 24px 0;background: #fff">
                    <ta-layout-sider :width="200" style="background: #fff">
                        <ta-menu mode="inline" :default-selected-keys="['1']" :default-open-keys="['sub1']"
                                 style="height: 100%">
                            <ta-sub-menu key="sub1">
                                <span slot="title"><ta-icon type="user"/>sub nav 1</span>
                                <ta-menu-item key="1">option1</ta-menu-item>
                                <ta-menu-item key="2">option2</ta-menu-item>
                                <ta-menu-item key="3">option3</ta-menu-item>
                                <ta-menu-item key="4">option4</ta-menu-item>
                            </ta-sub-menu>
                            <ta-sub-menu key="sub2">
                                <span slot="title"><ta-icon type="laptop"/>sub nav 2</span>
                                <ta-menu-item key="5">option5</ta-menu-item>
                                <ta-menu-item key="6">option6</ta-menu-item>
                                <ta-menu-item key="7">option7</ta-menu-item>
                                <ta-menu-item key="8">option8</ta-menu-item>
                            </ta-sub-menu>
                            <ta-sub-menu key="sub3">
                                <span slot="title"><ta-icon type="notification"/>sub nav 3</span>
                                <ta-menu-item key="9">option9</ta-menu-item>
                                <ta-menu-item key="10">option10</ta-menu-item>
                                <ta-menu-item key="11">option11</ta-menu-item>
                                <ta-menu-item key="12">option12</ta-menu-item>
                            </ta-sub-menu>
                        </ta-menu>
                    </ta-layout-sider>
                    <ta-layout-content :style="{padding:'0 24px',minHeight:'280px'}">
                        Content
                    </ta-layout-content>
                </ta-layout>
            </ta-layout-content>
            <ta-layout-footer style="text-align: center">
                Footer
            </ta-layout-footer>
        </ta-layout>
        <br>

        <h2>上中下布局</h2>
        <h3>
            最基本的“上-中-下”布局。一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）<br>
            通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响<br>
            上下级的结构符合用户上下浏览的习惯，也是较为经典的导航模式。<br>
            页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一点牺牲。<br>
            此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构
        </h3>
        <ta-layout id="components-layout-demo-top" class="layout">
            <ta-layout-header>
                <div class="logo"/>
                <ta-menu theme="dark" mode="horizontal" :default-selected-keys="['2']" :style="{lineHeight:'64px'}">
                    <ta-menu-item key="1">nav 1</ta-menu-item>
                    <ta-menu-item key="2">nav 2</ta-menu-item>
                    <ta-menu-item key="3">nav 3</ta-menu-item>
                </ta-menu>
            </ta-layout-header>
            <ta-layout-content style="padding:0 50px">
                <ta-breadcrumb style="margin: 16px 0">
                    <ta-breadcrumb-item>Home</ta-breadcrumb-item>
                    <ta-breadcrumb-item>List</ta-breadcrumb-item>
                    <ta-breadcrumb-item>App</ta-breadcrumb-item>
                </ta-breadcrumb>
                <div :style="{background:'#fff',padding:'24px',minHeight:'280px'}">Content</div>
            </ta-layout-content>
            <ta-layout-footer style="text-align: center">
                Footer
            </ta-layout-footer>
        </ta-layout>

        <h2>响应式布局</h2>
        <h3>
            Layout.Sider支持响应式布局。<br>
            说明：配置breakpoint属性即可生效，视窗宽度小于breakpoint时，Sider缩小为collapsedWidth宽度<br>
            若将collapsedWidth设置为0，会出现特殊的trigger（sider展开或者折叠的按钮）
        </h3>
        <ta-layout id="components-layout-demo-responsive">
            <!--collapse：展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发
            breakpoint: 触发响应式布局的断点（可以理解为打破了这个临界点）窗口宽度大于(未打破，返回false)或小于(打破，返回true)该属性值时会触发breakpoint事件，并回调对应的函数-->
            <ta-layout-sider breakpoint="lg" collapsed-width="0" @collapse="onCollapse" @breakpoint="onBreakpoint">
                <div class="logo"/>
                <ta-menu theme="dark" mode="inline" :default-selected-keys="['4']">
                    <ta-menu-item key="1">
                        <ta-icon type="user"/>
                        <span class="nav-text">nav 1</span>
                    </ta-menu-item>
                    <ta-menu-item key="2">
                        <ta-icon type="video-camera"/>
                        <span class="nav-text">nav 2</span>
                    </ta-menu-item>
                    <ta-menu-item key="3">
                        <ta-icon type="upload"/>
                        <span class="nav-text">nav 3</span>
                    </ta-menu-item>
                    <ta-menu-item key="4">
                        <ta-icon type="user"/>
                        <span class="nav-text">nav 4</span>
                    </ta-menu-item>
                </ta-menu>
            </ta-layout-sider>
            <ta-layout>
                <ta-layout-header :style="{background:'#fff',padding:0}"/>
                <ta-layout-content :style="{margin:'24px 16px 0'}">
                    <div :style="{padding:'24px',background:'#fff',minHeight:'360px'}">
                        content
                    </div>
                </ta-layout-content>
                <ta-layout-footer style="textAlign: center">
                    Footer
                </ta-layout-footer>
            </ta-layout>
        </ta-layout>
        <br>
        <h2>固定侧边栏</h2>
        <h3>当内容较长时，使用固定侧边栏可以提更好的体验</h3>
        <!--        <div class="layui-side layui-bg-black"/>-->
        <ta-layout id="components-layout-demo-fixed-sider">
            <ta-layout-sider :style="{ position: 'fixed',overflow: 'auto', height: '100vh', left: '0'/*,bottom:'0'*/}">
                <div class="logo"></div>
                <ta-menu theme="dark" mode="inline" :defaultSelectedKeys="['4']">
                    <ta-menu-item key="1">
                        <ta-icon type="user"/>
                        <span class="nav-text">nav 1</span>
                    </ta-menu-item>
                    <ta-menu-item key="2">
                        <ta-icon type="video-camera"/>
                        <span class="nav-text">nav 2</span>
                    </ta-menu-item>
                    <ta-menu-item key="3">
                        <ta-icon type="upload"/>
                        <span class="nav-text">nav 3</span>
                    </ta-menu-item>
                    <ta-menu-item key="4">
                        <ta-icon type="bar-chart"/>
                        <span class="nav-text">nav 4</span>
                    </ta-menu-item>
                    <ta-menu-item key="5">
                        <ta-icon type="cloud-o"/>
                        <span class="nav-text">nav 5</span>
                    </ta-menu-item>
                    <ta-menu-item key="6">
                        <ta-icon type="appstore-o"/>
                        <span class="nav-text">nav 6</span>
                    </ta-menu-item>
                    <ta-menu-item key="7">
                        <ta-icon type="team"/>
                        <span class="nav-text">nav 7</span>
                    </ta-menu-item>
                    <ta-menu-item key="8">
                        <ta-icon type="shop"/>
                        <span class="nav-text">nav 8</span>
                    </ta-menu-item>
                </ta-menu>
            </ta-layout-sider>
            <ta-layout :style="{ marginLeft: '200px' }">
                <ta-layout-header :style="{ background: '#fff', padding: 0 }"/>
                <ta-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
                    <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
                        ...
                        <br/>
                        Really
                        <br/>...<br/>...<br/>...<br/>
                        long
                        <br/>...<br/>...<br/>...<br/>...<br/>...<br/>...
                        <br/>...<br/>...<br/>...<br/>...<br/>...<br/>...
                        <br/>...<br/>...<br/>...<br/>...<br/>...<br/>...
                        <br/>...<br/>...<br/>...<br/>...<br/>...<br/>...
                        <br/>...<br/>...<br/>...<br/>...<br/>...<br/>...
                        <br/>...<br/>...<br/>...<br/>...<br/>...<br/>...
                        <br/>...<br/>...<br/>...<br/>...<br/>...<br/>
                        content
                    </div>
                </ta-layout-content>
                <ta-layout-footer :style="{ textAlign: 'center' }">
                    Ant Design ©2018 Created by Ant UED
                </ta-layout-footer>
            </ta-layout>
        </ta-layout>
        <br>
        <h2>固定头部</h2>
        <h4>一般用于固定顶部导航，方便页面切换</h4>
        <ta-layout id="components-layout-demo-fixed">
            <!--固定顶部导航栏的核心代码-->
            <ta-layout-header :style="{position:'fixed',zIndex:1,width:'100%'/*,top:0,left:0*/}">
                <div class="logo"/>
                <ta-menu theme="dark" mode="horizontal" :defaultSelectedKeys="['2']" :style="{ lineHeight: '64px' }">
                    <ta-menu-item key="1">nav 1</ta-menu-item>
                    <ta-menu-item key="2">nav 2</ta-menu-item>
                    <ta-menu-item key="3">nav 3</ta-menu-item>
                </ta-menu>
            </ta-layout-header>
            <ta-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
                <ta-breadcrumb :style="{ margin: '16px 0' }">
                    <ta-breadcrumb-item>Home</ta-breadcrumb-item>
                    <ta-breadcrumb-item>List</ta-breadcrumb-item>
                    <ta-breadcrumb-item>App</ta-breadcrumb-item>
                </ta-breadcrumb>
                <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">Content</div>
            </ta-layout-content>
            <ta-layout-footer :style="{ textAlign: 'center' }">
                Ant Design ©2018 Created by Ant UED
            </ta-layout-footer>
        </ta-layout>
        <br>

        <h2>侧边布局</h2>
        <h3>
            侧边两列式布局。页面横向空间有限时，侧边导航可以收起来。侧边导航在页面布局上采用的时左右的结构，<br>
            一般主导航放置于页面的左侧固定位置，辅助菜单放置于工作区顶部。内容根据浏览器终端进行自适应，能提高<br>
            横向空间大的使用率，但是整个页面排版不稳定。侧边导航的模式层级扩展性强，一、二、三级导航项目可以更<br>
            为顺畅且具有关联性的被展示，同时侧边导航可以固定，使得用户在操作和浏览中可以快速的定位和切换当前位置<br>
            有很高的操作效率。但这类导航横向页面内容的空间会被牺牲一部分
        </h3>
        <ta-layout id="components-layout-demo-side" style="min-height: 100vh">
            <ta-layout-sider :trigger="null" collapsible v-model="collapsed">
                <div class="logo"/>
                <ta-menu theme="dark" :default-selected-keys="['1']" mode="inline">
                    <ta-menu-item key="1">
                        <ta-icon type="pie-chart"/>
                        <span>Option 1</span>
                    </ta-menu-item>
                    <ta-menu-item key="2">
                        <ta-icon type="desktop"/>
                        <span>Option 2</span>
                    </ta-menu-item>
                    <ta-sub-menu key="sub1">
                        <span slot="title"><ta-icon type="user"/><span>User</span></span>
                        <ta-menu-item key="3">Tom</ta-menu-item>
                        <ta-menu-item key="4">Bill</ta-menu-item>
                        <ta-menu-item key="5">Alex</ta-menu-item>
                    </ta-sub-menu>
                    <ta-sub-menu key="sub2">
                        <span slot="title"><ta-icon type="team"/><span>Team</span></span>
                        <ta-menu-item key="6">Team 1</ta-menu-item>
                        <ta-menu-item key="8">Team 2</ta-menu-item>
                    </ta-sub-menu>
                    <ta-menu-item key="9">
                        <ta-icon type="file"/>
                        <span>File</span>
                    </ta-menu-item>
                </ta-menu>
            </ta-layout-sider>
            <ta-layout>
                <ta-layout-header style="background: #fff;padding:0">
                    <ta-icon class="trigger" :type="collapsed?'menu-unfold':'menu-fold'"
                             @click="()=>collapsed=!collapsed"/>
<!--                    <ta-icon class="trigger" :type="collapsed?'menu-unfold':'menu-fold'" @click="collapsed=!collapsed"/>-->
                </ta-layout-header>
                <ta-layout-content style="margin: 0 16px">
                    <ta-breadcrumb style="margin: 16px 0">
                        <ta-breadcrumb-item>User</ta-breadcrumb-item>
                        <ta-breadcrumb-item>Bill</ta-breadcrumb-item>
                    </ta-breadcrumb>
                    <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
                        Bill is a cat.
                    </div>
                </ta-layout-content>
                <ta-layout-footer style="text-align: center">
                    Footer
                </ta-layout-footer>
            </ta-layout>
        </ta-layout>
    </div>
</template>

<script>
  export default {
    name: 'testLayout',
    data () {
      return {
        collapsed: false,
      }
    },
    methods: {
      onCollapse (collapsed, type) {
        console.log('onCollapse', collapsed, type)
      },
      onBreakpoint (broken) {
        console.log('onBreakpoint', broken)
      }
    }
  }
</script>

<style scoped>
    #components-layout-demo-basic {
        text-align: center;
    }

    #components-layout-demo-basic .ant-layout-header,
    #components-layout-demo-basic .ant-layout-footer {
        background: #7dbcea;
        color: #fff;
    }

    #components-layout-demo-basic .ant-layout-footer {
        line-height: 1.5;
    }

    #components-layout-demo-basic .ant-layout-sider {
        background: #3ba0e9;
        color: #fff;
        line-height: 120px;
    }

    #components-layout-demo-basic .ant-layout-content {
        background: rgba(16, 142, 233, 1);
        color: #fff;
        min-height: 120px;
        line-height: 120px;
    }

    #components-layout-demo-basic > .ant-layout {
        margin-bottom: 48px;
    }

    #components-layout-demo-basic > .ant-layout:last-child {
        margin: 0;
    }

    #components-layout-demo-custom-trigger .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color .3s;
    }

    #components-layout-demo-custom-trigger .trigger:hover {
        color: #1890ff;
    }

    #components-layout-demo-custom-trigger .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
    }

    #components-layout-demo-top-side-2 .logo {
        width: 120px;
        height: 31px;
        background: rgba(255, 255, 255, .2);
        margin: 16px 28px 16px 0;
        float: left;
    }

    #components-layout-demo-top-side .logo {
        width: 120px;
        height: 31px;
        background: rgba(255, 255, 255, .2);
        margin: 16px 28px 16px 0;
        float: left;
    }

    #components-layout-demo-top .logo {
        width: 120px;
        height: 31px;
        background: rgba(255, 255, 255, .2);
        margin: 16px 24px 16px 0;
        float: left;
    }

    #components-layout-demo-responsive .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
    }

    #components-layout-demo-fixed-sider .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
    }

    .layui-side {
        position: fixed;
        width: 200px;
        top: 0;
        bottom: 0;
        background-color: #393D49;
    }

    #components-layout-demo-fixed .logo {
        width: 120px;
        height: 31px;
        background: rgba(255, 255, 255, .2);
        margin: 16px 24px 16px 0;
        float: left;
    }

    #components-layout-demo-side .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
    }
    #components-layout-demo-side .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color .3s;
    }
</style>
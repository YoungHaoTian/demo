// 导出该模块路由
export default [
  {
    title: '测试各种组件',
    name: 'testComponents',
    path: 'testComponents',
    component: () => import('./testComponents.vue')
  },
  {
    title: '测试Button组件',
    name: 'testButton',
    path: 'testButton',
    component: () => import('./testButton.vue')
  },
  {
    title: '测试Icon组件',
    name: 'testIcon',
    path: 'testIcon',
    component: () => import('./testIcon.vue')
  },
  {
    title: '测试BorderLayout组件',
    name: 'testBorderLayout',
    path: 'testBorderLayout',
    component: () => import('./testBorderLayout.vue')
  },
  {
    title: '测试Grid栅格组件',
    name: 'testGrid',
    path: 'testGrid',
    component: () => import('./testGrid.vue')
  },
  {
    title: '测试Layout组件',
    name: 'testLayout',
    path: 'testLayout',
    component: () => import('./testLayout.vue')
  },
  {
    title: '测试Affix组件',
    name: 'testAffix',
    path: 'testAffix',
    component: () => import('./testAffix.vue')
  },
  {
    title: '测试Table组件',
    name: 'testTable',
    path: 'testTable',
    component: () => import('./testTable.vue')
  }, {
    title: '测试TableEdit组件',
    name: 'testTableEdit',
    path: 'testTableEdit',
    component: () => import('./testTableEdit.vue')
  }, {
    title: '测试其他组件',
    name: 'testComponent',
    path: 'testComponent',
    component: () => import('./testComponent.vue')
  }
]

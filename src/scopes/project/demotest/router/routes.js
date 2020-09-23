import routesContainer from '@/common/components/routesContainer'

//模块part 声明导入
import modulePart from '../modulePart/ta404_pratice/routes'
import testComponents from '../modulePart/testComponents/routes'

const innerRoutes = [
  ...modulePart, ...testComponents
]
//导入路由声明
export default [
  {
    path: '/',
    component: routesContainer,
    children: innerRoutes.map((item) => ({
      ...item,
    })),
  },
]



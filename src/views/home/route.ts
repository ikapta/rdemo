import Home from './home'
import { RouteMap } from '../router'

const router: RouteMap[] = [
  {
    path: '/home',
    component: Home,
    metaName: '首页',
    metaAuth: true,
  }
]

export default router

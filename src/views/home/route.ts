import { lazy } from 'react'
import { RouteMap } from '../router'

const Home = lazy(() => import(/* webpackChunkName: "combine" */ './home'))

const router: RouteMap[] = [
  {
    path: '/home',
    component: Home,
    metaName: '首页',
    metaAuth: true,
  }
]

export default router

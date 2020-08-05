import { lazy } from 'react'
import { RouteProps } from 'react-router-dom'

const Dashboard = lazy(() => import(/* webpackChunkName: "combine" */ './dashboard'))
const Nav = lazy(() => import(/* webpackChunkName: "combine" */ './nav'))


const router: RouteProps[] = [
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/nav/:tid',
    component: Nav
  }
]

export default router

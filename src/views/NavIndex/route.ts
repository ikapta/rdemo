import Nav from './nav'
import Dashboard from './dashboard'
import { RouteProps } from 'react-router-dom'

const router: RouteProps[] = [
  {
    path: '/',
    component: Dashboard
  },
  {
    path: '/nav',
    component: Nav
  }
]

export default router

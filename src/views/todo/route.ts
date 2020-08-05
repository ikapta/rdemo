
import { lazy } from 'react'
import { RouteMap } from '../router'

const Todo = lazy(() => import('./todo'))


const router: RouteMap[] = [
  {
    path: '/todo',
    component: Todo,
    metaName: '待做',
    metaAuth: false,
  }
]

export default router

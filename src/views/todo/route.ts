import Todo from './todo'
import { RouteMap } from '../router'

const router: RouteMap[] = [
  {
    path: '/todo',
    component: Todo,
    metaName: '待做',
    metaAuth: false,
  }
]

export default router

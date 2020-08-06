import Table from './table'
import { RouteMap } from '../router'

const router: RouteMap[] = [
  {
    path: '/table3',
    component: Table,
    metaName: '表格',
    metaAuth: false,
  }
]

export default router

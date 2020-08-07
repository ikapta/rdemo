
import { RouteMap } from '../router'
import SetTimeOut from './settimeout'

const router: RouteMap[] = [
  {
    path: '/timeout',
    component: SetTimeOut,
    metaName: 'timeout',
    metaAuth: false,
  }
]

export default router

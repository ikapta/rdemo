import { RouteProps } from 'react-router-dom'
import HomeRoute from './home/route'
import NavIndex from './NavIndex/route'

const router: RouteProps[] = [
  ...HomeRoute,
  ...NavIndex
]

export default router

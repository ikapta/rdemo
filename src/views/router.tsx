import React, { Suspense, lazy } from 'react'
import { Route, Redirect, RouteProps, BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { useSelector} from "react-redux"
import HomeRoute from './home/route'
import NavIndex from './NavIndex/route'
import Login from '../login'
import Todo from './todo/route'
import Table from './table/route'
import Table2 from './table2/route'
import Table3 from './table3/route'
import Table4 from './table4/route'
import Hooks from './hooks/route'
import ErrorBoundary from '../components/ErrorBoundary/index'

export interface RouteMap extends RouteProps {
  metaName?: String
  metaAuth?: Boolean
}

const routers: RouteMap[] = [
  ...HomeRoute,
  ...NavIndex,
  ...Todo,
  ...Table,
  ...Table2,
  ...Table3,
  ...Table4,
  ...Hooks
]

const NotFound = () => {
  const isAuth = useSelector((state: any) => state.gb.isAuth)
  return (
    <div>
      not fount
      <br />isAuth: {isAuth.toString()}
    </div>
  )
}

function PrivateRoute (props: RouteMap) {
  const isAuth = useSelector((state: any) => state.gb.isAuth)
  const Comp = props.component ?  props.component : () => (<div>empty component</div>)
  return (
    <div>
      <Route
        path={props.path}
        render={(routeProps) =>{
          return isAuth || !props.metaAuth ? (
            <Comp {...routeProps}></Comp>
            ) : (
            <Redirect to={{ pathname: "/login", state: { from: routeProps.location } }} />
            )
          }
        }
      />
    </div>
  )
}

const BaseRouter: React.FC = () => {
  console.log(routers.length)

  const history = createBrowserHistory()

  history.listen((location) => {
    const path = location.pathname.substr(1)
    console.log('history path: ', path)
  })

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <BrowserRouter>

          <Route path='/' component={NotFound}></Route>
          {/* { routers.map((router, index) => <Route key={index} {...router} /> )} */}

          { routers.map((router, index) => <PrivateRoute key={index} {...router} />)}

          <Route path='/login' component={Login}></Route>

        </BrowserRouter>
      </ErrorBoundary>
     </Suspense>
  )
}


export const MainRouters = routers
export default BaseRouter

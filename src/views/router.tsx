import React from 'react'
import { Route, Redirect, RouteProps, BrowserRouter } from 'react-router-dom'
import HomeRoute from './home/route'
import NavIndex from './NavIndex/route'
import Login from '../login'

export interface RouteMap extends RouteProps {
  metaName?: String
  metaAuth?: Boolean
}

const routers: RouteMap[] = [
  ...HomeRoute,
  ...NavIndex
]
const NotFound = () => (<div>not fount</div>)

function PrivateRoute (props: RouteMap) {
  const Comp = props.component ?  props.component : () => (<div>empty component</div>)
  return (
    <div>
      <Route
        path={props.path}
        render={(routeProps) =>{
          return window.isAuth || !props.metaAuth ? (
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
  return (
    <BrowserRouter>

      {/* <Route path='/' component={Container}></Route> */}
      {/* { routers.map((router, index) => <Route key={index} {...router} /> )} */}

      { routers.map((router, index) => <PrivateRoute key={index} {...router} />)}

      <Route path='/login' component={Login}></Route>

    </BrowserRouter>
  )
}


export const MainRouters = routers
export default BaseRouter

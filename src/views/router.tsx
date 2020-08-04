import React from 'react'
import { Route, Redirect, RouteProps, BrowserRouter } from 'react-router-dom'
import { useSelector} from "react-redux"
import HomeRoute from './home/route'
import NavIndex from './NavIndex/route'
import Login from '../login'
import Todo from './todo/route'
import Table from './table/route'


export interface RouteMap extends RouteProps {
  metaName?: String
  metaAuth?: Boolean
}

const routers: RouteMap[] = [
  ...HomeRoute,
  ...NavIndex,
  ...Todo,
  ...Table
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

  return (
    <BrowserRouter>

      <Route path='/' component={NotFound}></Route>
      {/* { routers.map((router, index) => <Route key={index} {...router} /> )} */}

      { routers.map((router, index) => <PrivateRoute key={index} {...router} />)}

      <Route path='/login' component={Login}></Route>

    </BrowserRouter>
  )
}


export const MainRouters = routers
export default BaseRouter

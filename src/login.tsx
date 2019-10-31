import React from 'react'
import { Button } from "antd"
import { connect, useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { setAuthAction } from '../src/redux/reducers/gb'

const Login: React.FC = (props: any) =>{
  let history = useHistory()

  console.log(props)
  const isAuth = useSelector((state: any) => state.gb.isAuth)
  const dispatch = useDispatch()


  const routeChange = () => {
    window.isAuth = true
    console.log(isAuth)
    dispatch(setAuthAction(true))
    console.log(isAuth)
    history.push('/home')
  }
  // @ts-ignore
  return (
    <div>
      <h3>LOGIN PAGE</h3>
      <Button onClick={routeChange}>home</Button>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return { isAuth: state.gb.isAuth }
}

export default connect(mapStateToProps)(Login)

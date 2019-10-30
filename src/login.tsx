import React from 'react'
import { Button } from "antd"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"

const Login: React.FC = () =>{
  let history = useHistory()

  const routeChange = () => {
    window.isAuth = true

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
export default Login

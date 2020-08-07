import React, { useState, useCallback } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Button } from 'antd'
import ReactDOM from 'react-dom'
interface IProps extends RouteComponentProps {}


// const hooke: React.FC<IProps> =  (props) => {
  const HookComponent: React.FC<IProps> = (props) => {

  console.log('entry')

  return (
  <div>
    <p>
      <h3> useCallback + useEffect 都是缓存组件</h3>
    </p>
    <div>
    </div>
  </div>
  )
}

export default HookComponent

import React, { useState, useCallback } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Button } from 'antd'
import ReactDOM from 'react-dom'
interface IProps extends RouteComponentProps {}


// const hooke: React.FC<IProps> =  (props) => {
  const HookComponent: React.FC<IProps> = (props) => {

  console.log('entry')
  const [alpha, setAlpha] = useState('alpha')
  const [num, setNum] = useState(0)

  const handleClick = () => {
    setTimeout(_ => {
      setAlpha('b' + new Date())
      setNum(n => n + 1)
    }, 1000)
  }

  // 使用useCallback 来缓存住函数的引用，防止多次渲染组件
  const handleClickMemorized = useCallback(() =>
      setTimeout(_ => {
        setAlpha('b' + new Date())
        setNum(n => n + 1)
      }, 1000)
  , [])

  // 只会render一次
  const handleClickMemorizedCached = useCallback(() =>
      setTimeout(_ => {
        ReactDOM.unstable_batchedUpdates(() => {
          setAlpha('b' + new Date())
          setNum(n => n + 1)
        })
      }, 1000)
  , [])

  console.log(alpha, num)

  return (
  <div>
    <p>
      <h3>promise 、setTimeout 多次setState 触发虚拟DOM多次重新渲染;</h3>
      <p>
        由于异步的回调函数不是在React render 上下文中执行，所以会失去批量设置、一次执行的能力。这样在回调函数中的每次setState都会触发一次重新计算。
        解决：ReactDOM.unstable_batchedUpdates
      </p>

    </p>
    {alpha} - {num}
    <p></p>
    <Button onClick={handleClick}>unmemorized</Button>
    <Button onClick={handleClickMemorized}>memorized</Button>
    <Button onClick={handleClickMemorizedCached}>batchSet组件缓存</Button>
  </div>
  )
}

export default HookComponent

import React from 'react'
import { Rate, Divider } from 'antd';
import { RouteComponentProps } from 'react-router-dom'

interface IProps extends RouteComponentProps {
  title:string
  desc: string
}

const Tester : React.FC<IProps> = (props) => {

  console.count('testerMemo')
  const { title, desc } = props

  return (<>
    <Divider dashed />
    我被memo了，只走一次
    {title} : {desc}
    <Rate defaultValue={3} />
    <Rate defaultValue={3} />
    <Rate defaultValue={3} />
    <Divider dashed />
  </>)
}

function areEqual(prevProps: IProps, nextProps: IProps) : boolean {
  /*
  如果把 nextProps 传入 render 方法的返回结果与
  将 prevProps 传入 render 方法的返回结果一致则返回 true，
  否则返回 false
  */
 return true
}
export default React.memo(Tester, areEqual)

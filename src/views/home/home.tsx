import React, { useState, useEffect } from 'react'
import { Button, message, Modal } from "antd"


  const Item = ( props: any ) => {
    return   <li> { props.content } </li>
  }

  const HookComponent: React.FC<{ history: any }> = ({ history }) => {


    let [modalVisible, setModalVisible] = useState(false)

    function handleModalOk () {
      setModalVisible(true)
    }
    function handleModalCancel () {
      setModalVisible(false)
    }
    // console.log( count , setCount )
    const routeChange = () => {
      history.push('/nav', {id: 113})
    }

    useEffect ( () => {
      //执行副作用的函数
      document.title = 'ddd'
    })

    const alertX = () => {
      message.success('this is a success')
      handleModalOk()
    }

    return (
      <div>
        hook
        <Button onClick={routeChange}>nav页</Button>
        <Button onClick={alertX}>alert</Button>

        <Modal
          title="Basic Modal"
          visible={modalVisible}
          onOk={handleModalOk}
          onCancel={handleModalCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>




      </div>
    )
  }


  export default HookComponent

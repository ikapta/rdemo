import React, { useState, useEffect } from 'react'
import { Button, message, Modal } from "antd"
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"


  const HookComponent: React.FC<{ history: any }> = (home) => {

    let [modalVisible, setModalVisible] = useState(false)
    let history = useHistory()
    const isAuth = useSelector((state: any) => state.gb.isAuth)
    console.log(isAuth)
    function handleModalOk () {
      setModalVisible(true)
    }
    function handleModalCancel () {
      setModalVisible(false)
    }
    // console.log( count , setCount )
    const routeChange = () => {
      history.push(`/nav/${22}?q=xxx`, {tid: 113})
    }

    useEffect ( () => {
      //执行副作用的函数
      console.log('home', home)
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

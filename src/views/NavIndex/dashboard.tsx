import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Mentions, Spin } from "antd"

const App: React.FC = () => {

  let [show,  setShow] = useState(false)
  let [gitUsers, setGitUsers] = useState([])
  let [loading, setLoading] = useState(false)
  let [pageLoading, setPageLoading] = useState(false)

  const onSearch = (key: String) => {
    setLoading(true)
    fetch(`https://api.github.com/search/users?q=${key}`)
      .then(res => res.json())
      .then(({ items = [] }) => {
        setGitUsers(items.slice(0, 10))
        setLoading(false)
      })
  }

  const handleShowClick = () => {
    setPageLoading(!pageLoading)
  }



  useEffect(() => {
    document.title = `you can see ${show}`
  })

  return (
    <div className="App" >

      <Spin tip="loading" spinning={pageLoading}  >
          dashboard

          <Button type="primary" onClick={_ => {
            setShow(!show)
          }} >Button</Button>

      </Spin>
      <Button onClick={handleShowClick}>
        {pageLoading ? '点一下取消loading' : '点一下loading'}
      </Button>
        <hr/>
      <Link to="/home">首页</Link>

      <Icon type="down-circle" theme="twoTone" />

      <p> you can see title change: {show.toString()} </p>
      <hr/>
      <Mentions style={{ width: '100%' }} loading={loading} onSearch={onSearch}>
        {gitUsers.map(({ login, avatar_url: avatar }) => (
          <Mentions.Option key={login} value={login} className="antd-demo-dynamic-option">
            <img src={avatar} alt={login} />
            <span>{login}</span>
          </Mentions.Option>
        ))}
      </Mentions>


    </div>
  )
}

export default App

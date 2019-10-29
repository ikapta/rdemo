import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Index from "./views/index"

// url 同步
const history = require('history').createBrowserHistory()

history.listen((location: any, action: any) => {
  // /print => print
  const path = location.pathname.substr(1)
  debugger
  console.log(path)
})


const App = () => (
  <BrowserRouter>
    <Index />
  </BrowserRouter>
)

export default App

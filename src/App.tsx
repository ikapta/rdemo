import React from 'react'
import MainRouter from "./views/router"
import store from './redux/store';
import { Provider } from 'react-redux'


const App: React.FC = (x) => {
  return (
    <Provider store={store}>
      <div>
        <h3>header </h3>
        <MainRouter></MainRouter>
      </div>
    </Provider>
  )
}


export default App

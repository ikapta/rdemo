import React from 'react'
import { Route } from 'react-router-dom'

import routers from './router'

const Index: React.FC = () => (
  <div className="app-cpntainer">
    <h3>hello world</h3>

    { routers.map((router, index) => <Route key={index} {...router} />) }
  </div>
)

export default Index

import React from 'react';
import routers from '../router'
import { Link } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div className="App">

    <ul>
      { routers.map((router, index) => {
        return (
            <li key={index}>
              <Link to={`${router.path}`}>
                点击路由{index} -{router.path}
              </Link>
            </li>
        )
      }) }
    </ul>
    </div>
  );
}

export default App;

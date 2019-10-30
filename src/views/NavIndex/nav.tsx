import React, { useEffect } from 'react';
import { MainRouters } from '../router'
import { Link, useHistory, useRouteMatch, useLocation, useParams } from 'react-router-dom'

const App: React.FC<{match: any, history: any}> = ({ match, history }) => {

  console.log(useRouteMatch('/nav/:tid'))
  console.log(useParams())
  let { tid } = useParams()
  console.log('tid:', tid)
  let history2 = useHistory()
  console.log('history2:', history2)
  let location = useLocation()

  useEffect(() => {
    console.log(history)
    console.log(match)
    let query = new URLSearchParams(location.search)
    console.log('q:', query.get('q'))
  })
  return (
    <div className="App">
      nav
    <ul>
      { MainRouters.map((router, index) => {
        return (
            <li key={index}>
              <Link to={`${router.path}`}>
                点击路由{index} -{router.path} [{router.metaName || '无'}]
              </Link>
            </li>
        )
      }) }
    </ul>
    </div>
  );
}

export default App;

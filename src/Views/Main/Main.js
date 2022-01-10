import React, { Suspense, useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {publicRoutes} from '../../Routes'
import './Main.scss';

import {Grow} from './Loaders'

const Main = () => {

  const getRoutes = (publicRoutes) => {
    var routes = []
    // some code for private routes
    publicRoutes.forEach((route, i) => {
      routes.push(route)
    });
    return routes
  }

  const [routes, setRoutes] = useState(getRoutes(publicRoutes))

  return (
    <Router>
      <Suspense fallback={<Grow />}>
        <Routes>
          {routes &&
            routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={<route.component/>}
              />
          ))}
        </Routes>
      </Suspense>
    </Router>
  )
}

export default Main
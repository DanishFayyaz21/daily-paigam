import React, { Suspense, useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {publicRoutes, privateRoutes} from '../../Routes'
import './Main.scss';

import {Grow} from './Loaders'

const Main = () => {

  const getRoutes = (publicRoutes, privateRoutes) => {
    var routes = []
    // some code for private routes
    publicRoutes.forEach((route, i) => {
      routes.push(route)
    });
    if (true) {
      privateRoutes.forEach((route, i) => {
        routes.push(route)
      });
    }
    return routes
  }

  const [routes, setRoutes] = useState(getRoutes(publicRoutes, privateRoutes))

  return (
    <Router>
      <Suspense fallback={<Grow color="var(--orange)" />}>
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

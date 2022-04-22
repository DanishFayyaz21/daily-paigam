import React, { Suspense, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { publicRoutes, privateRoutes } from "../../Routes";
import { Auth } from "../../Context/auth";

import { Grow } from "./Loaders";
import ScrollToTop from "../../Components/ScrollToTop";
import "./Main.scss";

const Header = React.lazy(() => import("../../Components/Header"));
const Footer = React.lazy(() => import("../../Components/Footer"));

const Main = () => {
  const { isAuthenticated } = Auth();

  const getRoutes = (publicRoutes, privateRoutes) => {
    var routes = [];
    publicRoutes.forEach((route, i) => {
      routes.push(route);
    });
    // some code for private routes
    if (isAuthenticated) {
      privateRoutes.forEach((route, i) => {
        routes.push(route);

        headerDisplayValidation(route);
      });
    } else {
      privateRoutes.forEach((route, i) => {
        route.redirect = true;
        route.redirectTo = "/";
        routes.push(route);

        headerDisplayValidation(route);
      });
    }
    return routes;
  };

  const headerDisplayValidation = (route) => {
    if (route.path == window.location.pathname) {
      if (route.showHeader) {
      }
    }
  };

  const [routes, setRoutes] = useState(getRoutes(publicRoutes, privateRoutes));

  return (
    <Router>
      <Suspense fallback={<Grow color="var(--orange)" />}>
        <ScrollToTop />
        <Routes>
          {routes &&
            routes.map((route, index) =>
              route.redirect ? (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  element={<Navigate to={route.redirectTo} />}
                />
              ) : (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  element={
                    <>
                      {route.showHeader && <Header />}
                      <route.component /> {route.showFooter && <Footer />}
                    </>
                  }
                />
              )
            )}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Main;

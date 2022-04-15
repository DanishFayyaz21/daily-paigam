import { lazy } from "react";

const Home = lazy(() => import("../Views/Home/Home"));
const Template = lazy(() => import("../Views/Template/Template"));
const Auth = lazy(() => import("../Views/Auth/Auth"));
const WAC = lazy(() => import("../Views/WAC/WAC"));

const publicRoutes = [
  {
    path: "/",
    exact: true,
    name: "Home",
    component: Home,
    showHeader: true,
    showFooter: true,
    // redirect: true,
    // redirectTo: "/wac",
  },
  // Auth Routes
  {
    path: "/auth",
    exact: true,
    name: "Auth",
    component: Auth,
    showHeader: false,
    showFooter: false,
  },

  // WAC Routes
  // {
  //   path: "/wac",
  //   exact: true,
  //   name: "wac",
  //   component: WAC,
  //   showHeader: false,
  //   showFooter: false,
  // },
];

export { publicRoutes };

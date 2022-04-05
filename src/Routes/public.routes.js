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
];

export { publicRoutes };

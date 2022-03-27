import { lazy } from "react";

const Template = lazy(() => import("../Views/Template/Template"));
// Auth
const Auth = lazy(() => import("../Views/Auth/Auth"));
// WAC Routes
const WAC = lazy(() => import("../Views/WAC/WAC"));

const publicRoutes = [
  {
    path: "/",
    exact: true,
    name: "Home",
    component: WAC,
    redirect: true,
    redirectTo: "/wac",
  },
  {
    path: "/template",
    exact: true,
    name: "Template",
    component: Template,
  },
  // Auth Routes
  {
    path: "/auth",
    exact: true,
    name: "Auth",
    component: Auth,
  },
  // WAC Routes
  {
    path: "/wac",
    exact: true,
    name: "WAC",
    component: WAC,
  },
];

export { publicRoutes };

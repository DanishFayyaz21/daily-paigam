import { lazy } from "react";

const Home = lazy(() => import("../Views/Home/Home"));
const Post = lazy(() => import("../Views/Post/Post"));

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
  {
    path: "/website-activity-checker",
    exact: true,
    name: "wac",
    component: WAC,
    showHeader: false,
    showFooter: false,
  },

  // Post Routes
  {
    path: "/:slug",
    exact: true,
    name: "Post",
    component: Post,
    showHeader: true,
    showFooter: true,
    // redirect: true,
    // redirectTo: "/wac",
  },
];

export { publicRoutes };

import { lazy } from "react";

import { GoHome, GoSettings } from "react-icons/go";

const Dashboard = lazy(() => import("../Views/Dashboard"));

const privateRoutes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    path: "/dashboard",
    icon: <GoHome />,
    component: Dashboard,
    noCollapse: true,
    showInSidenav: true,
    showHeader: false,
    showFooter: false,
  },
  {
    type: "collapse",
    name: "Settings",
    key: "settings",
    route: "/settings",
    path: "/settings",
    icon: <GoSettings />,
    component: Dashboard,
    noCollapse: true,
    showInSidenav: true,
    showHeader: false,
    showFooter: false,
  },
];

export { privateRoutes };

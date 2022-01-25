import { lazy } from 'react'

const Auth = lazy(() => import('../Views/Auth/Auth'))
const Template = lazy(() => import('../Views/Template/Template'))
// WAC Routes
const WAC = lazy(() => import('../Views/WAC/WAC'))
const WacSetup = lazy(() => import('../Views/WAC/Setup/Setup'))

const publicRoutes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: WAC
  },
  {
    path: '/auth/*',
    exact: false,
    name: 'Auth',
    component: Auth
  },
  {
    path: '/template',
    exact: true,
    name: 'Template',
    component: Template
  },
  // WAC Routes
  {
    path: '/wac',
    exact: true,
    name: 'WAC',
    component: WAC
  },
  {
    path: '/wac/:website',
    exact: true,
    name: 'WAC Setup',
    component: WacSetup
  },
]

export {publicRoutes}

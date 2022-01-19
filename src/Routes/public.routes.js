import { lazy } from 'react'

const Home = lazy(() => import('../Views/Home/Home'))
const Template = lazy(() => import('../Views/Template/Template'))

const publicRoutes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: Home
  },
  {
    path: '/template',
    exact: true,
    name: 'Template',
    component: Template
  }
]

export {publicRoutes}

import { lazy } from 'react'

const Home = lazy(() => import('../Views/Home/Home'))

const publicRoutes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: Home
  }
]

export {publicRoutes}

import {lazy} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'

const SignIn = lazy(() => import('./SignIn/SignIn'))
const SignUp = lazy(() => import('./SignUp/SignUp'))

const Auth = () => {

  const navigate = useNavigate()

  return (
    <Routes>
      <Route path="sign-up" element={<SignUp />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="*" element={() => navigate('sign-in')} />
    </Routes>
  )
}

export default Auth

import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRouteMiddleware () {
  const auth = window.localStorage.getItem('AUTH')
  const authObject = JSON.parse(auth)

  const token = authObject?.jwt

  return (
    token ? <Outlet /> : <Navigate to='authentication' />
  )
}

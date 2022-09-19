import { Navigate } from 'react-router-dom'

const RedirectWithLogin = () => {
  const uid = window.localStorage.getItem('uid')
  if (uid) {
    return (
      <Navigate to='/' replace />
    )
  }
  return false
}

export default RedirectWithLogin

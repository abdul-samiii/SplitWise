import { Navigate } from 'react-router-dom'

const RedirectWithLogin = () => window.localStorage.getItem('uid') && <Navigate to='/' replace />

export default RedirectWithLogin

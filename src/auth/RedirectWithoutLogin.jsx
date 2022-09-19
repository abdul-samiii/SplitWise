import React from 'react'
import { Navigate } from 'react-router-dom'

const RedirectWithoutLogin = () => {
  const uid = window.localStorage.getItem('uid')
  if (uid == null) {
    return (
      <Navigate to='/login' replace />
    )
  }
  return false
}

export default RedirectWithoutLogin

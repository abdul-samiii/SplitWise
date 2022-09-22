import {
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  updatePassword,
} from 'firebase/auth'

import { progress } from '../../components'
import { auth, signInWithGoogle } from '../../utils/Firebase'
import { LOGOUT_SUCCESS } from '../actionTypes'
import { createUserDocument, GetUser } from './UserAction'

export const LoginWithGoogle = () => (dispatch) => {
  signInWithGoogle()
  auth.onAuthStateChanged(user => {
    window.localStorage.setItem('uid', user.multiFactor.user.uid)
    dispatch({ payload: user.multiFactor.user, type: 'LOGIN_SUCCESS' })
    window.localStorage.setItem('email', user.multiFactor.user.email)
    GetUser(user.multiFactor.user.email)
  })
}

export const SignupWithEmail = async (email, password, displayName) => {
  progress.start()
  const { user } = await auth.createUserWithEmailAndPassword(email, password)
  createUserDocument(user, {
    displayName, phone: 'N/A', city: 'N/A', cnic: 'N/A', dob: 'N/A', currency: 'N/A', language: 'N/A',
  })

  return (dispatch) => {
    auth.onAuthStateChanged(item => {
      window.localStorage.setItem('uid', item.multiFactor.user.uid)
      dispatch({ payload: item.multiFactor.user, type: 'LOGIN_SUCCESS' })
      progress.finish()
    })
  }
}

export const SigninWithEmail = (email, password) => {
  progress.start()

  return (dispatch) => {
    auth.signInWithEmailAndPassword(email, password)
    auth.onAuthStateChanged(user => {
      window.localStorage.setItem('uid', user.multiFactor.user.uid)
      dispatch({ payload: user.multiFactor.user, type: 'LOGIN_SUCCESS' })
      window.localStorage.setItem('email', user.multiFactor.user.email)
      GetUser(user.multiFactor.user.email)
      progress.finish()
    })
  }
}

export const Logout = () => {
  progress.start()
  auth.signOut()

  return (dispatch) => {
    auth.onAuthStateChanged(() => {
      window.localStorage.removeItem('uid')
      window.localStorage.removeItem('user')
      window.localStorage.removeItem('email')
      dispatch({ payload: undefined, type: LOGOUT_SUCCESS })
      progress.finish()
    })
  }
}

// 2) Then call update password function
export const changePassword = (newPassword) => {
  progress.start()
  const user = getAuth().currentUser
  updatePassword(user, newPassword)
    .then(() => {
      // Update successful.
      alert('Password Updated!')
      progress.finish()
    })
    .catch((error) => {
      // An error happened.
      this.toasterService.notificationDanger(error.message)
      progress.finish()
    })
}

export const reAuthenticateCredential = (currentPassword, newPassword) => {
  const user = getAuth().currentUser
  const cred = EmailAuthProvider.credential(user.email, currentPassword)
  reauthenticateWithCredential(user, cred).then(() => {
    changePassword(newPassword)
  })
}

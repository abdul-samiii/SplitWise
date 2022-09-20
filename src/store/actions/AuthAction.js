import {
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  updatePassword,
} from 'firebase/auth'
import { auth, signInWithGoogle } from '../../utils/Firebase'
import { LOGOUT_SUCCESS } from '../actionTypes'
import { createUserDocument } from './UserAction'

export const LoginWithGoogle = () => (dispatch) => {
  signInWithGoogle()
  auth.onAuthStateChanged(user => {
    window.localStorage.setItem('uid', user.multiFactor.user.uid)
    dispatch({ payload: user.multiFactor.user, type: 'LOGIN_SUCCESS' })
  })
}

export const SignupWithEmail = async (email, password, displayName) => {
  console.log('sdfsdfsdfsdf')
  const { user } = await auth.createUserWithEmailAndPassword(email, password)
  createUserDocument(user, {
    displayName, phone: 'N/A', city: 'N/A', cnic: 'N/A', dob: 'N/A', currency: 'N/A', language: 'N/A',
  })
  return (dispatch) => {
    auth.onAuthStateChanged(item => {
      window.localStorage.setItem('uid', item.multiFactor.user.uid)
      dispatch({ payload: item.multiFactor.user, type: 'LOGIN_SUCCESS' })
    })
  }
}

export const SigninWithEmail = (email, password) => {
  console.log('sdfsdfsdfsdf')
  return (dispatch) => {
    auth.signInWithEmailAndPassword(email, password)
    auth.onAuthStateChanged(user => {
      console.log('uiuiuiuTT ', user)
      window.localStorage.setItem('uid', user.multiFactor.user.uid)
      dispatch({ payload: user.multiFactor.user, type: 'LOGIN_SUCCESS' })
    })
  }
}

export const Logout = () => {
  console.log()
  auth.signOut()
  return (dispatch) => {
    auth.onAuthStateChanged(() => {
      window.localStorage.removeItem('uid')
      dispatch({ payload: undefined, type: LOGOUT_SUCCESS })
    })
  }
}

// 2) Then call update password function
export const changePassword = (newPassword) => {
  const user = getAuth().currentUser
  updatePassword(user, newPassword)
    .then(() => {
      // Update successful.
      alert('Password Updated!')
      this.logout()
    })
    .catch((error) => {
      // An error happened.
      this.toasterService.notificationDanger(error.message)
    })
}

export const reAuthenticateCredential = (currentPassword, newPassword) => {
  const user = getAuth().currentUser
  const cred = EmailAuthProvider.credential(user.email, currentPassword)
  reauthenticateWithCredential(user, cred).then(() => {
    changePassword(newPassword)
  })
}

import { auth, signInWithGoogle } from '../../utils/Firebase'

export const LoginWithGoogle = () => {
  console.log()
  return (dispatch) => {
    signInWithGoogle()
    auth.onAuthStateChanged(user => {
      window.localStorage.setItem('uid', user.multiFactor.user.uid)
      dispatch({ payload: user.multiFactor.user, type: 'LOGIN_SUCCESS' })
    })
  }
}

export const SignupWithEmail = (email, password) => {
  console.log('sdfsdfsdfsdf')
  return (dispatch) => {
    auth.createUserWithEmailAndPassword(email, password)
    auth.onAuthStateChanged(user => {
      window.localStorage.setItem('uid', user.multiFactor.user.uid)
      dispatch({ payload: user.multiFactor.user, type: 'LOGIN_SUCCESS' })
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
      dispatch({ payload: undefined, type: 'LOGOUT_SUCCESS' })
    })
  }
}

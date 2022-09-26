import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyA2SkHQckcBoeaEbOfIXGDJGHf6Id_4hAA',
  authDomain: 'splitwise-5eccf.firebaseapp.com',
  projectId: 'splitwise-5eccf',
  storageBucket: 'splitwise-5eccf.appspot.com',
  messagingSenderId: '422173477505',
  appId: '1:422173477505:web:93575004920aca7eda9b80',
}

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider()

export const auth = firebase.auth()
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const firestore = firebase.firestore()
export const storage = getStorage(firebase.initializeApp(firebaseConfig))

export default firebase

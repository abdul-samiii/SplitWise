import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { progress } from '../../components'

import { firestore } from '../../utils/Firebase'
import {
  GET_USER_SUCCESS,
  SEARCH_FRIEND_FAILED,
  SEARCH_FRIEND_SUCCESS,
} from '../actionTypes'

export const createUserDocument = async (user, additionalData) => {
  if (!user) return
  const userRef = firestore.doc(`users/${user.email}`)
  const snapshot = userRef.get()
  if (!snapshot.exists) {
    const { email } = user
    const {
      displayName, phone, city, cnic, dob, currency, language,
    } = additionalData
    try {
      userRef.set({
        displayName,
        email,
        phone,
        city,
        cnic,
        dob,
        currency,
        language,
        createdAt: new Date(),
      })
    } catch (error) {
      console.log('Error in creating user', error)
    }
  }
}

export const GetUser = (email) => (dispatch) => {
  firebase.firestore().collection('users').doc(email).get()
    .then((snapshot) => {
      window.localStorage.setItem('user', JSON.stringify(snapshot.data()))
      dispatch({ type: GET_USER_SUCCESS, payload: snapshot.data() })
    })
    .catch((e) => console.log(e))
}

export const SearchFriend = (email) => {
  progress.start()
  const db = firebase.firestore()
  const userCollection = db.collection('users')
  let datatemp
  return (dispatch) => {
    firebase.auth().fetchProvidersForEmail(email)
      .then(providers => {
        if (providers.length === 0) {
          alert('user not found')
          progress.finish()
          dispatch({ type: SEARCH_FRIEND_FAILED })
        } else {
          try {
            userCollection.doc(email)
              .get()
              .then(doc => {
                datatemp = doc.data()
                console.log(datatemp.displayName)
                dispatch({ type: SEARCH_FRIEND_SUCCESS, payload: datatemp })
                progress.finish()
              })
          } catch (error) {
            alert(error.message)
            progress.finish()
          }
        }
      })
  }
}

export const AddFriendLogic = (email, friendEmail) => {
  progress.start()
  const db = firebase.firestore()
  const userCollection = db.collection('users')
  try {
    userCollection.doc(email).update({
      friends: firebase.firestore.FieldValue.arrayUnion(friendEmail),
    })
    userCollection.doc(friendEmail).update({
      friends: firebase.firestore.FieldValue.arrayUnion(email),
    })
    alert('Added')
    progress.finish()
  } catch (e) {
    console.log('Error ', e)
    progress.finish()
  }
}

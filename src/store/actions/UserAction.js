import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

import { firestore } from '../../utils/Firebase'
import {
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

export const GetUser = async () => {
  const db = firestore
  const data = await db.collection('users').doc('S2jA2TFKzJcl2mUlEfCx1feFidj1').get()
  // const result = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
  console.log(data)
}

export const SearchFriend = (email) => {
  const db = firebase.firestore()
  const userCollection = db.collection('users')
  let datatemp
  return (dispatch) => {
    firebase.auth().fetchProvidersForEmail(email)
      .then(providers => {
        if (providers.length === 0) {
          console.log('user not found')
          dispatch({ type: SEARCH_FRIEND_FAILED })
        } else {
          try {
            userCollection.doc(email)
              .get()
              .then(doc => {
                datatemp = doc.data()
                console.log(datatemp.displayName)
                dispatch({ type: SEARCH_FRIEND_SUCCESS, payload: datatemp })
              })
          } catch (error) {
            alert(error.message)
          }
        }
      })
  }
}

export const AddFriendLogic = () => {
  const db = firebase.firestore()
  const userCollection = db.collection('users')
  try {
    userCollection.doc('ksamk100474@gmail.com').update({
      friends: firebase.firestore.FieldValue.arrayUnion('jo@gmail.com'),
    })
  } catch (e) {
    console.log('Error ', e)
  }
}

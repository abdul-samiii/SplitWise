import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { progress } from '../../components'

import { auth, firestore } from '../../utils/Firebase'
import {
  GET_GROUPS_SUCCESS,
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

export const GetUser = () => async (dispatch) => {
  const user = auth?.currentUser
  await firebase.firestore().collection('users').doc(user?.email).get()
    .then((snapshot) => {
      window.localStorage.setItem('user', JSON.stringify(snapshot.data()))
      console.log(snapshot.data())
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

export const CreateGroupLogic = (groupName, friendEmails) => {
  progress.start()
  const { email } = auth.currentUser
  const db = firebase.firestore()
  const userCollection = db.collection('users')
  try {
    userCollection.doc(email).update({
      groups: firebase.firestore.FieldValue.arrayUnion(groupName),
    })

    friendEmails.map((item) => {
      userCollection.doc(item).update({
        groups: firebase.firestore.FieldValue.arrayUnion(groupName),
      })
      return friendEmails
    })

    alert('Created')
    progress.finish()
  } catch (e) {
    console.log('Error ', e)
    progress.finish()
  }

  const userRef = firestore.doc(`groups/${groupName}`)
  const snapshot = userRef.get()
  if (!snapshot.exists) {
    try {
      userRef.set({
        members: friendEmails,
        createdAt: new Date(),
      })
    } catch (error) {
      console.log('Error in creating Group', error)
    }
  }
}

export const GetGroup = (groupNames) => async (dispatch) => {
  var gCount = []
  console.log('groups ', groupNames)
  // const groupNames = ['jobs', 'Dinner', 'Office']
  groupNames.map(async (item) => {
    await firebase.firestore().collection('groups').doc(item).get()
      .then((snapshot) => {
        gCount.push(snapshot.data().members.length)
      })
      .catch((e) => console.log(e))
    return item
  })
  dispatch({ type: GET_GROUPS_SUCCESS, payload: gCount })
}

export const GetGroupMembers = () => (dispatch) => {
  firebase.firestore().collection('groups').doc('jobs').get()
    .then((snapshot) => {
      dispatch({ type: 'GET_MEMBERS_SUCCESS', payload: snapshot.data().members })
    })
    .catch((e) => console.log(e))
}

export const UpdateProfile = (additionalData) => {
  progress.start()
  const user = auth?.currentUser
  const db = firebase.firestore()
  const userCollection = db.collection('users').doc(user?.email)
  const {
    displayName, phone, city, cnic, dob, currency, language,
  } = additionalData
  try {
    userCollection.update({
      displayName,
      phone,
      city,
      cnic,
      dob,
      currency,
      language,
    })
    progress.finish()
  } catch (e) {
    alert('Error ', e)
    progress.finish()
  }
}

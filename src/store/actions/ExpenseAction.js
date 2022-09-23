import firebase from 'firebase/compat/app'
import { progress } from '../../components'

import { firestore } from '../../utils/Firebase'
import { GET_CREDIT_SUCCESS, GET_DEBIT_SUCCESS, GET_GROUP_INC_SUCCESS } from '../actionTypes'

export const createIncommingDocument = async (user, additionalData) => {
  const randomFile = new Date()
  if (!user) return
  const { email } = user
  const {
    amount, title, friendEmails,
  } = additionalData

  // Incomming
  const incommingRef = firestore.doc(`expense/${email}/incomming/${randomFile}`)
  const snapshot = incommingRef.get()
  if (!snapshot.exists) {
    try {
      incommingRef.set({
        amount,
        title,
        status: false,
        group: false,
        createdAt: new Date(),
      })
      incommingRef.update({
        friendEmails: firebase.firestore.FieldValue.arrayUnion(friendEmails),
      })
    } catch (error) {
      console.log('Error in creating debit', error)
    }
  }
  // Outgoing
  const outgoingRef = firestore.doc(`expense/${friendEmails}/outgoing/${randomFile}`)
  const snapshotFriend = incommingRef.get()
  if (!snapshotFriend.exists) {
    try {
      outgoingRef.set({
        amount,
        title,
        friendEmail: email,
        status: false,
        createdAt: new Date(),
      })
    } catch (error) {
      console.log('Error in creating debit', error)
    }
  }
}

export const createIncommingDocGroup = async (user, additionalData) => {
  const randomFile = new Date()
  if (!user) return
  const { email } = user
  const {
    amount, title, friendEmails,
  } = additionalData

  // Incomming
  const incommingRef = firestore.doc(`expense/${email}/incomming/${randomFile}`)
  const snapshot = incommingRef.get()
  if (!snapshot.exists) {
    try {
      incommingRef.set({
        amount,
        title,
        status: false,
        group: true,
        friendEmails,
        createdAt: new Date(),
      })
    } catch (error) {
      console.log('Error in creating debit', error)
    }
  }

  friendEmails.map((emailItem) => {
    // Outgoing
    const outgoingRef = firestore.doc(`expense/${emailItem}/outgoing/${randomFile}`)
    const snapshotFriend = incommingRef.get()
    if (!snapshotFriend.exists) {
      try {
        outgoingRef.set({
          amount,
          title,
          friendEmails: email,
          status: false,
          createdAt: new Date(),
        })
      } catch (error) {
        console.log('Error in creating debit', error)
      }
    }
    return emailItem
  })
}

export const GetIncommingAmount = (email) => (dispatch) => {
  try {
    firebase.firestore().collection('expense').doc(email).collection('incomming')
      .get()
      .then((snapshot) => {
        dispatch({ type: GET_DEBIT_SUCCESS, payload: snapshot.docs })
      })
      .catch((e) => console.log(e))
  } catch (e) {
    console.log('error ')
  }
}

export const GetOutgoingAmount = (email) => (dispatch) => {
  try {
    firebase.firestore().collection('expense').doc(email).collection('outgoing')
      .get()
      .then((snapshot) => {
        dispatch({ type: GET_CREDIT_SUCCESS, payload: snapshot.docs })
      })
      .catch((e) => console.log(e))
  } catch (e) {
    console.log('error ')
  }
}

export const settleExpense = (myEmail, friendEmails, docId) => {
  progress.start()
  const db = firebase.firestore()
  const userCollection = db.collection('expense').doc(myEmail).collection('outgoing')
  const friendCollection = db.collection('expense').doc(friendEmails).collection('incomming')
  try {
    userCollection.doc(docId).update({
      status: true,
    })
    friendCollection.doc(docId).update({
      status: true,
    })
    progress.finish()
  } catch (e) {
    console.log('Error ', e)
    progress.finish()
  }
}

export const GetIncommingGroupChange = (email, docId) => (dispatch) => {
  try {
    firebase.firestore().collection('expense').doc(email).collection('incomming')
      .doc(docId)
      .get()
      .then((snapshot) => {
        dispatch({ type: GET_GROUP_INC_SUCCESS, payload: snapshot.data() })
      })
      .catch((e) => console.log(e))
  } catch (e) {
    console.log('error ')
  }
}

export const settleExpenseGroup = (myEmail, friendEmails, membersEmail, docId) => {
  progress.start()
  const db = firebase.firestore()
  const userCollection = db.collection('expense').doc(myEmail).collection('outgoing')
  const friendCollection = db.collection('expense').doc(friendEmails).collection('incomming')
  try {
    userCollection.doc(docId).update({
      status: true,
    })
    friendCollection.doc(docId).update({
      friendEmails: membersEmail,
    })
    progress.finish()
  } catch (e) {
    console.log('Error ', e)
    progress.finish()
  }
}

import firebase from 'firebase/compat/app'
import { progress } from '../../components'

import { firestore } from '../../utils/Firebase'
import { GET_DEBIT_SUCCESS } from '../actionTypes'

export const createDebitDocument = async (user, additionalData) => {
  alert(user.email)
  if (!user) return
  const debitRef = firestore.doc(`expense/${user.email}/debit/${additionalData.friendEmail}`)
  const snapshot = debitRef.get()
  if (!snapshot.exists) {
    const {
      amount, title, friendEmail,
    } = additionalData
    try {
      debitRef.set({
        amount,
        title,
        friendEmail,
        debit: true,
        status: false,
        createdAt: new Date(),
      })
    } catch (error) {
      console.log('Error in creating debit', error)
    }
  }
}

export const GetDebit = (email) => (dispatch) => {
  firebase.firestore().collection('expense').doc(email).collection('debit')
    .get()
    .then((snapshot) => {
      console.log(snapshot.docs[0].data())
      dispatch({ type: GET_DEBIT_SUCCESS, payload: snapshot.docs })
    })
    .catch((e) => console.log(e))
}

export const settleExpense = (myEmail, friendEmail) => {
  progress.start()
  const db = firebase.firestore()
  const userCollection = db.collection('expense').doc(myEmail).collection('debit')
  try {
    userCollection.doc(friendEmail).update({
      status: true,
    })
    progress.finish()
  } catch (e) {
    console.log('Error ', e)
    progress.finish()
  }
}

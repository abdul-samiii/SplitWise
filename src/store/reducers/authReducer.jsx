import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../actionTypes'

const iState = {
  user: {},
}

export const authReducer = (action, state = iState) => {
  console.log('Hello', action)
  switch (action?.type) {
    case LOGIN_SUCCESS:
      return {
        ...state, user: action.payload,
      }
    case LOGOUT_SUCCESS:
      alert('jijiji')
      return {
        user: action.payload,
      }
    default:
      return state
  }
}

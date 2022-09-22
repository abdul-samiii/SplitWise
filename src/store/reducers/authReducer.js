import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../actionTypes'
import { InitialState } from './InitialState'

export const authReducer = (action, state = InitialState) => {
  switch (action?.type) {
    case LOGIN_SUCCESS:
      return {
        ...state, user: action.payload,
      }
    case LOGOUT_SUCCESS:
      return InitialState
    default:
      return state
  }
}

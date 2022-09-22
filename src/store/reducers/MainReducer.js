import {
  GET_DEBIT_FAILED,
  GET_DEBIT_START,
  GET_DEBIT_SUCCESS,
  GET_USER_FAILED,
  GET_USER_START,
  GET_USER_SUCCESS,
  INSERT_USER_FAILED,
  INSERT_USER_START,
  INSERT_USER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SEARCH_FRIEND_FAILED,
  SEARCH_FRIEND_START,
  SEARCH_FRIEND_SUCCESS,
} from '../actionTypes'
import { InitialState } from './InitialState'

export const mainReducer = (action, state = InitialState.user) => {
  console.log('Testing A : ', action?.payload[0].data())
  switch (action?.type) {
    case LOGIN_SUCCESS:
      return {
        ...state, user: action.payload,
      }
    case LOGOUT_SUCCESS:
      return InitialState
    case INSERT_USER_START:
      return {
        ...state, isLoading: true,
      }
    case INSERT_USER_SUCCESS:
      return {
        ...state, isLoading: false,
      }
    case INSERT_USER_FAILED:
      return {
        ...state, isLoading: false,
      }
    case SEARCH_FRIEND_START:
      return {
        ...state, isLoading: true,
      }
    case SEARCH_FRIEND_SUCCESS:
      return {
        ...state, isLoading: false, searchUser: action?.payload,
      }
    case SEARCH_FRIEND_FAILED:
      return {
        ...state, isLoading: false, searchUser: undefined,
      }
    case GET_USER_START:
      return {
        ...state, isLoading: true,
      }
    case GET_USER_SUCCESS:
      return {
        ...state, isLoading: false, user: action?.payload,
      }
    case GET_USER_FAILED:
      return {
        ...state, isLoading: false, searchUser: undefined,
      }
    case GET_DEBIT_START:
      return {
        ...state, isLoading: true,
      }
    case GET_DEBIT_SUCCESS:
      return {
        ...state, isLoading: false, incomming: action?.payload,
      }
    case GET_DEBIT_FAILED:
      return {
        ...state, isLoading: false,
      }
    default:
      return state
  }
}

import {
  GET_CREDIT_FAILED,
  GET_CREDIT_START,
  GET_CREDIT_SUCCESS,
  GET_DEBIT_FAILED,
  GET_DEBIT_START,
  GET_DEBIT_SUCCESS,
} from '../actionTypes'
import { InitialState } from './InitialState'

export const expenseReducer = (state = InitialState, action) => {
  switch (action?.type) {
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
    case GET_CREDIT_START:
      return {
        ...state, isLoading: true,
      }
    case GET_CREDIT_SUCCESS:
      return {
        ...state, isLoading: false, outgoing: action?.payload,
      }
    case GET_CREDIT_FAILED:
      return {
        ...state, isLoading: false,
      }
    default:
      return state
  }
}

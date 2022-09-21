import {
  GET_DEBIT_FAILED,
  GET_DEBIT_START,
  GET_DEBIT_SUCCESS,
} from '../actionTypes'
import { InitialState } from './InitialState'

export const expenseReducer = (action, state = InitialState) => {
  console.log(action?.payload)
  switch (action?.type) {
    case GET_DEBIT_START:
      return {
        ...state, isLoading: true,
      }
    case GET_DEBIT_SUCCESS:
      return {
        ...state, isLoading: false, debit: action?.payload,
      }
    case GET_DEBIT_FAILED:
      return {
        ...state, isLoading: false,
      }
    default:
      return state
  }
}

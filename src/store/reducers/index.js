import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { expenseReducer } from './ExpenseReducer'
import { userReducer } from './UserReducer'

const rootReducer = combineReducers({
  authReducer,
  userReducer,
  expenseReducer,
})

export default rootReducer

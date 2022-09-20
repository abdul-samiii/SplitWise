import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { userReducer } from './UserReducer'

const rootReducer = combineReducers({
  authReducer,
  userReducer,
})

export default rootReducer

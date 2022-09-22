import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import { InitialState } from './reducers/InitialState'

const store = createStore(rootReducer, InitialState, applyMiddleware(thunk))

export default store

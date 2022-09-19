import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import { Login, Signup } from './auth'
import { Account, Home } from './pages'
import store from './store/Store'

const App = () => (
  <div className='h-screen'>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />``
          <Route path='/friends' element={<Home />} />
          <Route path='/groups' element={<Home />} />
          <Route path='/activity' element={<Home />} />
          <Route path='/settings' element={<Home />} />
          <Route path='/account' element={<Account />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </div>
)

export default App

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../store'

import { Top } from './AuthComponents'
import RedirectWithLogin from './RedirectWithLogin'

const Signup = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()

  const dispatch = useDispatch()
  const { SignupWithEmail } = bindActionCreators(ActionCreators, dispatch)

  const handleRegister = () => {
    if (name && email && password) {
      if (password === confirmPassword) {
        SignupWithEmail(email, password, name)
      } else {
        alert('Password donot Match!!')
      }
    } else {
      alert('Fill all fields')
    }
  }

  return (
    <div className='h-screen flex flex-col'>
      <RedirectWithLogin />
      <div className='sm:shadow-lg sm:border-[1px] sm:m-auto h-fit sm:w-[55vh] p-10'>
        <Top />
        <div className='flex justify-center py-4'>
          <hr className='w-[38%] mt-3 border-[1px] border-black border-opacity-25 ' />
          <p className='px-2'>or</p>
          <hr className='w-[38%] mt-3 border-[1px] border-black border-opacity-25 ' />
        </div>

        <div className='flex flex-col space-y-2 '>
          <input
            placeholder='Full Name'
            className='border-[1px] rounded-md px-2 py-2 w-[85%] m-auto'
            value={name}
            onChange={(item) => setName(item.target.value)}
          />
          <input
            placeholder='Email Address'
            className='border-[1px] rounded-md px-2 py-2 w-[85%] m-auto'
            value={email}
            onChange={(item) => setEmail(item.target.value)}
          />
          <input
            placeholder='Password'
            className='border-[1px] rounded-md px-2 py-2 w-[85%] m-auto'
            type='password'
            value={password}
            onChange={(item) => setPassword(item.target.value)}
          />
          <input
            placeholder='Confirm Password'
            className='border-[1px] rounded-md px-2 py-2 w-[85%] m-auto'
            type='password'
            value={confirmPassword}
            onChange={(item) => setConfirmPassword(item.target.value)}
          />
        </div>
        <div
          onClick={handleRegister}
          role='presentation'
          className='border-[1px] py-2 rounded-md mt-2 w-[85%] flex m-auto hover:cursor-pointer bg-[#427573]'
        >
          <p className='text-center m-auto text-white'>Register</p>
        </div>

        <Link
          to='/login'
          role='presentation'
          className='border-[1px] py-2 rounded-md mt-2 w-[85%] flex m-auto hover:cursor-pointer bg-[#00B8B0]'
        >
          <p className='text-center m-auto text-white'>Sign In</p>
        </Link>
        <p className='text-center pt-4 text-[#00B8B0] hover:text-blue-600 hover:cursor-pointer'>Forgot Password?</p>
      </div>
    </div>
  )
}

export default Signup

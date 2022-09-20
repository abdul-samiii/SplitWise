import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import { IMAGES } from '../../components/Images'
import { ActionCreators } from '../../store'

const Top = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { LoginWithGoogle } = bindActionCreators(ActionCreators, dispatch)
  const uid = useSelector(item => item.authReducer.payload?.uid)
  const navigationHome = () => {
    if (uid) {
      navigate('/')
    }
  }

  useEffect(() => {
    navigationHome()
  }, uid)
  return (
    <>
      <h2 className='text-center font-extrabold text-5xl pt-5 text-[#427573]'>Splitwise</h2>
      <p
        className='text-center py-5 text-[#00B8B0]'
      >
        Your growth partner
      </p>
      <div
        role='presentation'
        onClick={LoginWithGoogle}
        className='border-[1px] py-2 rounded-md mt-2 w-[85%] flex justify-center m-auto hover:cursor-pointer space-x-4'
      >
        <img src={IMAGES.googleIcon} alt='icon' className='h-6' />
        <p className='text-center '>Continue with Google</p>
      </div>
    </>
  )
}
export default Top

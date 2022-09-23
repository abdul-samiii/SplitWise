import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  IdentificationIcon,
  CurrencyDollarIcon,
  GiftIcon,
  LanguageIcon,
} from '@heroicons/react/24/solid'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import { RedirectWithoutLogin } from '../auth'
import { IMAGES, Sidebar } from '../components'
import { ActionCreators } from '../store'

const Account = () => {
  const dispatch = useDispatch()
  const userData = useSelector(item => item.userReducer.user)
  const { GetUser } = bindActionCreators(ActionCreators, dispatch)

  const getUser = () => {
    setTimeout(() => {
      GetUser()
    }, 3000)
  }

  useEffect(() => {
    getUser()
  }, userData)

  return (
    <div className='flex'>
      <RedirectWithoutLogin />
      <Sidebar />
      <div>
        <div className='lg:flex lg:space-x-16 md:ml-40 md:shadow-xl lg:w-full mt-14 md:pr-48 pb-20 lg:pb-0'>
          <img src={IMAGES.dp} className='h-64 ml-auto' alt='user_profile' />
          <div className='my-auto space-y-3 ml-24 mt-4'>
            <h2 className='text-2xl'>{userData?.displayName}</h2>
            <div className='flex space-x-2'>
              <EnvelopeIcon className='h-5 mt-1' />
              <p className=' text-[#427573] text-lg'>{userData?.email}</p>
            </div>
            <div className='flex space-x-2'>
              <PhoneIcon className='h-5 mt-1' />
              <p className=' text-[#427573] text-lg'>{userData?.phone}</p>
            </div>
            <div className='flex space-x-2'>
              <MapPinIcon className='h-5 mt-1' />
              <p className=' text-[#427573] text-lg'>{userData?.city}</p>
            </div>
            <h3 className='font-bold text-[#427573] border-2 py-3 px-12
              hover:cursor-pointer rounded-2xl text-center ml-4 h-fit w-fit mt-20
            hover:bg-[#a6f0ed] hover:text-white hidden lg:inline-block'
            >
              Edit
            </h3>
          </div>
          <div className='mt-6 pl-[25%] space-y-4'>
            <div className='flex space-x-2'>
              <IdentificationIcon className='h-5 mt-1' />
              <p className=' text-[#427573] text-lg font-bold'>CNIC</p>
              <p className='text-[#427573] mt-[2px]'>{userData?.cnic}</p>
            </div>
            <div className='flex space-x-2'>
              <GiftIcon className='h-5 mt-1' />
              <p className=' text-[#427573] text-lg font-bold'>DOB</p>
              <p className='text-[#427573] mt-[2px]'>{userData?.dob}</p>
            </div>
            <div className='flex space-x-2'>
              <CurrencyDollarIcon className='h-5 mt-1' />
              <p className=' text-[#427573] text-lg font-bold'>Currency</p>
              <p className='text-[#427573] mt-[2px]'>{userData?.currency}</p>
            </div>
            <div className='flex space-x-2'>
              <LanguageIcon className='h-5 mt-1' />
              <p className=' text-[#427573] text-lg font-bold'>Language</p>
              <p className='text-[#427573] mt-[2px]'>{userData?.language}</p>
            </div>
            <h3 className='font-bold text-[#427573] border-2 py-3 px-12
              hover:cursor-pointer rounded-2xl text-center ml-4 h-fit w-fit mt-20
            hover:bg-[#a6f0ed] hover:text-white lg:hidden'
            >
              Edit
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account

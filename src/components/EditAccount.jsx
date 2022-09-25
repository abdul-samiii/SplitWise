import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ActionCreators } from '../store'

const EditAccount = ({ setEdit }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    city: '',
    dob: '',
    phone: '',
    cnic: '',
    currency: '',
    language: '',
  })

  const dispatch = useDispatch()
  const data = useSelector(item => item?.userReducer?.user)
  const { GetUser, UpdateProfile } = bindActionCreators(ActionCreators, dispatch)

  const getUser = () => {
    setTimeout(() => {
      GetUser()
    }, 3000)
    setUserData({
      ...userData,
      name: data.displayName,
      email: data.email,
      city: data.city,
      dob: data.dob,
      phone: data.phone,
      cnic: data.cnic,
      currency: data.currency,
      language: data.language,
    })
  }

  useEffect(() => {
    getUser()
  }, data)

  const handleUpdateProfile = () => {
    if (userData.name) {
      const obj = {
        displayName: userData.name ?? data?.displayName,
        city: userData.city ?? data?.city,
        dob: userData.dob ?? data?.dob,
        phone: userData.phone ?? data?.phone,
        cnic: userData.cnic ?? data?.cnin,
        currency: userData.currency ?? data?.currency,
        language: userData.language ?? data?.language,
      }
      setEdit(false)
      UpdateProfile(obj)
    } else {
      alert('Enter your name')
    }
  }

  return (
    <div className='lg:flex md:shadow-md lg:ml-44 md:ml-28 md:w-full h-1/2 w-fit pr-8 py-10 mt-10'>
      <div className=' flex flex-col space-y-12'>
        <input
          placeholder='Full Name'
          className='outline-none border-b-2 ml-32 lg:w-full text-sm pl-2 pb-2'
          value={userData.name}
          onChange={(item) => setUserData({ ...userData, name: item.target.value })}
        />
        <input
          placeholder='Email'
          className='outline-none border-b-2 ml-32 lg:w-full text-sm pl-2 pb-2'
          value={userData.email}
        />
        <input
          placeholder='Phone'
          className='outline-none border-b-2 ml-32 lg:w-full text-sm pl-2 pb-2'
          value={userData.phone}
          onChange={(item) => setUserData({ ...userData, phone: item.target.value })}
        />
        <input
          placeholder='City'
          className='outline-none border-b-2 ml-32 lg:w-full text-sm pl-2 pb-2'
          value={userData.city}
          onChange={(item) => setUserData({ ...userData, city: item.target.value })}
        />
        <h3
          className='font-bold text-[#427573] border-2 md:p-4 p-2
          hover:cursor-pointer rounded-2xl text-center ml-32 h-fit w-fit mt-20
          hover:bg-[#a6f0ed] hover:text-white hidden lg:inline-block'
          role='presentation'
          onClick={handleUpdateProfile}
        >
          Update
        </h3>
      </div>
      <div className='flex flex-col space-y-12 mt-12 lg:mt-0'>
        <input
          placeholder='CNIC'
          className='outline-none border-b-2 lg:ml-44 ml-32 lg:w-full text-sm pl-2 pb-2'
          value={userData.cnic}
          onChange={(item) => setUserData({ ...userData, cnic: item.target.value })}
        />
        <input
          placeholder='DOB'
          className='outline-none border-b-2 lg:ml-44 ml-32 lg:w-full text-sm pl-2 pb-2'
          value={userData.dob}
          onChange={(item) => setUserData({ ...userData, dob: item.target.value })}
        />
        <input
          placeholder='Currency'
          className='outline-none border-b-2 lg:ml-44 ml-32 lg:w-full text-sm pl-2 pb-2'
          value={userData.currency}
          onChange={(item) => setUserData({ ...userData, currency: item.target.value })}
        />
        <input
          placeholder='Language'
          className='outline-none border-b-2 lg:ml-44 ml-32 md:w-full text-sm pl-2 pb-2'
          value={userData.currency}
          onChange={(item) => setUserData({ ...userData, currency: item.target.value })}
        />
      </div>
    </div>
  )
}
export default EditAccount

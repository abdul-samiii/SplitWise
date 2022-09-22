import { XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ActionCreators } from '../store'
import { auth } from '../utils/Firebase'
import { IMAGES } from './Images'

const AddFriend = ({ AddFriendModal }) => {
  const dispatch = useDispatch()
  const data = useSelector(item => item?.userReducer?.searchUser)
  const { SearchFriend, AddFriendLogic } = bindActionCreators(ActionCreators, dispatch)
  const [email, setEmail] = useState()

  const handleAddFriend = () => SearchFriend(email)

  return (
    <div className='shadow-xl absolute h-[300px] w-[340px] md:h-[300px] left-0 md:left-auto md:w-[500px] md:ml-20 lg:ml-80 -mt-[5%] z-50 bg-white'>
      <div className='flex'>
        <input
          placeholder='Enter Email to Add Friend'
          className='outline-none border-b-2 w-[200px] md:w-[300px] h-fit ml-5 px-2 mt-[50px] pb-2'
          value={email}
          onChange={(item) => setEmail(item.target.value)}
        />
        <h3
          className='font-bold text-[#427573] border-2 p-2 md:px-6
          hover:cursor-pointer rounded-2xl text-center md:ml-16 ml-4 h-fit w-fit mt-[40px]
          hover:bg-[#a6f0ed] hover:text-white '
          role='presentation'
          onClick={handleAddFriend}
        >
          Search
        </h3>
        <XMarkIcon
          className='h-7 m-2 hover:cursor-pointer'
          color='#6cb9b7'
          onClick={AddFriendModal}
        />
      </div>
      { data && (
        <div className='flex space-x-4 mt-4'>
          <img src={IMAGES.dp} alt='dp' className='h-14 rounded-full ml-6 mt-4' />
          <div className='mt-4'>
            <p className='text-[#427573]'>{data?.displayName}</p>
            <p className='text-[#427573]'>{data?.email}</p>
          </div>
          <h3
            className='text-[#427573] border-2 p-1 m-auto md:px-2
            hover:cursor-pointer text-center md:ml-16 ml-4 h-fit w-fit
            hover:bg-[#a6f0ed] hover:text-white '
            role='presentation'
            onClick={() => AddFriendLogic(auth.currentUser.email, email)}
          >
            Add Friend
          </h3>
        </div>
      )}
    </div>
  )
}

export default AddFriend

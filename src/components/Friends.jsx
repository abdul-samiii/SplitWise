import { UserCircleIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ActionCreators } from '../store'
import AddFriend from './AddFriend'

const Friends = () => {
  const [FriendModal, setFriendModal] = useState(false)
  const dispatch = useDispatch()
  const data = useSelector(item => item?.userReducer.user?.friends)
  const { GetUser } = bindActionCreators(ActionCreators, dispatch)

  const getUser = () => {
    setTimeout(() => {
      GetUser()
    }, 3000)
  }

  useEffect(() => {
    getUser()
  }, data)

  const AddFriendModal = () => setFriendModal(!FriendModal)

  return (
    <div className='ml-20 mt-14'>
      { FriendModal && <AddFriend AddFriendModal={AddFriendModal} /> }
      <div className='flex md:space-x-[50%] pb-4'>
        <h3 className='font-bold text-[#427573] text-xl text-center ml-4 h-fit w-fit mt-20'>
          Friends
        </h3>
        <h3
          className='font-bold text-[#427573] border-2 md:p-4 p-2
          hover:cursor-pointer rounded-2xl text-center ml-4 h-fit w-fit mt-20
          hover:bg-[#a6f0ed] hover:text-white'
          onClick={AddFriendModal}
          role='presentation'
        >
          Add Friend
        </h3>
      </div>
      <h3
        className='hover:cursor-pointer border-b-2 w-1/2 pb-4 text-[#427573] ml-4'
      >
        Your Friends
      </h3>
      <div className='h-64 w-1/2 overflow-scroll scrollbar-hide'>
        {
        data?.map((item) => (
          <div key={Math.random()} className='m-4 flex hover:cursor-pointer w-fit'>
            <UserCircleIcon className='h-10 mt-1 rounded-lg' />
            <div className='ml-4 mt-1'>
              <h3 className='font-bold'>{item}</h3>
              <p className='font-thin text-sm'>your friend</p>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Friends

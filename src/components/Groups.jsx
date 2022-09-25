import { UserGroupIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../store'
import AddGroupExpense from './AddGroupExpense'

import CreateGroup from './CreateGroup'

const Groups = () => {
  const [GroupModal, setGroupModal] = useState(false)
  const [settleModal, setSettleModal] = useState()
  const dispatch = useDispatch()
  const data = useSelector(item => item?.userReducer)
  const groups = data?.user?.groups
  const members = useSelector(item => item?.userReducer?.groupCount)

  const { GetGroup, GetUser } = bindActionCreators(ActionCreators, dispatch)

  const getUser = () => {
    setTimeout(() => {
      GetUser()
    }, 3000)
  }

  const getGroup = async () => {
    if (groups) {
      GetGroup(groups)
    }
  }
  useEffect(() => {
    getUser()
    getGroup()
  }, groups)

  const GroupModalToggle = () => {
    setGroupModal(!GroupModal)
  }

  const OpenModal = (index) => setSettleModal(index)
  const CloseModal = () => setSettleModal(null)

  return (
    <div className='ml-20 mt-14'>
      { GroupModal && <CreateGroup GroupModalToggle={GroupModalToggle} /> }
      <div className='flex md:space-x-[50%] pb-4'>
        <h3 className='font-bold text-[#427573] text-xl text-center ml-4 h-fit w-fit mt-20'>
          Groups
        </h3>
        <h3
          className='font-bold text-[#427573] border-2 md:p-4 p-2
          hover:cursor-pointer rounded-2xl text-center ml-4 h-fit w-fit mt-20
          hover:bg-[#a6f0ed] hover:text-white'
          onClick={GroupModalToggle}
          role='presentation'
        >
          Create Group
        </h3>
      </div>
      <h3
        className='hover:cursor-pointer border-b-2 w-1/2 pb-4 text-[#427573] ml-4'
      >
        Your Groups
      </h3>
      <div className='h-64 w-1/2 overflow-scroll scrollbar-hide'>
        {
        groups?.map((item, index) => (
          <>
            { settleModal === index
              && <AddGroupExpense handleSettleModal={CloseModal} item={item} /> }
            <div key={Math.random()} role='presentation' onClick={() => OpenModal(index)} className='m-4 flex hover:cursor-pointer w-fit'>
              <UserGroupIcon className='h-10 mt-1 rounded-lg' />
              <div className='ml-4 mt-1'>
                <h3 className='font-bold'>{item}</h3>
                <p className='font-thin text-sm'>{members[index]} members</p>
              </div>
              {/* <p className='font-thin text-sm ml-32 mt-3'>
              {item.incomming ? 'You are owed ' : 'You Owed '}${item.amount}</p> */}
            </div>
          </>
        ))
      }
      </div>
    </div>
  )
}

export default Groups

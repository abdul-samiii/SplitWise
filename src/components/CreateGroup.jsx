import { XMarkIcon } from '@heroicons/react/24/solid'
import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ActionCreators } from '../store'

const CreateGroup = ({ GroupModalToggle }) => {
  const dispatch = useDispatch()
  const data = useSelector(item => item?.userReducer.user?.friends)
  const { GetUser, CreateGroupLogic } = bindActionCreators(ActionCreators, dispatch)
  const groupEmails = useRef([])
  const groupName = useRef('')

  const getUser = () => {
    setTimeout(() => {
      GetUser()
    }, 3000)
  }

  useEffect(() => {
    getUser()
  }, data)

  const handleCreateGroup = () => {
    CreateGroupLogic(groupName.current.value, groupEmails.current)
  }

  const handleCheckBox = (checkboxEmail) => {
    if (groupEmails.current.indexOf(checkboxEmail) >= 0) {
      const removeIndex = groupEmails.current.indexOf(checkboxEmail)
      if (groupEmails.current.length > 1) {
        groupEmails.current.splice(removeIndex, removeIndex)
      } else {
        groupEmails.current.pop()
      }
    } else {
      groupEmails.current.push(checkboxEmail)
    }
  }

  return (
    <div className='shadow-xl absolute h-[300px] w-[340px] md:h-[300px] left-0 md:left-auto md:w-[500px] md:ml-20 lg:ml-80 -mt-[5%] z-50 bg-white'>
      <div className='flex'>
        <input
          placeholder='Group Name'
          className='outline-none border-b-2 w-[200px] md:w-[300px] h-fit ml-5 px-2 mt-[50px] pb-2'
          // value={groupName.current}
          // onChange={(item) => groupName.push(item.target.value)}
          ref={groupName}
        />
        <h3
          className='font-bold text-[#427573] border-2 p-2 md:px-6
          hover:cursor-pointer rounded-2xl text-center md:ml-16 ml-4 h-fit w-fit mt-[40px]
          hover:bg-[#a6f0ed] hover:text-white '
          role='presentation'
          onClick={handleCreateGroup}
        >
          Create
        </h3>
        <XMarkIcon
          className='h-7 m-2 hover:cursor-pointer'
          color='#6cb9b7'
          onClick={GroupModalToggle}
        />
      </div>
      <div className='h-64 w-1/2 overflow-scroll scrollbar-hide'>
        {
        data?.map((item) => (
          <div key={Math.random()} className='m-4 flex hover:cursor-pointer w-fit'>
            <img src={item} className='h-14 rounded-lg' alt='img' />
            <div className='ml-4 mt-1'>
              <h3 className='font-bold'>{item}</h3>
              <p className='font-thin text-sm'>your friend</p>
            </div>
            <input
              type='checkbox'
              className='bg-red-500 -mt-6 ml-10'
              value={item}
              onChange={(checkboxEmail) => handleCheckBox(checkboxEmail.target.value)}
            />
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default CreateGroup

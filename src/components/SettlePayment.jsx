import { XMarkIcon } from '@heroicons/react/24/solid'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ActionCreators } from '../store'
import { auth } from '../utils/Firebase'

const SettlePayment = ({ handleSettleModal, item }) => {
  const dispatch = useDispatch()
  const {
    GetIncommingGroupChange,
    settleExpenseGroup,
    settleExpense,
  } = bindActionCreators(ActionCreators, dispatch)
  const data = useSelector(temp => temp?.userReducer?.incommingGroup)

  useEffect(() => {
    GetIncommingGroupChange(item?.data().friendEmails, item?.id)
  }, data)

  const handlePay = () => {
    const user = auth?.currentUser
    const friends = data?.friendEmails?.filter((temp) => temp !== user?.email)
    if (data?.group) {
      if (data?.friendEmails.length > 1) {
        settleExpenseGroup(user?.email, item?.data().friendEmails, friends, item?.id)
      } else {
        settleExpense(user?.email, item?.data().friendEmails, item?.id)
      }
    } else {
      settleExpense(user?.email, item?.data().friendEmails, item?.id)
    }
  }

  return (
    <div className='shadow-xl flex absolute h-[300px] w-[340px] md:h-[300px] left-0 md:left-auto md:w-[500px] md:ml-20 lg:ml-80 -mt-[5%] z-50 bg-white'>
      <div>
        <h2 className='ml-32 mt-16 w-full font-bold'>Title : {item?.data().title}</h2>
        <h2 className='ml-32 w-full mt-4 font-bold'>Your Friend : {item?.data().friendEmails}</h2>
        <h3
          className='font-bold text-[#427573] border-2 p-2 md:px-6
          hover:cursor-pointer rounded-2xl text-center md:ml-36 ml-4 h-fit w-fit mt-[40px]
          hover:bg-[#a6f0ed] hover:text-white '
          role='presentation'
          onClick={handlePay}
        >
          Pay ${item?.data().amount}
        </h3>
      </div>
      <XMarkIcon
        className='h-7 m-2 hover:cursor-pointer ml-44'
        color='#6cb9b7'
        onClick={handleSettleModal}
      />
    </div>
  )
}

export default SettlePayment

import { XMarkIcon } from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ActionCreators } from '../store'
import { auth } from '../utils/Firebase'

const SettlePayment = ({ handleSettleModal, item }) => {
  const dispatch = useDispatch()
  const { settleExpense } = bindActionCreators(ActionCreators, dispatch)

  const handlePay = () => {
    alert(item?.friendEmail)
    const user = auth?.currentUser
    settleExpense(user?.email, item?.friendEmail)
  }
  console.log()
  return (
    <div className='shadow-xl flex absolute h-[300px] w-[340px] md:h-[300px] left-0 md:left-auto md:w-[500px] md:ml-20 lg:ml-80 -mt-[5%] z-50 bg-white'>
      <div>
        <h2 className='ml-32 mt-16 w-full font-bold'>Title : {item?.title}</h2>
        <h2 className='ml-32 w-full mt-4 font-bold'>Your Friend : {item?.friendEmail}</h2>
        <h3
          className='font-bold text-[#427573] border-2 p-2 md:px-6
          hover:cursor-pointer rounded-2xl text-center md:ml-36 ml-4 h-fit w-fit mt-[40px]
          hover:bg-[#a6f0ed] hover:text-white '
          role='presentation'
          onClick={handlePay}
        >
          Pay ${item?.amount}
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

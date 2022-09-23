import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ActionCreators } from '../store'
import { auth } from '../utils/Firebase'
import SettlePayment from './SettlePayment'

const OutgoingAmount = () => {
  const [settleModal, setSettleModal] = useState()
  const dispatch = useDispatch()
  const data = useSelector(item => item?.expenseReducer?.outgoing)
  const { GetOutgoingAmount } = bindActionCreators(ActionCreators, dispatch)

  const getCredit = () => {
    setTimeout(() => {
      const user = auth.currentUser
      GetOutgoingAmount(user?.email)
    }, 1000)
  }

  useEffect(() => {
    const user = auth.currentUser
    getCredit(user?.email)
  }, data)

  const OpenModal = (index) => setSettleModal(index)
  const CloseModal = () => setSettleModal(null)

  return (
    <div className='h-64 w-1/2 overflow-scroll scrollbar-hide'>
      {
        data?.map((item, index) => (
          <>
            { settleModal === index
            && <SettlePayment handleSettleModal={CloseModal} item={item} /> }
            <div key={Math.random()} className='m-4 flex hover:cursor-pointer w-fit '>
              <img src={item.data().img} className='h-14 rounded-lg' alt='img' />
              <div className='ml-4 mt-1'>
                <h3 className='font-bold'>{item.data().title}</h3>
                <p className='font-thin text-sm'>{item.data().friendEmails}</p>
                <p className='font-thin text-sm'>{item.data().status ? 'You paid ' : 'You Owed '}${item.data().amount}</p>
              </div>
              { !item.data().status
              && (
              <h3
                className='font-bold text-[#427573] border-2 p-2
                hover:cursor-pointer rounded-2xl text-center ml-4 h-fit w-fit
                hover:bg-[#a6f0ed] hover:text-white'
                onClick={() => OpenModal(index)}
                role='presentation'
              >
                Settle
              </h3>
              )}
            </div>
          </>
        ))
      }
    </div>
  )
}

export default OutgoingAmount

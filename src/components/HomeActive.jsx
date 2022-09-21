import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../store'
import SettlePayment from './SettlePayment'

const HomeActive = () => {
  const [settleModal, setSettleModal] = useState(false)
  const dispatch = useDispatch()
  const tempData = useSelector(item => item?.expenseReducer?.payload)
  const { GetDebit } = bindActionCreators(ActionCreators, dispatch)
  const data = tempData?.filter((item) => !item.data().status)
  useEffect(() => {
    GetDebit('ksamk100474@gmail.com')
  }, [3])

  const modal = () => {
    setSettleModal(!settleModal)
  }

  return (
    <div className='h-64 w-1/2 overflow-scroll scrollbar-hide'>
      {
        data?.map((item) => {
          console.log(item?.data())
          return (
            <>
              { settleModal && <SettlePayment handleSettleModal={modal} item={item.data()} /> }
              <div key={Math.random()} className='m-4 flex hover:cursor-pointer w-fit '>
                <img src={item.data().img} className='h-14 rounded-lg' alt='img' />
                <div className='ml-4 mt-1'>
                  <h3 className='font-bold'>{item.data().title}</h3>
                  <p className='font-thin text-sm'>{item.data().friendEmail}</p>
                  <p className='font-thin text-sm'>{item.data().debit ? 'You are owed ' : 'You Owed '}${item.data().amount}</p>
                </div>
                <h3
                  className='font-bold text-[#427573] border-2 p-2
                  hover:cursor-pointer rounded-2xl text-center ml-4 h-fit w-fit
                  hover:bg-[#a6f0ed] hover:text-white'
                  onClick={modal}
                  role='presentation'
                >
                  Settle
                </h3>
              </div>
            </>
          )
        })
      }
    </div>
  )
}

export default HomeActive

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ActionCreators } from '../store'
import { auth } from '../utils/Firebase'

const IncommingAmount = () => {
  const dispatch = useDispatch()
  const data = useSelector(item => item?.expenseReducer?.incomming)
  const { GetIncommingAmount } = bindActionCreators(ActionCreators, dispatch)

  const getDebit = () => {
    setTimeout(() => {
      const user = auth.currentUser
      GetIncommingAmount(user?.email)
    }, 1000)
  }

  useEffect(() => {
    getDebit()
  }, [])

  return (
    <div className='h-64 w-1/2 overflow-scroll scrollbar-hide'>
      {
        data
          ? data?.map((item) => {
            console.log(item?.data())
            return (
              <div key={Math.random()} className='m-4 flex hover:cursor-pointer w-fit '>
                <img src={item.data().img} className='h-14 rounded-lg' alt='img' />
                <div className='ml-4 mt-1'>
                  <h3 className='font-bold'>{item.data().title}</h3>
                  <p className='font-thin text-sm'>{item.data().friendEmail}</p>
                  <p className='font-thin text-sm'>{item.data().status ? 'You were owed ' : 'You are Owed '}${item.data().amount}</p>
                </div>
                { item?.data().status && <p className='ml-10 font-thin'>Recieved</p> }
              </div>
            )
          })
          : <h1>No Record Found</h1>
      }
    </div>
  )
}

export default IncommingAmount

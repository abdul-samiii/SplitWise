import { useState } from 'react'

import AddExpense from './AddExpense'
import HomeActive from './HomeActive'
import HomeCompleted from './HomeCompleted'

const Expense = () => {
  const [active, setActive] = useState(true)
  const [ExpenseModal, setExpenseModal] = useState(false)

  const AddExpenseModal = () => setExpenseModal(!ExpenseModal)

  return (
    <div className='ml-20 mt-14'>
      { ExpenseModal && <AddExpense AddExpenseModal={AddExpenseModal} /> }
      <div className='flex md:space-x-[50%] pb-4'>
        <h3 className='font-bold text-[#427573] text-xl text-center ml-4 h-fit w-fit mt-20'>
          Expenses
        </h3>
        <h3
          className='font-bold text-[#427573] border-2 md:p-4 p-2
          hover:cursor-pointer rounded-2xl text-center ml-4 h-fit w-fit mt-20
          hover:bg-[#a6f0ed] hover:text-white'
          role='presentation'
          onClick={AddExpenseModal}
        >
          Add Expense
        </h3>
      </div>
      <div className='flex space-x-10 text-[#427573] ml-4 border-b-2 w-1/2 pb-4'>
        <h3
          className={active ? 'hover:cursor-pointer font-bold' : 'hover:cursor-pointer'}
          onClick={() => setActive(true)}
          role='presentation'
        >
          Active
        </h3>
        <h3
          className={active ? 'hover:cursor-pointer' : 'hover:cursor-pointer font-bold'}
          onClick={() => setActive(false)}
          role='presentation'
        >
          Completed
        </h3>
      </div>
      {active ? <HomeActive />
        : <HomeCompleted />}
    </div>
  )
}

export default Expense

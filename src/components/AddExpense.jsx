import { XMarkIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import { auth } from '../utils/Firebase'
import { ActionCreators } from '../store'
import { ImgUploader } from './ImgUploader'

const AddExpense = ({ AddExpenseModal }) => {
  const dispatch = useDispatch()
  const { createIncommingDocument, GetUser } = bindActionCreators(ActionCreators, dispatch)
  const [email, setEmail] = useState()
  const [searchFriend, setSearchFriend] = useState(false)
  const [expenseTitle, setExpenseTitle] = useState()
  const [expenseAmount, setExpenseAmount] = useState()
  const [image, setImage] = useState()
  const [file, setFile] = useState()
  const [percent, setPercent] = useState()

  const userData = useSelector(item => item?.userReducer?.user)

  const getUser = () => {
    setTimeout(() => {
      GetUser()
    }, 2000)
  }

  useEffect(() => {
    getUser()
  }, [])

  const handleSearchFriend = (emailItem) => {
    if (userData.friends.includes(emailItem)) {
      setSearchFriend(true)
    } else {
      setSearchFriend(false)
    }
  }

  const handleAddDebit = () => {
    if (expenseTitle && expenseAmount) {
      const user = auth.currentUser
      createIncommingDocument(user, {
        title: expenseTitle,
        amount: expenseAmount,
        friendEmails: email,
        image,
      })
    } else {
      alert('fill all fields')
    }
  }

  function handleChange(event) {
    setFile(event.target.files[0])
  }

  const upload = () => {
    ImgUploader(file, setImage, setPercent)
  }

  return (
    <div className='shadow-xl absolute h-[300px] w-[340px] md:h-[300px] left-0 md:left-auto md:w-[500px] md:ml-20 lg:ml-80 -mt-[5%] z-50 bg-white'>
      <div className='flex'>
        <input
          placeholder='Enter Email to Search Friend'
          className='outline-none border-b-2 w-[200px] md:w-[300px] h-fit ml-5 px-2 mt-[50px] pb-2'
          value={email}
          onChange={(item) => setEmail(item.target.value)}
        />
        <h3
          className='font-bold text-[#427573] border-2 p-2 md:px-6
          hover:cursor-pointer rounded-2xl text-center md:ml-16 ml-4 h-fit w-fit mt-[40px]
          hover:bg-[#a6f0ed] hover:text-white '
          role='presentation'
          onClick={() => handleSearchFriend(email)}
        >
          Search
        </h3>
        <XMarkIcon
          className='h-7 m-2 hover:cursor-pointer'
          color='#6cb9b7'
          onClick={AddExpenseModal}
        />
      </div>
      { searchFriend && (
        <div className='mt-4'>
          <p className='text-[#427573] ml-6 font-thin text-sm'>1 user found: {email}</p>
          <input
            placeholder='Add Title e.g. pizza party'
            className='outline-none border-b-2 w-[200px] md:w-[300px] h-fit ml-5 px-2 mt-4 pb-2'
            value={expenseTitle}
            onChange={(item) => setExpenseTitle(item.target.value)}
          />
          <input
            placeholder='Add Amount e.g. pizza party'
            className='outline-none border-b-2 w-[200px] md:w-[300px] h-fit ml-5 px-2 mt-4 pb-2'
            type='number'
            value={expenseAmount}
            onChange={(item) => setExpenseAmount(item.target.value)}
          />
          <div className='flex'>
            <input type='file' onChange={handleChange} accept='/image/*' className='ml-4 mt-2' />
            { percent > 0 && percent < 100 && <p>Uploading {percent}%...</p> }

            <h3
              className='font-bold text-[#427573] border-2 p-1 md:px-4
              hover:cursor-pointer rounded-md text-center md:ml-16 ml-4 h-fit w-fit
              hover:bg-[#a6f0ed] hover:text-white '
              role='presentation'
              onClick={upload}
            >
              Upload
            </h3>
          </div>
          <h3
            className='font-bold text-[#427573] border-2 p-1 md:px-4
            hover:cursor-pointer rounded-md text-center md:ml-32 ml-4 h-fit w-fit
            hover:bg-[#a6f0ed] hover:text-white '
            role='presentation'
            onClick={() => handleAddDebit()}
          >
            Add Expense
          </h3>
        </div>
      )}
    </div>
  )
}

export default AddExpense

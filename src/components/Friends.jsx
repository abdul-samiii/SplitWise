import { useState } from 'react'
import AddFriend from './AddFriend'
import { IMAGES } from './Images'

const Friends = () => {
  const [FriendModal, setFriendModal] = useState(false)
  const data = [
    {
      img: IMAGES.dp, name: 'Duraiz Azam', email: 'demo@gmail.com', amount: 500, incomming: false,
    },
    {
      img: IMAGES.dp, name: 'Abdul Sami', email: 'demo@gmail.com', amount: 6400, incomming: true,
    },
    {
      img: IMAGES.dp, name: 'Ahsan Riaz', email: 'demo@gmail.com', amount: 30, incomming: true,
    },
    {
      img: IMAGES.dp, name: 'Mujtaba Shafiq', email: 'demo@gmail.com', amount: 340, incomming: false,
    },
    {
      img: IMAGES.dp, name: 'Bilal Hamid', email: 'demo@gmail.com', amount: 520, incomming: false,
    },
    {
      img: IMAGES.dp, name: 'Aqsa Tabbasum', email: 'demo@gmail.com', amount: 970, incomming: true,
    },
    {
      img: IMAGES.dp, name: 'Hamza Ali', email: 'demo@gmail.com', amount: 50, incomming: false,
    },
    {
      img: IMAGES.dp, name: 'Amina Tahir', email: 'demo@gmail.com', amount: 300, incomming: true,
    },
    {
      img: IMAGES.dp, name: 'Arwa Sajjad', email: 'demo@gmail.com', amount: 3400, incomming: false,
    },
    {
      img: IMAGES.dp, name: 'Abdullah Shahani', email: 'demo@gmail.com', amount: 700, incomming: false,
    },
  ]
  const AddFriendModal = () => {
    setFriendModal(!FriendModal)
  }

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
        data.map((item) => {
          console.log()
          return (
            <div key={Math.random()} className='m-4 flex hover:cursor-pointer w-fit'>
              <img src={item.img} className='h-14 rounded-lg' alt='img' />
              <div className='ml-4 mt-1'>
                <h3 className='font-bold'>{item.name}</h3>
                <p className='font-thin text-sm'>{item.email}</p>
              </div>
              <p className='font-thin text-sm ml-32 mt-3'>{item.incomming ? 'You are owed ' : 'You Owed '}${item.amount}</p>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default Friends

import { useState } from 'react'

import CreateGroup from './CreateGroup'
import { IMAGES } from './Images'

const Groups = () => {
  const [GroupModal, setGroupModal] = useState(false)
  const data = [
    {
      img: IMAGES.dp, name: 'Food Group', members: 4, amount: 500, incomming: false,
    },
    {
      img: IMAGES.dp, name: 'Office Group', members: 3, amount: 6400, incomming: true,
    },
    {
      img: IMAGES.dp, name: 'Best Friends', members: 66, amount: 30, incomming: true,
    },
    {
      img: IMAGES.dp, name: 'Colleagues', members: 12, amount: 340, incomming: false,
    },
    {
      img: IMAGES.dp, name: 'Old Friends', members: 3, amount: 520, incomming: false,
    },
    {
      img: IMAGES.dp, name: 'Girls Group', members: 8, amount: 970, incomming: true,
    },
    {
      img: IMAGES.dp, name: 'Boys Group', members: 5, amount: 50, incomming: false,
    },
    {
      img: IMAGES.dp, name: 'Clinets Group', members: 42, amount: 300, incomming: true,
    },
    {
      img: IMAGES.dp, name: 'Engineers', members: 12, amount: 3400, incomming: false,
    },
    {
      img: IMAGES.dp, name: 'Trip Group', members: 23, amount: 700, incomming: false,
    },
  ]

  const GroupModalToggle = () => {
    setGroupModal(!GroupModal)
  }

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
        data.map((item) => {
          console.log()
          return (
            <div key={Math.random()} className='m-4 flex hover:cursor-pointer w-fit'>
              <img src={item.img} className='h-14 rounded-lg' alt='img' />
              <div className='ml-4 mt-1'>
                <h3 className='font-bold'>{item.name}</h3>
                <p className='font-thin text-sm'>{item.members} members</p>
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

export default Groups

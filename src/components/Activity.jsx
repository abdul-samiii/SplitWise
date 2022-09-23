import { BellAlertIcon } from '@heroicons/react/24/solid'

import { IMAGES } from './Images'

const Activity = () => {
  const data = [
    {
      img: IMAGES.dp, title: 'Jawad Ali Added you as a Friend', time: 'Today',
    },
    {
      img: IMAGES.dp, title: 'You recieved $6600 from Ahmad Ali', time: 'Today',
    },
    {
      img: IMAGES.dp, title: 'You are Owed $400 by Sadia', time: 'Today',
    },
    {
      img: IMAGES.dp, title: 'You are added in group Trip', time: 'Yesterday',
    },
    {
      img: IMAGES.dp, title: 'You have to pay $540 to Ahsan', time: 'Yesterday',
    },
    {
      img: IMAGES.dp, title: 'You Paid $6500 to Ahsan', time: '10, September',
    },
    {
      img: IMAGES.dp, title: 'You are added as friend by Ahsan', time: '10, September',
    },
    {
      img: IMAGES.dp, title: 'You are added in a group Pizza Party', time: '7, September',
    },
    {
      img: IMAGES.dp, title: 'You recieved $200 from Awais', time: '7, September',
    },
    {
      img: IMAGES.dp, title: 'You paid $340 to Sheraz', time: '5, September',
    },
  ]
  return (
    <div className='ml-20 mt-14'>
      <div className='flex md:space-x-[50%] pb-4'>
        <h3 className='font-bold text-[#427573] text-xl ml-4 h-fit w-1/2 mt-20 border-b-2 pb-4'>
          Activity
        </h3>
      </div>
      <div className='h-64 w-1/2 overflow-scroll scrollbar-hide'>
        {
        data.map((item) => (
          <div key={Math.random()} className='m-4 flex hover:cursor-pointer w-fit '>
            <BellAlertIcon className='h-10 mt-1 rounded-lg' />
            <div className='ml-4 mt-1'>
              <h3 className='font-bold'>{item.title}</h3>
              <p className='font-thin text-sm'>{item.time}</p>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Activity

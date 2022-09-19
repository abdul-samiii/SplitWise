import { IMAGES } from './Images'

const HomeCompleted = () => {
  const data = [
    {
      img: IMAGES.dp, itemName: 'Pizza', amount: 500, incomming: false,
    },
    {
      img: IMAGES.dp, itemName: 'Dinner', amount: 6400, incomming: true,
    },
    {
      img: IMAGES.dp, itemName: 'Bike Fuel', amount: 30, incomming: true,
    },
    {
      img: IMAGES.dp, itemName: 'Uber fair', amount: 340, incomming: false,
    },
    {
      img: IMAGES.dp, itemName: 'Lunch', amount: 520, incomming: false,
    },
    {
      img: IMAGES.dp, itemName: 'Trip expense', amount: 970, incomming: true,
    },
    {
      img: IMAGES.dp, itemName: 'Dinner', amount: 50, incomming: false,
    },
    {
      img: IMAGES.dp, itemName: 'Team Activity', amount: 300, incomming: true,
    },
    {
      img: IMAGES.dp, itemName: 'Lunch', amount: 3400, incomming: false,
    },
    {
      img: IMAGES.dp, itemName: 'Shopping', amount: 700, incomming: false,
    },
  ]

  return (

    <div className='h-64 w-1/2 overflow-scroll scrollbar-hide'>
      {
        data.map((item) => {
          console.log()
          return (
            <div key={Math.random()} className='m-4 flex hover:cursor-pointer w-fit '>
              <img src={item.img} className='h-14 rounded-lg' alt='img' />
              <div className='ml-4 mt-1'>
                <h3 className='font-bold'>{item.itemName}</h3>
                <p className='font-thin text-sm'>{item.incomming ? 'You recieved ' : 'You Paid '}${item.amount}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default HomeCompleted

import { XMarkIcon } from '@heroicons/react/24/solid'

const AddFriend = ({ AddFriendModal }) => {
  console.log()
  return (
    <div className='shadow-xl absolute h-[300px] w-[340px] md:h-[300px] left-0 md:left-auto md:w-[500px] md:ml-20 lg:ml-80 -mt-[5%] z-50 bg-white flex'>
      <input
        placeholder='Enter Email to Add Friend'
        className='outline-none border-b-2 w-[200px] md:w-[300px] h-fit ml-5 px-2 mt-[50px] pb-2'
      />
      <h3 className='font-bold text-[#427573] border-2 p-2 md:px-6
        hover:cursor-pointer rounded-2xl text-center md:ml-16 ml-4 h-fit w-fit mt-[40px]
        hover:bg-[#a6f0ed] hover:text-white '
      >
        Search
      </h3>
      <XMarkIcon
        className='h-7 m-2 hover:cursor-pointer'
        color='#6cb9b7'
        onClick={AddFriendModal}
      />
    </div>
  )
}

export default AddFriend

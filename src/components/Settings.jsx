import { useState } from 'react'

const Settings = () => {
  const [currendPassword, setCurrentPassword] = useState()
  const [newPassword, setNewPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()

  return (
    <div className='md:ml-20 ml-14 pb-16'>
      <h3 className='font-bold text-[#427573] text-xl ml-4 h-fit w-1/2 mt-16 border-b-2 pb-4'>
        Change Password
      </h3>
      <div className='shadow-md ml-4 w-fit pr-8 md:w-1/2 h-1/2 py-10 flex flex-col space-y-12 mt-10'>
        <input
          placeholder='Current Password'
          className='outline-none border-b-2 ml-12 md:w-1/2 text-sm pl-2 pb-2'
          type='password'
          value={currendPassword}
          onChange={(item) => setCurrentPassword(item.target.value)}
        />
        <input
          placeholder='New Password'
          className='outline-none border-b-2 ml-12 md:w-1/2 text-sm pl-2 pb-2'
          type='password'
          value={newPassword}
          onChange={(item) => setNewPassword(item.target.value)}
        />
        <input
          placeholder='Confirm Password'
          className='outline-none border-b-2 ml-12 md:w-1/2 text-sm pl-2 pb-2'
          type='password'
          value={confirmPassword}
          onChange={(item) => setConfirmPassword(item.target.value)}
        />
        <h3 className='font-bold text-[#427573] border-2 md:p-4 p-2
        hover:cursor-pointer rounded-2xl text-center ml-12 h-fit w-fit mt-20
        hover:bg-[#a6f0ed] hover:text-white'
        >
          Change Password
        </h3>
      </div>
    </div>
  )
}

export default Settings

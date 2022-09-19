import {
  WalletIcon, UsersIcon, UserGroupIcon, NewspaperIcon, Cog6ToothIcon,
  WrenchScrewdriverIcon, ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../store/actions'

import './sidebar.css'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { Logout } = bindActionCreators(ActionCreators, dispatch)
  const navigate = useNavigate()
  const handleLogout = () => {
    Logout()
    navigate(0)
  }
  return (
    <div className='h-[5%] w-full bottom-0 md:w-[5%] md:h-auto xl:h-screen
      bg-[#00B8B0] fixed md:static'
    >
      <h1 className='text-white font-extrabold pt-8 hidden xl:inline-block px-3'>SplitWise</h1>
      <div className='m-auto flex md:flex-col md:space-y-16 md:mt-20'>
        <NavLink to='/home' className='m-auto'>
          <WalletIcon title='Add Expense' className='h-7 text-white hover:cursor-pointer' values='hi' />
        </NavLink>
        <NavLink to='/friends' className='m-auto'>
          <UsersIcon title='Friends' className='h-7 text-white hover:cursor-pointer' />
        </NavLink>
        <NavLink to='/groups' className='m-auto'>
          <UserGroupIcon title='Groups' className='h-7 text-white hover:cursor-pointer' />
        </NavLink>
        <NavLink to='/activity' className='m-auto'>
          <NewspaperIcon title='Activity' className='h-7 text-white hover:cursor-pointer' />
        </NavLink>
        <NavLink to='/account' className='m-auto'>
          <WrenchScrewdriverIcon title='Account' className='h-7 text-white hover:cursor-pointer' />
        </NavLink>
        <NavLink to='/settings' className='m-auto'>
          <Cog6ToothIcon title='Settings' className='h-7 text-white hover:cursor-pointer' />
        </NavLink>
        <div onClick={handleLogout} role='presentation' className='m-auto'>
          <ArrowLeftOnRectangleIcon title='Logout' className='h-7 text-white hover:cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default Sidebar

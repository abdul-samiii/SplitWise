import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { RedirectWithoutLogin } from '../auth'
import {
  Activity,
  Expense,
  Friends,
  Groups,
  IMAGES, Settings, Sidebar,
} from '../components'

const Home = () => {
  const location = useLocation()
  const data = useSelector(item => item.authReducer?.payload?.auth?.currentUser)

  return (
    <div className='flex'>
      <RedirectWithoutLogin />
      <Sidebar />
      <div>
        <div className='md:ml-24 md:mt-10 md:mr-10'>
          <img src={IMAGES.banner} className='h-[80%] hidden md:inline  rounded-xl w-[100%]' alt='banner' />
          <img src={IMAGES.mobileBanner} className='h-[80%] md:hidden rounded-xl w-[100%]' alt='banner' />
          <h1 className='font-bold  md:text-3xl -mt-[15%] md:-mt-[7%] relative text-white text-center ml-4 h-fit w-fit'>
            Welcome! {data?.email}
          </h1>
        </div>
        <div className='ml-20 mt-14'>
          <h3 className='font-bold text-[#427573] text-xl text-center ml-4 h-fit w-fit mt-20'>
            Statistics
          </h3>
          <div className='md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 -gap-2'>
            <div className='h-fit py-5 w-56 bg-slate-200 mt-6 ml-4 rounded-2xl'>
              <p className='text-center font-thin text-sm'>You are Owed</p>
              <h1 className='flex justify-center text-3xl font-bold'>$600</h1>
            </div>
            <div className='h-fit py-5 w-56 bg-slate-200 mt-6 ml-4 xl:-ml-4 rounded-2xl'>
              <p className='text-center font-thin text-sm'>You Owed</p>
              <h1 className='flex justify-center text-3xl font-bold'>$400</h1>
            </div>
            <div className='h-fit py-5 w-56 bg-slate-200 mt-6 ml-4 xl:-ml-8 rounded-2xl'>
              <p className='text-center font-thin text-sm'>Total Paid</p>
              <h1 className='flex justify-center text-3xl font-bold'>$6600</h1>
            </div>
            <div className='h-fit py-5 w-56 bg-slate-200 mt-6 ml-4 xl:-ml-12 rounded-2xl'>
              <p className='text-center font-thin text-sm'>Total Recieved</p>
              <h1 className='flex justify-center text-3xl font-bold'>$550</h1>
            </div>
          </div>
        </div>
        { location.pathname === '/home' && <Expense /> }
        { location.pathname === '/friends' && <Friends /> }
        { location.pathname === '/groups' && <Groups /> }
        { location.pathname === '/activity' && <Activity /> }
        { location.pathname === '/settings' && <Settings /> }
      </div>
    </div>
  )
}

export default Home

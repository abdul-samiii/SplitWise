import { IMAGES } from '../../components/Images'

const Top = () => {
  const handleLogin = () => alert('Login Success!')

  return (
    <>
      <h2 className='text-center font-extrabold text-5xl pt-5 text-[#427573]'>Splitwise</h2>
      <p className='text-center py-5 text-[#00B8B0]'>Your growth partner</p>
      <div
        role='presentation'
        onClick={handleLogin}
        className='border-[1px] py-2 rounded-md mt-2 w-[85%] flex justify-center m-auto hover:cursor-pointer space-x-4'
      >
        <img src={IMAGES.googleIcon} alt='icon' className='h-6' />
        <p className='text-center '>Continue with Google</p>
      </div>
    </>
  )
}
export default Top

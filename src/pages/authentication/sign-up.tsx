import './sign-up.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <section className='sign-up-container h-screen border-2 border-red-500 bg-black grid grid-cols-2'>
        <div className=' h border-2 border-blue-500 col-span-2'>

        </div>
        <div className='px-4 flex flex-col gap-9 border-4 col-span-2 '>
            <form action="" className='flex flex-col gap-[2rem]'>
                <div className='flex flex-col gap-4 '>
                    <label htmlFor="fname " className='font-[400] text-[12px]'> First Name</label>
                    <input type="text" id='fname' name='fname' placeholder='john' required  className='border border-[#0000ff] h-[44px] pl-[16px] rounded-md shadow-lg outline-none flex items-center  '/>
                </div>
                <div className='flex flex-col gap-4 '>
                    <label htmlFor="lname " className='font-[400] text-[12px]'> Last Name</label>
                    <input type="text" id='lname' name='lname' placeholder='doe' required  className='border border-[#0000ff] h-[44px] pl-[16px] rounded-md shadow-lg outline-none flex items-center  '/>
                </div>
                <div className='flex flex-col gap-4 '>
                    <label htmlFor="email " className='font-[400] text-[12px]'> Email</label>
                    <input type="email" id='email' name='email' placeholder='johndoe@gmail.com' required  className='border border-[#0000ff] h-[44px] pl-[16px] rounded-md shadow-lg outline-none flex items-center  '/>
                </div>
                <div className='flex flex-col gap-4 '>
                    <label htmlFor="password " className='font-[400] text-[12px]'> Password</label>
                    <input type="password" id='password' name='password' placeholder='johndoe@gmail.com' required autoComplete='on' className='border border-[#0000ff] h-[44px] pl-[16px] rounded-md shadow-lg outline-none flex items-center  '/>
                </div>
                <div className='flex flex-col gap-4 '>
                    <label htmlFor="confirm_password " className='font-[400] text-[12px]'>Confirm Password</label>
                    <input type="password" id='confiem_password' name='confirm_password' placeholder='xxxxxxxx' required  className='border border-[#0000ff] h-[44px] pl-[16px] rounded-md shadow-lg outline-none flex items-center  '/>
                </div>
                    <div>
                    <button  className='h-[44px]  rounded-md  outline-none flex justify-center items-center bg-[#0000ff] font-[500] text-white text-[16px] border-2 w-full'> Create Account </button>
                    <p className='w-10/12 mx-auto mt-2'>Have an account ? <Link to='/signin' className='text-blue-600'>Sign in here</Link> </p>
                    </div>
            </form>
        </div>
    </section >
  )
}

export default SignUp
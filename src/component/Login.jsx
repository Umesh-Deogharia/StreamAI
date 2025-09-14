import React, { useState } from 'react'
import Header from './Header'
import BackgroundImg from "../assets/images/Background.jpg"

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  }
  return (
    <div >
      <Header />
      <div className='h-full absolute bg-black '>
        <img className='w-[100vw] h-full ' src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_large.jpg" alt="" />
      </div>
      <div className='bg-black inset-0 absolute opacity-45 h-full'></div>
      <form action="" className='absolute bg-black w-full sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 my-24 m-auto mx-auto right-0 left-0 flex flex-col opacity-80 z-10 rounded-lg '>
        <h1 className='pl-7 text-white text-3xl font-bold py-5'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        <div className='flex flex-col w-10/12 h-full m-auto gap-2 '>
          {!isSignInForm && <input type="text" name="Name" id="Name" placeholder='Full Name' className='p-2 my-2  w-full bg-gray-400 rounded' />}
          <input type="email" name="email" id="email" placeholder='Email Address' className='p-2 my-2  w-full bg-gray-400 rounded' />
          <input type="password" name="pass" id="pass" placeholder='Password' className='p-2 my-2  w-full bg-gray-400 rounded' />
          <button type='button' className='p-3 my-4 rounded cursor-pointer bg-red-600 text-white w-full '>{isSignInForm ? "Sign In" : "Sign up"}</button>
          <h3 className='text-center w-full text-white'>{isSignInForm && "OR"}</h3>
          {isSignInForm && <button className='bg-gray-100 cursor-pointer my-2 p-3' > Use a sign-in code</button>}
          <span className='underline text-white cursor-pointer mx-auto'>{isSignInForm && "Forgot Password?"}</span>
        </div>

        <div className='flex flex-col ps-8 pt-2 w-10/12 gap-2'>
          <div>
            <input type="checkbox" name="" id="remember" className='w-4 h-4 mr-3' />
            <label htmlFor="remember" className='text-lg text-white'>Remember me</label>

          </div>
          {/* <div> */}
          <span className='text-gray-200'>{isSignInForm ? "New to Netflix?" : "Already Sign Up? "}<span className='cursor-pointer hover:underline font-bold text-white' onClick={toggleSignInForm}>{isSignInForm ? "Sign up now.":"Sign in now"}</span></span>
          <span className='text-xs text-white'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
          <pre className='text-blue-700 underline pb-4'>Learn more.</pre>
          {/* <div> */}
        </div>
      </form>
    </div>
  )
}

export default Login

import React, { useRef, useState } from 'react'
import { updateProfile } from "firebase/auth";
import Header from './Header'
import BackgroundImg from "../assets/images/Background.jpg"
import Footer from './Footer';
import ValidData from '../utils/ValidData';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adduser } from '../features/userSlice';


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  }
  const handleValidation = () => {
    // console.log(email.current.value
    // );
    // console.log(password.current.value);
    // console.log(name.current.value);
    const nameValue = !isSignInForm && name.current ? name.current.value : undefined;
    const message = ValidData(email.current.value, password.current.value, nameValue, isSignInForm);
    // console.log(checkValidation);
    setErrorMessage(message);
    // signin/signup
    if (message) return;
    if (!isSignInForm) {
      // Signup
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          const {uid, email, displayName,photoURL} = auth;
                          dispatch(adduser({uid:uid, email:email, displayName:displayName,photoURL}));

          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdp10ULpdkSWe1szCM5e70s2LK8j66DCTpQVWstkNmXEhyOfnhJT-f2UfyOigGfb5QBG0&usqp=CAU"
          }).then(() => {
            navigate("/browse");
          }).catch((error) => {
            <Error error={error} />
          });


          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage)
        });
    } else {
      // Signin
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage)
        });
    }
  }
  return (
    <div>
      <section className='h-screen bg-cover bg-center ' style={{ backgroundImage: `url(${BackgroundImg})` }}>
        <div className='bg-black inset-0 absolute opacity-65 h-full'></div>
        <Header />
        <form action="" className='absolute  bg-black w-full sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 my-24 m-auto mx-auto right-0 left-0 flex flex-col opacity-70 z-10 rounded-lg '>
          <h1 className='pl-7 text-white text-3xl font-bold py-5'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          <div className='flex flex-col w-10/12 h-full m-auto gap-2 '>
            {!isSignInForm && <input type="text" name="Name" id="Name" ref={name} placeholder='Full Name' className='p-4 my-4 border border-white placeholder-white text-white w-full bg-[#040000] opacity-50 rounded' />}
            <input type="email" name="email" id="email" placeholder='Email Address' ref={email} className='border border-white placeholder-white text-white w-full bg-[#040000] opacity-50 p-4 my-4   rounded' />
            <input type="password" name="pass" id="pass" ref={password} placeholder='Password' className='p-4 my-4 border border-white placeholder-white text-white w-full bg-[#040000] opacity-50 rounded' />
            <p className='text-red-400'>{errorMessage}</p>
            <button type='button' className='p-2 my-2 rounded cursor-pointer bg-red-600 text-white w-full' onClick={handleValidation}>{isSignInForm ? "Sign In" : "Sign up"}</button>
            <h3 className='text-center w-full text-white'>{isSignInForm && "OR"}</h3>
            {isSignInForm && <button className='bg-gray-100 opacity-40 rounded cursor-pointer my-2 p-2' > Use a sign-in code</button>}
            <span className='underline text-white cursor-pointer mx-auto'>{isSignInForm && "Forgot Password?"}</span>
          </div>
          <div className='flex flex-col ps-8 pt-2 w-10/12 gap-2'>
            <div>
              <input type="checkbox" name="" id="remember" className='w-4 h-4 mr-3' />
              <label htmlFor="remember" className='text-lg text-white'>Remember me</label>
            </div>
            <span className='text-gray-200'>{isSignInForm ? "New to Netflix?" : "Already Sign Up? "}<span className='cursor-pointer hover:underline font-bold text-white' onClick={toggleSignInForm}>{isSignInForm ? "Sign up now." : "Sign in now"}</span></span>
            <span className='text-xs text-white'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
            <pre className='text-blue-700 underline pb-4'>Learn more.</pre>

          </div>
        </form>
      </section>
      {/* <Footer /> */}
    </div>
  )
}

export default Login
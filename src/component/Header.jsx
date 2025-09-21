import React from 'react'
import logo from "../assets/images/Logo.png"
// import userIcon from "../assets/images/User-icon.jpeg"
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Header = () => {
  const user = useSelector(store => store.user);
  console.log("user ==>>>>>>>>>", user);
  const navigate = useNavigate();
  
  function handleSignout() { 
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      <Error error={error} />
    });
  }
  return (
    <div className='absolute z-10 flex justify-between items-center w-full '>
      <img className='border-amber-400 w-44' src={logo} alt="logo" />        
      {user && <div className='flex items-center gap-2'>
        <img src={user?.photoURL} alt="user-icon" className='w-10 h-10 rounded-lg ' />
        <button className='bg-amber-400 text-white px-2 py-2 rounded cursor-pointer font-bold' onClick={handleSignout}>(Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header

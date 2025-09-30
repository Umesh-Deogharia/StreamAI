import React, { useEffect } from 'react'
import logo from "../assets/images/Logo.png"
// import userIcon from "../assets/images/User-icon.jpeg"
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { adduser, removeuser } from '../features/userSlice';
import { toggleGptSearchView } from '../features/gptSlice';
import { SUPPORTED_LANG } from '../utils/languageConstant';
import { changeLanguage } from '../features/configSlice';



const Header = () => {
  const user = useSelector(store => store.user);
  const gptSearchshow = useSelector(store=>store.gpt.showGptSearch)
  // console.log("user ==>>>>>>>>>", user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleGptSearchClick() {
    dispatch(toggleGptSearchView());
  }
  
  function handleLangChange(e) {
    dispatch(changeLanguage(e.target.value));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(adduser({ uid: uid, email: email, displayName: displayName, photoURL }));
        navigate('/browse');
      } else {
        // User is signed out
        // ...
        dispatch(removeuser());
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, [])



  function handleSignout() { 
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate("/");
    }).catch((error) => {
      // An error happened.
      <Error error={error} />
    });
  }
  return (
    <div className='absolute z-10 flex justify-between items-center w-full '>
      <img className='border-amber-400 w-44' src={logo} alt="logo" />        
      { user && <div className='flex items-center gap-2'>
        {gptSearchshow && <select name="" id="" className='bg-gray-800 text-white p-1 rounded-lg' onChange={handleLangChange}>
          {SUPPORTED_LANG.map((elem) => <option key={elem.identifier} value={elem.identifier}>{elem.name}</option>)}
        </select>}
        <button className='px-4 py-2 rounded-lg bg-red-500 text-white 'onClick={handleGptSearchClick}>{gptSearchshow?"GPT Search":"Home"}</button>
        <img src={user?.photoURL} alt="user-icon" className='w-10 h-10 rounded-lg ' />
        <button className='bg-amber-400 text-white px-2 py-2 rounded cursor-pointer font-bold' onClick={handleSignout}>(Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header

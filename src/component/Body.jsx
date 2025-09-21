import React, { useEffect } from 'react'
import Browse from './Browse'
import Header from './Header'
import Login from './login'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { adduser, removeuser } from '../features/userSlice'

const Body = () => {
    const dispatch = useDispatch();
    const appProvider = createBrowserRouter([
        {
            path:"/",
            element: <Login/>,
        },
        {
            path:"/browse",
            element: <Browse />,
        },
        {
            path:"/header",
            element: <Header />,
        }
    ])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user){
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const {uid, email, displayName,photoURL} = user;
                dispatch(adduser({uid:uid, email:email, displayName:displayName,photoURL}));
            } else {
                // User is signed out
                // ...
                dispatch(removeuser());
            }
        }); 
    },[])

    return (
      <RouterProvider router={appProvider}/>
  )
}

export default Body
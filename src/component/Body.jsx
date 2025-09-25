import React from 'react'
import Browse from './Browse'
import Header from './Header'
import Login from './login'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
// import {onAuthStateChanged } from "firebase/auth";
// import { auth } from '../utils/firebase'
// import { useDispatch } from 'react-redux'
// import { adduser, removeuser } from '../features/userSlice'

const Body = () => {
    // const dispatch = useDispatch();
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

    

    return (
      <RouterProvider router={appProvider}/>
  )
}

export default Body
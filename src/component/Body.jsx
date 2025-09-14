import React from 'react'
import Browse from './Browse'
import Header from './Header'
import Login from './login'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const Body = () => {
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
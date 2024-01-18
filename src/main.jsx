import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Mainlayout from './Mainlayout.jsx'
import Home from './Components/pages/Home/Home.jsx'

const route=createBrowserRouter([{
  path:"/",
  element:<Mainlayout></Mainlayout>,
  children:[{
    path:"/",
    element:<Home></Home>
  }
]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}>

    </RouterProvider>

  </React.StrictMode>,
)

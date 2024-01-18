import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Mainlayout from './Mainlayout.jsx'
import Home from './Components/pages/Home/Home.jsx'
import AllPets from './Components/pages/AllPets/AllPets'

const route=createBrowserRouter([{
  path:"/",
  element:<Mainlayout></Mainlayout>,
  children:[
    {
    path:"/",
    element:<Home></Home>
  },
  {
    path:"/allPets",
    element:<AllPets></AllPets>,
    loader:  () => fetch('https://pet-zone-project-next-js.vercel.app/petdata')
  }
]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}>

    </RouterProvider>

  </React.StrictMode>,
)

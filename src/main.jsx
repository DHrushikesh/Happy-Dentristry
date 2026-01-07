import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Login from './Login/Login.jsx'
import Dashboard from './Dashboard/Dashboard.jsx'

const router = createBrowserRouter(
  [
    
    {
      path: "/",
      element:<App/>,
      children:[
      //   {
      //   path:"/signup",
      //   element:<SignUp/>,
      // },
      {
        path:"/login",
        element:<Login/>,
      },
      
      {
        path:"/",
        element:<Dashboard/>,
      }
    ],
      errorElement:<h1>Unable to Connect 404</h1>
    }
  ])

~

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>
)

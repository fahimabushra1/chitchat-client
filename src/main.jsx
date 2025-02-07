import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routers/Router.jsx'
// import AuthProvider from './authProvider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AuthProvider> */}
    <RouterProvider router={router} />
    <Toaster/>
    {/* </AuthProvider> */}
  </React.StrictMode>,
)

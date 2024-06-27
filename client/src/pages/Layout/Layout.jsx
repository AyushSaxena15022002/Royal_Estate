import React, { useContext, useEffect } from 'react'
import './Layout.scss'
import Navbar from '../../components/Navbar/Navbar.jsx'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext.jsx'

function Layout() {
  return (
    <div className='layout'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  )
}

function RequireAuth() {
  const { updateUser, currentUser } = useContext(AuthContext)

  return !currentUser ? (
    <Navigate to='/login' />
  ) : (
    <div className='layout'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  )
}
export { Layout, RequireAuth }

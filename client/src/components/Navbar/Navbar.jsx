import React, { useContext, useState } from 'react'
import './Navbar.scss'
import { userData } from '../../lib/dummydata'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

function Navbar() {
  const [open, setOpen] = useState(false)
  const { currentUser } = useContext(AuthContext)

  // console.log(currentUser)
  return (
    <nav>
      <div className='left'>
        <Link to='/' className='logo'>
          <img src='/logo.png' alt='Logo_Img' />
          <span>Royal Estate</span>
        </Link>
        <Link to='/'>Home</Link>
        <Link to='/add'>Add Post</Link>
        <Link to='/profile/update'>Update Profile</Link>
        <Link to='/profile'>Profile</Link>
      </div>
      <div className='right'>
        {currentUser ? (
          <div className='user'>
            <img src={currentUser.avatar || '/noavatar.jpg'} alt='' />
            <span>{currentUser.username}</span>
            <Link to='/profile' className='profile'>
              {/* <div className='notification'>3</div> */}
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to='/login'>Sign-In</Link>
            <Link to='/register' className='register'>
              Sign-UP
            </Link>
          </>
        )}
        <div className='menuIcon'>
          <img
            src='/menu.png'
            alt='/menu_button'
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? 'menu active' : 'menu'}>
          <Link to='/'>Home</Link>
          <Link to='/list'>Demo_List</Link>
          <Link to='/:id'>Single_Item</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/'>Sign-In</Link>
          <Link to='/'>Sign-UP</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

import React, { useContext, useState } from 'react'
import './Login.scss'
import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'
import apiRequest from '../../lib/apiRequest'
import { AuthContext } from '../../context/AuthContext'

function Login() {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { updateUser } = useContext(AuthContext)

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    const formData = new FormData(e.target)
    const username = formData.get('username')
    const password = formData.get('password')

    // console.log(username, email, password)

    try {
      const res = await apiRequest.post('/auth/login', {
        username,
        password,
      })

      updateUser(res.data)
      navigate('/')
    } catch (error) {
      console.log(error)
      setError(error.response.data.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='login'>
      <div className='formContainer'>
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name='username'
            type='text'
            placeholder='Username'
            required
            minLength={3}
            maxLength={25}
          />
          <input
            name='password'
            type='password'
            placeholder='Password'
            required
          />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to='/register'>{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className='imgContainer'>
        <img src='/bg.png' alt='' />
      </div>
    </div>
  )
}

export default Login

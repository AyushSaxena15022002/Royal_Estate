import React, { useContext } from 'react'
import './HomePage.scss'
import SearchBar from '../../components/SearchBar/SearchBar'
import { AuthContext } from '../../context/AuthContext'

function HomePage() {
  const { currentUser } = useContext(AuthContext)

  console.log(currentUser)
  return (
    <div className='homePage'>
      <div className='textContainer'>
        <div className='wrapper'>
          <h1 className='title'>
            Find Real Estate & Get Your Dream Place At Your Price
          </h1>
          <p>
            Welcome to Your Dream Home/Stay! Explore our exclusive listings of
            beautiful properties tailored to fit every lifestyle. From cozy
            apartments to luxurious estates, we offer personalized service to
            help you find your perfect home. Start your journey with us today!
          </p>

          <SearchBar />
          <div className='boxes'>
            <div className='box'>
              <h1>5+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className='box'>
              <h1>5000+</h1>
              <h2>Locations</h2>
            </div>
            <div className='box'>
              <h1>75,000+</h1>
              <h2>Customers</h2>
            </div>
          </div>
        </div>
      </div>

      <div className='imgContainer'>
        <img src='/bg.png' alt='Background_Img' />
      </div>
    </div>
  )
}

export default HomePage

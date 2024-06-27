import React, { useState } from 'react'
import './Slider.scss'

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null)
  const changeSilde = (direction) => {
    if (direction === 'left') {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1)
      } else {
        setImageIndex(imageIndex - 1)
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0)
      } else {
        setImageIndex(imageIndex + 1)
      }
    }
  }
  return (
    <div className='slider'>
      {imageIndex !== null && (
        <div className='fullSlider'>
          <div className='arrow' onClick={() => changeSilde('left')}>
            <img src='/arrow.png' alt='' />
          </div>
          <div className='imgContainer'>
            <img src={images[imageIndex]} alt='' />
          </div>
          <div className='arrow' onClick={() => changeSilde('right')}>
            <img src='/arrow.png' className='right' alt='' />
          </div>
          <div className='close' onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className='bigImage'>
        <img src={images[0]} alt='' onClick={() => setImageIndex(0)} />
      </div>
      <div className='smallImages'>
        {images.slice(1).map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              alt=''
              onClick={() => setImageIndex(index + 1)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Slider

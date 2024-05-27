import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className='banner'>
        <img src={imageUrl} alt='aboutImg' />
      </div>
      <div className='banner'>
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
        We are a cutting-edge Medical Institute dedicated to advancing healthcare through research, education, and patient care. Comprising a team of skilled professionals, researchers, and clinicians, we strive to push the boundaries of medical science and improve the quality of life for individuals worldwide. Our state-of-the-art facilities and innovative approaches enable us to tackle complex medical challenges and develop breakthrough treatments. Committed to excellence and integrity, we foster a collaborative environment that encourages discovery, learning, and innovation. Together, we are shaping the future of medicine and making a lasting impact on global health.
        </p>
      </div>
    </div>
  )
}

export default Biography

import { faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF'
import { faArrowRight, faEnvelope, faPhone, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'350px'}} className='bg-primary d-flex justify-content-center align-items-center flex-column text-light '>
      <div className="d-flex justify-content-evenly mb-5 w-100">
        <div style={{width:'400px'}} className="intro">
          <h3><FontAwesomeIcon icon={faTruckFast} className='me-1'/>DailyCart</h3>
          <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>

          <p>Code licensed Luminar, docs CC BY 3.0.</p>

          <p>Currently v5.3.2.</p>
        </div>
        <div className=" d-flex flex-column">
          <h3>Links</h3>
          <Link to={'/'} className='text-decoration-none text-light'>Home</Link>
          <Link to={'/wishlist'} className='text-decoration-none text-light'>Wishlist</Link>
          <Link to={'/cart'} className='text-decoration-none text-light'>Cart</Link>
        </div>
        <div className=" d-flex flex-column">
          <h3>Guides</h3>
          <a href='https://react.dev/' className='text-decoration-none text-light'>React</a>
          <a href='https://react.dev/' className='text-decoration-none text-light'>React Bootstrap</a>
          <a href='https://react.dev/' className='text-decoration-none text-light'>React Router</a>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <div className="d-flex">
            <input type="text" className="form-control" placeholder='Email Here' />
            <button className="btn"><FontAwesomeIcon icon={faArrowRight} className='text-light'/></button>
          </div>
          <div className="d-flex align-items-center justify-content-between mt-4">
            <FontAwesomeIcon icon={faFacebookF}/>
             <FontAwesomeIcon icon={faTwitter}/>
            <FontAwesomeIcon icon={faWhatsapp}/>
            <FontAwesomeIcon icon={faInstagram}/>
            <FontAwesomeIcon icon={faEnvelope}/>
            <FontAwesomeIcon icon={faPhone}/>
           
          </div>
        </div>
      </div>
      <div className="fw-bold">Copyright © August 2025 Batch, Daily Cart. Built with React Redux.</div>
    </div>
  )
}

export default Footer
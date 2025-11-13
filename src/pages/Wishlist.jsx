import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'

function Wishlist() {
  return (
    <>
    <Header/>
    <div className='my-5 container'>
       <div className="row pt-5">
          <div className="col-md-3 mb-2">
              <Card >
                <Card.Img height={'250px'} variant="top" src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" />
                <Card.Body className='text-center'>
                  <Card.Title>Title</Card.Title>
                  <div className="d-flex justify-content-evenly">
                    <button className="btn text-danger fs-4"><FontAwesomeIcon icon={faHeartCircleXmark}/></button>
                    <button className="btn text-success fs-4"><FontAwesomeIcon icon={faCartPlus}/></button>
                  </div>
                </Card.Body>
              </Card>
          </div>
        </div>
    </div>
    </>
  )
}

export default Wishlist
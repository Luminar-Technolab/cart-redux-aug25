import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Wishlist() {
  const userWishlist = useSelector(state=>state.wishlistReducer)
  return (
    <>
    <Header/>
    <div className='my-5 container'>
       {
        userWishlist?.length>0 ?
        <>
          <h1 className='pt-5 fw-bold text-primary'>Wishlist</h1>
          <div className="row ">
           {
            userWishlist?.map(product=>(
               <div key={product?.id} className="col-md-3 mb-2">
                  <Card >
                    <Card.Img height={'250px'} variant="top" src={product?.thumbnail} />
                    <Card.Body className='text-center'>
                      <Card.Title>{product?.title}</Card.Title>
                      <div className="d-flex justify-content-evenly">
                        <button className="btn text-danger fs-4"><FontAwesomeIcon icon={faHeartCircleXmark}/></button>
                        <button className="btn text-success fs-4"><FontAwesomeIcon icon={faCartPlus}/></button>
                      </div>
                    </Card.Body>
                  </Card>
              </div>
            ))
           }
          </div>
        </>
        :
        <div style={{minHeight:'80vh'}} className='d-flex justify-content-center align-items-center flex-column'>
          <img width={'25%'} src="https://schoolville.com/assets/img/empty-cart-illustration.gif" alt="empty cart" />
          <h3>Your Wishlist is Empty!!!</h3>
          <Link to={'/'} className="btn btn-primary" >Shop More</Link>
        </div>
       }
    </div>
    </>
  )
}

export default Wishlist
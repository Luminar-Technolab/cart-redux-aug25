import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function View() {
  return (
    <>
    <Header/>
    <div  className='container my-5'>
      <div style={{height:'80vh'}} className="row pt-5 align-items-center">
        <div className="col-md-6 text-center">
          <img className='img-fluid' src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" alt="product" />
          <div className="d-flex justify-content-evenly mt-5">
            <button className="btn btn-info">ADD TO WISHLIST</button>
            <button className="btn btn-success">ADD TO CART</button>
          </div>
        </div>
        <div className="col-md-6">
          <h1>title</h1>
          <h2 className='text-danger'>$ price</h2>
          <h4 className='mt-2'>Brand  : </h4>
          <h4>Category   : </h4>
          <h4>Description   : </h4>
          <h5 className='fw-bolder my-3'>Client Reviews</h5>
          <div className="my-2 border rounded shadow p-2">
            <p><span className='fw-bold'>clientname :</span> message </p>
            <p>Rating : number <FontAwesomeIcon icon={faStar} className='text-warning'/> </p>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default View
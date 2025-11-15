import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import Swal from 'sweetalert2'

function View() {
  // get path parameter from url
  const {id} = useParams()
  // console.log(id);
  //state to store product details
  const [product,setProduct] = useState({})
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)
  // console.log(product);
  
  useEffect(()=>{
    getProductDetails()
  },[])

  const getProductDetails = ()=>{
    const allProducts = JSON.parse(sessionStorage.getItem("produts"))
    setProduct(allProducts.find(item=>item.id==id))
  }

  const handleAddToWishlist = ()=>{
    const existingProduct = userWishlist?.find(item=>item.id==id)
    if(existingProduct){
      Swal.fire({
      title: 'Sorry!!!',
      text: "Product already in your wishlist...",
      icon: 'error',
      confirmButtonText: 'Ok'
    })
    }else{
      dispatch(addToWishlist(product))
    }
  }
  
  return (
    <>
    <Header/>
    <div  className='container my-5'>
      <div style={{minHeight:'80vh'}} className="row pt-5 align-items-center">
        <div className="col-md-6 text-center">
          <img className='img-fluid' src={product?.thumbnail} alt="product" />
          <div className="d-flex justify-content-evenly mt-5">
            <button onClick={handleAddToWishlist} className="btn btn-info">ADD TO WISHLIST</button>
            <button className="btn btn-success">ADD TO CART</button>
          </div>
        </div>
        <div className="col-md-6">
          <h1>{product?.title}</h1>
          <h2 className='text-danger'>$ {product?.price}</h2>
          <h4 className='mt-2'>Brand  : {product?.brand}</h4>
          <h4>Category   : {product?.category} </h4>
          <h5>Description   : {product?.description} </h5>
          <h5 className='fw-bolder my-3'>Client Reviews</h5>
          {
            product?.reviews?.length>0 &&
            product?.reviews?.map((item,index)=>(
            <div key={index} className="my-2 border rounded shadow p-2">
              <p><span className='fw-bold'>{item.reviewerName} :  </span> {item.comment} </p>
              <p>Rating : {item?.rating} <FontAwesomeIcon icon={faStar} className='text-warning'/>   
              
              </p>
            </div>
            ))
          }
        </div>
      </div>

    </div>
    </>
  )
}

export default View
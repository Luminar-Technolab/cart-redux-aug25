import React from 'react'
import Header from "../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem } from '../redux/slices/cartSlice';

function Cart() {
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  return (
    <>
    <Header/>
      {
        userCart?.length>0 ?
        <div className='container pt-5'>
        <h1 className="text-danger my-5">Cart Summary</h1>
        <div className="row mb-5">
          <div className="col-md-8 border p-5 rounded">
            <table className="table ">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>...</th>
                </tr>
              </thead>
              <tbody>
                {
                  userCart?.map((product,index)=>(
                    <tr>
                      <td>{index+1}</td>
                      <td>{product?.title}</td>
                      <td><img width={'50px'} height={'50px'} src={product?.thumbnail} alt="product" /></td>
                      <td>
                        <div className="d-flex">
                          <button className="btn fs-3">-</button>
                          <input style={{width:'50px'}} type="text" value={product?.quantity} className="form-control" readOnly/>
                          <button className="btn fs-4">+</button>
                        </div>
                      </td>
                      <td>$ {product?.totalPrice}</td>
                      <td><button onClick={()=>dispatch(removeCartItem(product?.id))} className="btn"><FontAwesomeIcon icon={faTrash} className='text-danger'/></button></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            <div className="float-end mt-3">
              <button className="btn btn-danger me-5">EMPTY CART</button>
              <Link to={'/'} className="btn btn-info">SHOP MORE</Link>              
            </div>
          </div>
          <div className="col-md-4">
            <div className="border p-5 rounded shadow">
              <h3>Total Amount : <span className='text-danger'>$ 19.99</span></h3>
              <hr />
              <div className="d-grid">
                <button className="btn btn-success">CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
        </div>
        :
        <div style={{minHeight:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
          <img width={'25%'} src="https://schoolville.com/assets/img/empty-cart-illustration.gif" alt="empty cart" />
          <h3>Your Cart is Empty!!!</h3>
          <Link to={'/'} className="btn btn-primary" >Shop More</Link>
        </div>
      }
    </>
  )
}

export default Cart
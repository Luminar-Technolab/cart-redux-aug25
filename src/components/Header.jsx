import { faTruckFast,faHeart,faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Navbar,Container,Nav,Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { search } from '../redux/slices/productSlice'

function Header() {
  const dispatch = useDispatch()
  //to get wishlist count from store
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)
  return (
    <Navbar expand="lg" className="bg-primary fixed-top ">
      <Container>
        <Navbar.Brand ><Link to={'/'} className='text-decoration-none text-light fw-bold'>
        <FontAwesomeIcon icon={faTruckFast} className='me-1'/>DailyCart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto  ">
            <Nav.Item><input onChange={e=>dispatch(search(e.target.value))} type="text" className="form-control " placeholder='Search Product' /></Nav.Item>
            <Link to={'/wishlist'} className='text-decoration-none text-light fw-bold ms-lg-2'>
            <FontAwesomeIcon icon={faHeart} className='me-1 text-danger'/>Wishlist <Badge pill bg="secondary ">{userWishlist.length}</Badge></Link>
            <Link to={'/cart'} className='text-decoration-none text-light fw-bold ms-md-5'>
              <FontAwesomeIcon icon={faCartPlus} className='me-1 text-success'/>Cart <Badge pill bg="secondary">{userCart.length}</Badge></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
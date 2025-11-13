import { faTruckFast,faHeart,faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Navbar,Container,Nav,Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar expand="lg" className="bg-primary fixed-top">
      <Container>
        <Navbar.Brand ><Link to={'/'} className='text-decoration-none text-light fw-bold'>
        <FontAwesomeIcon icon={faTruckFast} className='me-1'/>DailyCart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link ><Link to={'/wishlist'} className='text-decoration-none text-light fw-bold '>
            <FontAwesomeIcon icon={faHeart} className='me-1 text-danger'/>Wishlist <Badge bg="secondary">10</Badge></Link>
            </Nav.Link>
            <Nav.Link ><Link to={'/cart'} className='text-decoration-none text-light fw-bold'>
              <FontAwesomeIcon icon={faCartPlus} className='me-1 text-success'/>Cart <Badge bg="secondary">20</Badge></Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
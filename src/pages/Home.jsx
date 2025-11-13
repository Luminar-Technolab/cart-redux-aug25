import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <Header/>
    <div className='m-5 '>
      <div className="row pt-5">
        <div className="col-md-3 mb-2">
            <Card >
              <Card.Img height={'250px'} variant="top" src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" />
              <Card.Body className='text-center'>
                <Card.Title>Title</Card.Title>
                <Link to={`/products/1/view`} className='btn btn-primary'>View More...</Link>
              </Card.Body>
            </Card>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
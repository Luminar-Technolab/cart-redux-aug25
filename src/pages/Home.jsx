import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice'

function Home() {
  const dispatch = useDispatch()
  const {allProducts,loading,error} = useSelector((state)=>state.productReducer)
  console.log(allProducts);
  
  useEffect(()=>{
    dispatch(getAllProducts())
  },[])

  return (
    <>
    <Header/>
    <div className='m-5 '>
      {
        loading ?
        <div className='p-5 text-center'>
          <img width={'100px'} src="https://media1.tenor.com/images/d6cd5151c04765d1992edfde14483068/tenor.gif?itemid=5662595" alt="loading" />
          <span className='fw-bolder ms-5'>Loading...</span>
        </div>
        :
        <div className="row pt-5">
        {
          allProducts?.length>0 ?
            allProducts?.map(product=>(
              <div key={product?.id} className="col-md-3 mb-2">
                <Card >
                  <Card.Img height={'250px'} variant="top" src={product?.thumbnail} />
                  <Card.Body className='text-center'>
                    <Card.Title>{product?.title.slice(0,18)}...</Card.Title>
                    <Link to={`/products/${product?.id}/view`} className='btn btn-primary'>View More...</Link>
                  </Card.Body>
                </Card>
            </div>
            )) 
          :
          <p className='fw-bold fs-5'>Product Not Found!!!</p>
        }
        </div>
      }
    </div>
    </>
  )
}

export default Home
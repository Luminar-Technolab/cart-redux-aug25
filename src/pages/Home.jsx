import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons'

function Home() {
  const dispatch = useDispatch()
  const {allProducts,loading,error} = useSelector((state)=>state.productReducer)
  // console.log(allProducts);
  const [currentPage,setCurrentpage] = useState(1)
  const productsPerPage = 8
  const totalPages = Math.ceil(allProducts?.length/productsPerPage)
  const currentPageLastIndex = currentPage * productsPerPage
  const currentPageFirstIndex = currentPageLastIndex - productsPerPage
  const visibleProductsArray = allProducts?.slice(currentPageFirstIndex,currentPageLastIndex)

  useEffect(()=>{
    dispatch(getAllProducts())
  },[])

  const navigateNext = ()=>{
    if(currentPage!=totalPages){
      setCurrentpage(currentPage+1)
    }
  }
  const navigatePrev = ()=>{
    if(currentPage!=1){
      setCurrentpage(currentPage-1)
    }
  }

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
            visibleProductsArray?.map(product=>(
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
          <p className='fw-bold fs-5 '>Product Not Found!!!</p>
        }
          <div className="text-center fw-bold my-3 fs-5">
            <button onClick={navigatePrev} className="btn"> <FontAwesomeIcon icon={faBackward}/> </button>
            {currentPage} of {totalPages}
            <button onClick={navigateNext} className="btn"> <FontAwesomeIcon icon={faForward}/> </button>
          </div>

        </div>
      }
    </div>

    </>
  )
}

export default Home
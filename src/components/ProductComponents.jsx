import React from 'react'
import { Col, Row,Container } from 'react-bootstrap';
import Slider from "react-slick";
import { useEffect,useState } from 'react';
import axios from "axios"

const ProductComponents = () => {

    let [product, setProduct] = useState([])
    useEffect(()=>{
      // async function AllData(){
      //   let data = await fetch("http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10")
      //   let re = await data.json()

      //   setProduct(re)
      //   //setProduct(data.data.Items)
      // }
      // AllData()
      // console.log(product?.Items)

      (async()=>{
        let data = await fetch("http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10")
        let re = await data.json()
        setProduct(re)
        
      })()
      console.log(product)
    },[])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 667,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
            
      ]
    }
    
  return (
    <Container className='my-5'>
      <Row className='ddd'>
        <Col>
          <Slider {...settings}>
            {/* {product.map((item,i)=>(
                
              <div  key={i} className='product__content--main'>
                  <img className='product__img rounded img-fluid ml-1' src={item.ImageUrl}/>
                  <div className='product__des'>
                    <h4 className='text-center mt-3'>{item.Name}</h4>
                    <h4 className='product__price text-center mt-3'>Price : {item.Price}</h4>
                  </div>
              </div>
            ))} */}
            
                
              {/* <div  key={i} className='product__content--main'>
                  <img className='product__img rounded img-fluid ml-1' src=/>
                  <div className='product__des'>
                    <h4 className='text-center mt-3'>{}</h4>
                    <h4 className='product__price text-center mt-3'>Price : {item.Price}</h4>
                  </div>
              </div> */}
           
          </Slider>
        </Col>
      </Row>
    </Container>
  )
}
export default ProductComponents
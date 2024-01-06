import React from 'react'
import ProductComponents from './ProductComponents'
import { Col, Container, Row } from 'react-bootstrap'

const RecomendedProduct = () => {
  return (
    <Container className='my-5'>
        <Row>
          <Col>
            <h1>Recomended</h1>
            <ProductComponents/>
          </Col>
        </Row>
    </Container>
  )
}

export default RecomendedProduct
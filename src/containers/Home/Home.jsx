import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Home.scss'
import imgLibro from './../../img/libro.jpg'

function Home() {
  return (
    <Container fluid>
        <Row>
            <Col className='colImg'>
            <img className='imgPrin' alt='' src={imgLibro}></img>
            </Col>
        </Row>
    </Container>
  )
}

export default Home
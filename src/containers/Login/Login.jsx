import React from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import "./Login.scss";

import { GiBeveledStar } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
function Login() {
  return (
    <Container fluid className="containerLogin">
    <Row className="pt-5">
      <Col className=" pt-3 d-flex justify-content-center">
        <div className=" d-flex justify-content-center align-items-center flex-column">
          <h1 className=" d-flex justify-content-center align-items-center titleConatinerLogin tracking-in-contract-bck">
            Iniciar sesión
          </h1>
          <h6 className="mt-3">
            Y podrás reservar nuestras salas y asistir a los mejores eventos
            musicales de Valencia
          </h6>
        </div>
      </Col>
    </Row>
    <Row className=" pt-3 d-flex justify-content-center">
      <Col md={6} className=" pt-3 d-flex justify-content-center flex-column">
        <InputGroup className="mb-3 ">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            type="email"
            placeholder="Correo electrónico"
            aria-label="e-mail"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3 ">
          <InputGroup.Text id="basic-addon1"><GiBeveledStar/></InputGroup.Text>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            aria-label="password"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Col>
    </Row>
    <Row>
      <Col className=" mt-3 d-flex justify-content-center">
      <Button variant="secondary">Iniciar sesión</Button>
      </Col>
    </Row>
  </Container>
  )
}

export default Login
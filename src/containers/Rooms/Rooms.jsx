import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Rooms.scss";
import room from "./../../img/rooms.jpg";
function Rooms() {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <img className="w-75" src={room} alt=""></img>
        </Col>
        <Col xs={12} md={6} className=" mt-3 d-flex justify-content-center">
          <div className=" d-flex justify-content-center align-items-center">
            <h1 className=" d-flex justify-content-center align-items-center titleConatinerRooms text-focus-in">
              Salas de estudio y ensayo
            </h1>
          </div>
        </Col>
      </Row>
      <Row className="mt-5 d-flex justify-content-center">
        <Col md ={7} className='mb-3' >
          <div className="d-flex justify-content-center flex-column">
            <h3 className="d-flex justify-content-center titleRoom">Nombre de la sala</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              alias quaerat perferendis, sit quia molestiae quam iure asperiores
              facilis quis impedit? Sed enim nemo similique. Atque dolorem quo
              excepturi velit?
            </p>
            <h6>De 09:00 a 20:00h</h6>
            <h6>El precio es de: 5€/día</h6>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Rooms;

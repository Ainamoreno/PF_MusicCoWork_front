import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Events.scss";
import auditorio from "./../../img/auditorio1.jpg";
function Events() {
  return (
    <Container>
      <Row className="mt-5">
        <Col className=" mt-3 d-flex justify-content-center">
          <div className=" d-flex justify-content-center align-items-center">
            <h1 className=" d-flex justify-content-center align-items-center titleConatinerEvents text-focus-in">
              Próximos eventos
            </h1>
          </div>
        </Col>
      </Row>
      <Row className="mt-5 d-flex justify-content-center">
        <Col md={7} className="mb-3">
          <div className="d-flex justify-content-center flex-column">
            <h3 className="d-flex justify-content-center titleEvent">
              Nombre del evento
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              alias quaerat perferendis, sit quia molestiae quam iure asperiores
              facilis quis impedit? Sed enim nemo similique. Atque dolorem quo
              excepturi velit?
            </p>
            <h6>Fecha: 12-10-2023</h6>
          </div>
          <div className="d-flex justify-content-end mt-3">
              <Button variant="secondary">Confirma asistencia</Button>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center mb-3">
        <img className="w-75" src={auditorio} alt=""></img>
      </Row>
    </Container>
  );
}

export default Events;

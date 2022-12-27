import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.scss";
import imgLibro from "./../../img/libro.jpg";

function Home() {
  return (
    <Container fluid>
      <Row className="rowTitle mb-5">
        <Col className="p-0 d-flex justify-content-center colImg">
          <img className="imgPrin" alt="" src={imgLibro}></img>
          <div className="pt-5">
            <h1 className="pb-2 titleHome">Coworking para músicos</h1>
          </div>
          <div className="pt-5">
            <h3 className="pb-2 subTitle">Tu espacio de música y trabajo</h3>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="mb-5">
          <div>
            <h4 className="d-flex justify-content-center">
              El primer espacio de coworking i música en Valencia
            </h4>
            <p className="d-flex justify-content-center">
              Si necesitas un espacio para ensayar totalmente equipado, puedes
              regístrarte y alquilar por días nuestras salas.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <div className="mt-5">
          <h2 className="d-flex justify-content-center">Servicios</h2>
        </div>
        <Col className="col-3">
          <div className="mt-5">
            <h4 className="d-flex justify-content-center">Salas de ensayo</h4>
            <p className="d-flex justify-content-center">
              Si necesitas un espacio para ensayar totalmente equipado, puedes
              regístrarte y alquilar por días nuestras salas.
            </p>
          </div>
          <div className="mt-5">
            <h4 className="d-flex justify-content-center">Salas de estudio</h4>
            <p className="d-flex justify-content-center">
              Si necesitas un espacio para ensayar totalmente equipado, puedes
              regístrarte y alquilar por días nuestras salas.
            </p>
          </div>
        </Col>
        <Col className="col-3">
          <div className="mt-5">
            <h4 className="d-flex justify-content-center">Sala de eventos</h4>
            <p className="d-flex justify-content-center">
              Si necesitas un espacio para ensayar totalmente equipado, puedes
              regístrarte y alquilar por días nuestras salas.
            </p>
          </div>
          <div className="mt-5">
            <h4 className="d-flex justify-content-center">Zona de descanso</h4>
            <p className="d-flex justify-content-center">
              Si necesitas un espacio para ensayar totalmente equipado, puedes
              regístrarte y alquilar por días nuestras salas.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

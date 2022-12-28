import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UncontrolledExample from "../../components/Carousel/Carousel";
import "./About.scss";

function About() {
  return (
    <Container fluid className="aboutDesign">
      {/* <Row className="rowDesign1">
        <Col className="mt-3 display-flex"></Col>
      </Row> */}
      <Row >
        <Col className="p-5">
          <h3 className="tracking-in-contract-bck">Sobre MusicCoWork</h3>
          <p>
            Somos un grupo de amigos que decidimos dar el paso de crear este
            pequeño y gran proyecto.
            <br/>
            La música nos unió en su momento y nuestro gran problema siempre ha sido dónde poder llevar a cabo los ensayos.
            Por lo tanto, un día nos surgió esta idea y nos pusimos manos a la obra hasta conseguirlo.
          </p>
          <p>MusicCoWork es un lugar donde puedes alquilar diferentes salas totalmente equipadas para tus días de estudio, disponemos de salas tanto individuales como hasta máximo
            3 o 4 personas.
            <br/>
            Y además, tenemos un auditorio con una capacidad de 400 personas en el que realizamos diferentes actos al mes y puedes reservar tu asistencia.
          </p>
        </Col>
      </Row>
      <Row className="pb-4">
        <Col>
        <UncontrolledExample/>
        </Col>
      </Row>
    </Container>
  );
}

export default About;

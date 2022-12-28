import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.scss";

import { useNavigate } from "react-router-dom";

import { SlMusicToneAlt } from "react-icons/sl";
import { SlBubbles } from "react-icons/sl";
import { GiBookshelf } from "react-icons/gi";
import { AiOutlineAudio } from "react-icons/ai";

function Home() {
  const navigate = useNavigate();
  return (
    <Container fluid>
      <Row className="rowTitle ">
        <Col className="p-0 d-flex justify-content-center colImg">
          <div className="pt-5 divTitle">
            <h1 className="pb-2 titleHome tracking-in-contract-bck">Coworking para músicos</h1>
          </div>
          <div className="pt-5">
            <h3 className="pb-2 subTitle">Tu espacio de música y trabajo</h3>
          </div>
        </Col>
      </Row>
      <Row className="secondRow">
        <Col className="mt-5 mb-3">
          <div>
            <h4 className="d-flex justify-content-center">
              El primer espacio de coworking i música en Valencia
            </h4>
            <p className="d-flex justify-content-center">
              Si necesitas un espacio para ensayar totalmente equipado, puedes
              <strong className="register" onClick={() => navigate("/register")}>&nbsp; registrarte &nbsp;</strong> y alquilar por días
              nuestras salas.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <div className="mt-5 d-flex justify-content-center">
          <h2 className="d-flex justify-content-center titleServicios">
            Servicios{" "}
          </h2>
        </div>
        <Col xs={12} md={3}>
          <div className="mt-5">
            <h4 className="d-flex justify-content-center focus-in-expand-fwd">
              Salas de ensayo <SlMusicToneAlt className="icon" />{" "}
            </h4>
            <p className="d-flex justify-content-center">
              Salas de ensayo totalmente equipadas para que vengas con tu
              instrumento y dediques el día a lo que más te gusta.
            </p>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <div className="mt-5">
            <h4 className="d-flex justify-content-center focus-in-expand-fwd">
              Zona de descanso <SlBubbles className="icon" />
            </h4>
            <p className="d-flex justify-content-center">
              Y para descansar durante los días de estudio o una vez acabada la
              sesión de ensayo, nuestra sala de relax.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs={12} md={3}>
          {" "}
          <div className="mt-5">
            <h4 className="d-flex justify-content-center focus-in-expand-fwd">
              Salas de estudio <GiBookshelf className="icon" />
            </h4>
            <p className="d-flex justify-content-center">
              Si necesitas estudiar alguna asignatura de conservatorio o del
              instituto además de ensayar instrumento, también tenemos salas
              totalmente equipadas para ello.
            </p>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <div className="mt-5">
            <h4 className="d-flex justify-content-center focus-in-expand-fwd">
              Sala de eventos <AiOutlineAudio className="icon" />{" "}
            </h4>
            <p className="d-flex justify-content-center">
              Cada mes tenemos diferentes audiciones y/o actuaciones de los
              mejores músicos de Valencia. Podrás reservar tu asistencia a los
              eventos que desees asistir.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

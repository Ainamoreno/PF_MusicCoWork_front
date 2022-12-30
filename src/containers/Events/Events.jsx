import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import "./Events.scss";
import auditorio from "./../../img/auditorio1.jpg";
import { getEvents } from "../../services/events";
import Event from "../../components/Event/Event";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllRooms();
  }, []);

  const getAllRooms = () => {
    setLoading(true);
    getEvents().then((res) => {
      setLoading(false);
      setEvents(res.data.data);
    });
  };

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
        {!loading ? (
          <Event events={events} />
        ) : (
          <div className=" d-flex justify-content-center align-items-center mb-3">
            <Spinner />
          </div>
        )}
      </Row>
      <Row className="d-flex justify-content-center mb-3">
        <img className="w-75" src={auditorio} alt=""></img>
      </Row>
    </Container>
  );
}

export default Events;

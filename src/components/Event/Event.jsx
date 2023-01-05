import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { userData } from "../../containers/User/userSlice";
import { useNavigate } from "react-router-dom";
import { reservationEvent } from "./../../services/events";
import AutohideExample from "../Toast/Toast";
import "./Event.scss";
import { deleteEvent } from "./../../services/admin";

function Event({ events }) {
  const credentialsUser = useSelector(userData);
  const navigate = useNavigate();
  const [messageError, setMessageError] = useState("");
  const [classButton, setClassButton] = useState("");
  const [show, setShow] = useState(false);

  const makeAReservationEvent = (idEvent) => {
    reservationEvent(credentialsUser.token, idEvent).then((res) => {
      setClassButton("");
      setMessageError("");
      if (res.data.message === "Ya está reservado.") {
        setShow(true);
      }
      if(res.data.message === "Se ha confirmado la asistencia al evento correctamente."){
        navigate('/reservationsevents')
      }
    });
    // navigate('/reservationsevents')
  };

  const deleteAEvent = (idEvent) => {
    deleteEvent(credentialsUser.token, idEvent).then((res) => {
      if (res.data.message === "Se ha eliminado el evento correctamente.") {
        navigate("/");
      }
    });
  };
  if (!credentialsUser.active) {
    return (
      <Col md={7} className="mb-3">
        {events.map((room, index) => (
          <div
            key={index}
            className="d-flex justify-content-center flex-column"
          >
            <h3 className="d-flex justify-content-center titleRoom mt-5">
              {room.name}
            </h3>
            <p>{room.description}</p>
            <h6>Fecha de actuación: {room.date}</h6>

            <Row>
              <Col
                md={6}
                xs={12}
                className="d-flex justify-content-between mt-3 mb-2 "
              ></Col>
              <Col md={6} xs={12} className="mb-4 ">
                <div>
                  <Button
                    variant="secondary"
                    onClick={() => navigate("/login")}
                  >
                    Inicia sesión para poder asistir
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </Col>
    );
  } else {
    return (
      <Col md={7} className="mb-3 ">
        {events.map((event, index) => (
          <div
            key={index}
            className="d-flex justify-content-center flex-column"
          >
            <h3 className="d-flex justify-content-center titleevent">
              {event.name}
            </h3>
            <p>{event.description}</p>
            <h6>Se realizará el día: {event.date}</h6>

            <Row>
              <Col
                md={6}
                xs={12}
                className="d-flex justify-content-between mt-3 mb-2 colEvent"
              ></Col>
              <Col md={6} xs={12} className="mb-4 ">
                <div>
                  <Button
                  
                    disabled={classButton}
                    variant="secondary"
                    onClick={() => makeAReservationEvent(event.id)}
                  >
                   <a href="#toastEv">Reserva</a> 
                  </Button>
                  <div>{messageError}</div>
                </div>
                
                {credentialsUser.credentials.role_id === 2 ? (
                  <Button
                    variant="secondary"
                    className="headersName mt-2"
                    onClick={() => deleteAEvent(event.id)}
                  >
                    Eliminar evento
                  </Button>
                ) : (
                  <></>
                )}
              </Col>
            </Row>
          </div>
        ))}
        <AutohideExample className="toastEvent" setShow={setShow} show={show} />
      </Col>
    );
  }
}

export default Event;

import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { userData } from "../../containers/User/userSlice";
import { useNavigate } from "react-router-dom";

function Event({events}) {
    const credentialsUser = useSelector(userData);
    
    const navigate = useNavigate();

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
                  >
                  </Col>
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
          <Col md={7} className="mb-3">
            {events.map((room, index) => (
              <div
                key={index}
                className="d-flex justify-content-center flex-column"
              >
                <h3 className="d-flex justify-content-center titleRoom">
                  {room.name}
                </h3>
                <p>{room.description}</p>
                <h6>{room.date}</h6> 

                <Row>
                  <Col
                    md={6}
                    xs={12}
                    className="d-flex justify-content-between mt-3 mb-2 "
                  >
                  </Col>
                  <Col md={6} xs={12} className="mb-4 ">
                    <div>
                      <Button
                        variant="secondary"
                        // onClick={() => makeAReservationRoom(room.id)}
                      >
                        Reserva
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </Col>
        );
      }
  
}

export default Event
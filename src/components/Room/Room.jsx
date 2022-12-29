import React from "react";
import { Button, Col } from "react-bootstrap";
import ResponsiveDatePickers from "../DatePicker/DatePicker";
import { useSelector } from "react-redux";
import { userData } from "../../containers/User/userSlice";
import { useNavigate } from "react-router-dom";

function Room({ rooms }) {
  const navigate = useNavigate();

  console.log(rooms);
  const idRoom = (id) => {
    console.log(id);
  };
  const credentialsUser = useSelector(userData);

  if (!credentialsUser.active) {
    return (
      <Col md={7} className="mb-3">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="d-flex justify-content-center flex-column"
          >
            <h3 className="d-flex justify-content-center titleRoom">
              {room.name}
            </h3>
            <p>{room.description}</p>
            <h6>{room.horary}</h6>
            <h6>El precio es de: {room.price}€/día</h6>
            <div className="d-flex justify-content-between mt-3 mb-5">
              <ResponsiveDatePickers disabled={"disabled"} />
              <div>
                <Button variant="secondary" onClick={() => navigate("/login")}>
                  Inicia sesión para reservar
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Col>
    );
  } else {
    return (
      <Col md={7} className="mb-3">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="d-flex justify-content-center flex-column"
          >
            <h3 className="d-flex justify-content-center titleRoom">
              {room.name}
            </h3>
            <p>{room.description}</p>
            <h6>{room.horary}</h6>
            <h6>El precio es de: {room.price}€/día</h6>
            <div className="d-flex justify-content-between mt-3 mb-5">
              <ResponsiveDatePickers />
              <div>
                <Button variant="secondary" onClick={() => idRoom(room.id)}>
                  Reserva
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Col>
    );
  }
}

export default Room;

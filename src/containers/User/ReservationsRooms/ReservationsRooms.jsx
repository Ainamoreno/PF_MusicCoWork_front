import React, { useEffect, useState } from "react";
import { myReservations } from "./../../../services/rooms";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { Col, Container, Row } from "react-bootstrap";

function ReservationsRooms() {
  const credentialsUser = useSelector(userData);
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    showReservations();
  }, []);

  const showReservations = () => {
    myReservations(credentialsUser.token).then((res) => {
      setReservations(res.data.date);
    });
  };

  if (reservations.length === 0) {
    return (
      <Container>
        <Row>
          <Col className="mt-3 mb-3">
            <h3>Reservas realizadas:</h3>
            <h3>No existe ninguna reserva</h3>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container>
        {reservations.map((reserv, index) => (
          <Row>
            <Col className="mt-3 mb-3">
            <h3>Reservas realizadas:</h3>
              <h3>Sala reservada: {reserv.name}</h3>
              <h3>Fecha de la reserva: {reserv.date}</h3>
            </Col>
          </Row>
        ))}
      </Container>
    );
  }
}

export default ReservationsRooms;

import React, { useEffect, useState } from "react";
import { myReservations, deleteReservationRoom } from "./../../../services/rooms";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import Pagination from "react-js-pagination";
import "./ReservationsRooms.scss";


function ReservationsRooms() {
  const credentialsUser = useSelector(userData);
  const [reservations, setReservations] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);
  const { current_page, per_page, total } = pagination;

  useEffect(() => {
    showReservations();
  }, []);

  const showReservations = (pageNumber) => {
    setLoading(true);
    myReservations(credentialsUser.token, pageNumber).then((res) => {
      setLoading(false);
      setReservations(res.data.date.data);
      setPagination(res.data.date);
    });
  };

  const cancelRservation = (idReservation) => {
    deleteReservationRoom(credentialsUser.token, idReservation).then((res)=> {
      if(res.data.message === "Se ha cancelado la reserva correctamente."){
        showReservations();
      }
    })
  }

  

  if (reservations.length === 0) {
    return (
      <Container>
        <Row>
          <h3 className="mt-5 d-flex justify-content-center titleReservations">
            Reservas realizadas:
          </h3>
          {!loading ? (
            <Col className="mt-3 mb-3">
              <h3 className=" d-flex justify-content-center">
                No existe ninguna reserva
              </h3>
            </Col>
          ) : (
            <div className=" d-flex justify-content-center align-items-center mt-5 mb-3">
              <Spinner />
            </div>
          )}
        </Row>
      </Container>
    );
  } else {
    return (
      <Container>
        <h3 className="mt-5 d-flex justify-content-center titleReservations">
          Reservas realizadas:
        </h3>
        {!loading ? (
          reservations.map((reserv, index) => (
            <div>
              <Row key={index} className="rowReservationDesign mb-3">
                <Col className="mt-2 mb-3">
                  <h4 className=" d-flex justify-content-center">
                    SALA RESERVADA:
                  </h4>
                  <h5 className=" d-flex justify-content-center">
                    {reserv.name}
                  </h5>
                  <h6 className=" d-flex justify-content-center">
                    Fecha de la reserva: {reserv.date}
                  </h6>
                </Col>
                <Col
                  md={6}
                  xs={12}
                  className="mb-4 d-flex justify-content-center align-items-center"
                >
                  <div>
                    <Button
                      variant="secondary"
                      onClick={() => cancelRservation(reserv.id)}
                    >
                      Cancelar reserva
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          ))
        ) : (
          <div className=" d-flex justify-content-center align-items-center mt-5 mb-3">
            <Spinner />
          </div>
        )}
        <Row>
          <Col>
            <Pagination
              activePage={current_page}
              totalItemsCount={total}
              itemsCountPerPage={per_page}
              onChange={(current_page) =>showReservations(current_page)}
              itemClass="page-item"
              linkClass="page-link"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ReservationsRooms;

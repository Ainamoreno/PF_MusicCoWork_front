import React, { useEffect, useState } from "react";
import { myReservationsEvents } from "./../../../services/events";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Pagination from "react-js-pagination";

function ReservationsEvents() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({});
  const { current_page, per_page, total } = pagination;

  const credentialsUser = useSelector(userData);
  useEffect(() => {
    showReservations();
  }, []);

  const showReservations = (pageNumber) => {
    setLoading(true);
    myReservationsEvents(credentialsUser.token, pageNumber).then((res) => {
      setLoading(false);
      setReservations(res.data.data.data);
      setPagination(res.data.data);
    });
  };
  if (reservations.length === 0) {
    return (
      <Container className="reservationsDesign">
        <Row>
          <h3 className="mt-5 d-flex justify-content-center titleReservations">
            Asistencias a actos reservadas:
          </h3>
          {!loading ? (
            <Col className="mt-3 mb-3">
              <h3 className=" d-flex justify-content-center">
                No existe ninguna reserva de asistencia
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
      <Container className="reservationsDesign">
        <h3 className="mt-5 d-flex justify-content-center titleReservations">
          Asistencias a actos reservadas:
        </h3>
        {!loading ? (
          reservations.map((reserv, index) => (
            <div>
              <Row key={index} className="rowReservationDesign mb-3">
                <Col className="mt-2 mb-3">
                  <h4 className=" d-flex justify-content-center">
                    ACTO RESERVADO:
                  </h4>
                  <h5 className=" d-flex justify-content-center">
                    {reserv.name}
                  </h5>
                  <h6 className=" d-flex justify-content-center">
                    Fecha del acto: {reserv.date}
                  </h6>
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
          <Col className="d-flex justify-content-center">
            <Pagination
              activePage={current_page}
              totalItemsCount={total}
              itemsCountPerPage={per_page}
              onChange={(current_page) => showReservations(current_page)}
              itemClass="page-item"
              linkClass="page-link"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ReservationsEvents;

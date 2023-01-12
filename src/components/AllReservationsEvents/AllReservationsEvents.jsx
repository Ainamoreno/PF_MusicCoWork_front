import React, { useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { userData } from "./../../containers/User/userSlice";
import { getAllReservationsEvents } from "./../../services/admin";
import Collapse from "react-bootstrap/Collapse";
import Pagination from "react-js-pagination";
import './AllReservationsEvents.scss';

function AllReservationsEvents() {
  const credentialsUser = useSelector(userData);

  const [openOne, setOpenOne] = useState(false);
  const [allReservationsEvents, setAllReservationsEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({});
  const { current_page, per_page, total } = pagination;
  const getReservationsEvents = (isOpen, pageNumber) => {
    setOpenOne(isOpen);
    setLoading(true);
    getAllReservationsEvents(credentialsUser.token, pageNumber).then((res) => {
      setLoading(false);
      setAllReservationsEvents(res.data.data.data);
      setPagination(res.data.data);
    });
  };

  return (
    <>
      <Button
        className="my-3 d-flex buttonCollapse"
        onClick={() => getReservationsEvents(!openOne)}
        aria-controls="example-collapse-text"
        aria-expanded={openOne}
      >
        Mostrar todas las reservas de eventos
      </Button>
      <Collapse in={openOne}>
        <Container>
          <Row className="mt-5 d-flex justify-content-center align-items-center">
            <Col xs={12} md={6} className=" mt-3 d-flex justify-content-center">
              <div className=" d-flex justify-content-center align-items-center">
                <h5 className=" d-flex justify-content-center align-items-center titleConatinerRooms">
                  Eventos reservados
                </h5>
              </div>
            </Col>
          </Row>
          <Row className="mt-5 d-flex justify-content-center">
            {!loading ? (
              <Container>
                <Row className="rowTableEvents">
                  <Col className=" d-flex justify-content-center align-items-center flex-column">
                    <h5>Usuario</h5>
                  </Col>
                  <Col className=" d-flex justify-content-center align-items-center flex-column">
                    <h5>Evento reservado:</h5>
                  </Col>
                  <Col className=" d-flex justify-content-center align-items-center flex-column">
                    <h5>Fecha:</h5>
                  </Col>
                </Row>
                <Row>
                  {allReservationsEvents.map((user, index) => (
                    <Container>
                      <Row className="mt-5">
                        <Col
                          xs={12}
                          sm={4}
                          key={index}
                          className=" d-flex justify-content-center align-items-center flex-column mb-3"
                        >
                          <div className="me-3">
                            <h6>
                              
                              {user.name_user} {user.surname}
                            </h6>
                          </div>
                        </Col>
                        <Col className=" d-flex justify-content-center align-items-center">
                          <h6>
                            {user.name_event}
                          </h6>
                        </Col>
                        <Col className=" d-flex justify-content-center align-items-center">
                          <p>{user.date}</p>
                        </Col>
                      </Row>
                    </Container>
                  ))}
                </Row>
                <Row>
                  <Col className="d-flex justify-content-center mt-5">
                    <Pagination
                      activePage={current_page}
                      totalItemsCount={total}
                      itemsCountPerPage={per_page}
                      onChange={(current_page) =>
                        getReservationsEvents(openOne, current_page)
                      }
                      itemClass="page-item"
                      linkClass="page-link"
                    />
                  </Col>
                </Row>
              </Container>
            ) : (
              <div className=" d-flex justify-content-center align-items-center mb-3">
                <Spinner />
              </div>
            )}
          </Row>
        </Container>
      </Collapse>
    </>
  );
}

export default AllReservationsEvents;

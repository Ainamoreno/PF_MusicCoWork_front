import React, { useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { userData } from "./../../containers/User/userSlice";
import { getAllReservationsRooms } from "./../../services/admin";
import Collapse from "react-bootstrap/Collapse";
import Pagination from "react-js-pagination";

function AllReservationsRooms() {
  const credentialsUser = useSelector(userData);

  const [openOne, setOpenOne] = useState(false);
  const [allReservationsRooms, setAllReservationsRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({});

  const { current_page, per_page, total } = pagination;
  const getReservationsRooms = (isOpen, pageNumber) => {
    setOpenOne(isOpen);
    setLoading(true);
    getAllReservationsRooms(credentialsUser.token, pageNumber).then((res) => {
      setLoading(false);
      setAllReservationsRooms(res.data.data.data);
      setPagination(res.data.data);
    });
  };
  return (
    <>
      <Button
        className="mt-3 d-flex buttonCollapse"
        onClick={() => getReservationsRooms(!openOne)}
        aria-controls="example-collapse-text"
        aria-expanded={openOne}
      >
        Mostrar todas las reservas de salas
      </Button>
      <Collapse in={openOne}>
        <Container>
          <Row className="mt-5 d-flex justify-content-center align-items-center">
            <Col xs={12} md={6} className=" mt-3 d-flex justify-content-center">
              <div className=" d-flex justify-content-center align-items-center">
                <h5 className=" d-flex justify-content-center align-items-center titleConatinerRooms">
                  Salas reservadas
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
                    <h5>Sala reservada:</h5>
                  </Col>
                  <Col className=" d-flex justify-content-center align-items-center flex-column">
                    <h5>Fecha:</h5>
                  </Col>
                </Row>
                <Row>
                  {allReservationsRooms.map((user, index) => (
                    <Row className="mt-5">
                      <Col
                        xs={12}
                        sm={4}
                        key={index}
                        className="d-flex justify-content-center align-items-center mb-3"
                      >
                        <div className="me-3">
                          <h6>
                           
                            {user.name_user} {user.surname}
                          </h6>
                        </div>
                      </Col>
                      <Col className="d-flex justify-content-center align-items-center ">
                        <h6>
                          {user.name_room}
                        </h6>
                      </Col>
                      <Col className="d-flex justify-content-center align-items-center ">
                        <p>{user.date}</p>
                      </Col>
                    </Row>
                  ))}
                </Row>
                <Row>
                  <Col className="d-flex justify-content-center mt-5">
                    <Pagination
                      activePage={current_page}
                      totalItemsCount={total}
                      itemsCountPerPage={per_page}
                      onChange={(current_page) =>
                        getReservationsRooms(openOne, current_page)
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

export default AllReservationsRooms;

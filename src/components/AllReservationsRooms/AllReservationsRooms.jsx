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
                <Row>
                  {allReservationsRooms.map((user, index) => (
                    <Col
                      xs={12}
                      sm={4}
                      key={index}
                      className="d-flex justify-content-center align-items-center mb-5"
                    >
                      <div className="cardUser me-3">
                        <h5>
                          Reserva realizada por:{" "}
                          <strong>{user.name_user}</strong>
                        </h5>
                        <h6>Sala reservada: <strong>{user.name_room}</strong></h6>
                        <p>Fecha: {user.date}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
                <Row>
                  <Col className="d-flex justify-content-center">
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

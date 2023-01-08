import React, { useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { userData } from "./../../containers/User/userSlice";
import { getAllUsers } from "./../../services/admin";
import { deleteUser } from "./../../services/admin";
import Collapse from "react-bootstrap/Collapse";
import Pagination from "react-js-pagination";
import "./AllUsers.scss";

function AllUsers() {
  const credentialsUser = useSelector(userData);

  const [openOne, setOpenOne] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({});
  const { current_page, per_page, total } = pagination;

  const getUsers = (isOpen, pageNumber) => {
    setOpenOne(isOpen);
    setLoading(true);
    getAllUsers(credentialsUser.token, pageNumber).then((res) => {
      setLoading(false);
      setUsers(res.data.data.data);
      setPagination(res.data.data);
    });
  };

  const deleteAUser = (idUser) => {
    deleteUser(credentialsUser.token, idUser).then((res) => {
      if(res.data.message === "Se ha eliminado el ususario correctamente."){
        getUsers(openOne, current_page)
      }
    });
  };
  return (
    <>
      <Button
        className="mt-3 d-flex buttonCollapse"
        onClick={() => getUsers(!openOne)}
        aria-controls="example-collapse-text"
        aria-expanded={openOne}
      >
        Mostrar todos los usuarios
      </Button>
      <Collapse in={openOne}>
        <Container>
          <Row className="mt-5 d-flex justify-content-center align-items-center">
            <Col xs={12} md={6} className=" mt-3 d-flex justify-content-center">
              <div className=" d-flex justify-content-center align-items-center">
                <h5 className=" d-flex justify-content-center align-items-center titleConatinerRooms">
                  Todos los usuarios registrados
                </h5>
              </div>
            </Col>
          </Row>
          <Row className="mt-5 d-flex justify-content-center">
            {!loading ? (
              <Container>
                <Row>
                  {users.map((user, index) => (
                    <Col
                      key={index}
                      className=" d-flex justify-content-center align-items-center mb-5"
                    >
                      <div className="cardUser me-3">
                        <h5>
                          Nombre: <strong>{user.name}</strong>
                        </h5>
                        <h6>Apellidos: {user.surname}</h6>
                        <p>E-mail: {user.email}</p>
                        <div className="d-flex justify-content-center">
                           <Button
                        
                        variant="danger"
                        onClick={() => deleteAUser(user.id)}
                      >
                        Eliminar usuario
                      </Button>
                        </div>
                       
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
                  onChange={(current_page) => getUsers(openOne, current_page)}
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

export default AllUsers;

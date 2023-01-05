import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { userData } from "./../../containers/User/userSlice";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "./../../services/admin";
import Collapse from "react-bootstrap/Collapse";
import './AllUsers.scss'
function AllUsers() {
  const credentialsUser = useSelector(userData);
  const navigate = useNavigate();

  const [openOne, setOpenOne] = useState(false);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const getUsers = () => {
    setOpenOne(!openOne);
    setLoading(true);
    getAllUsers(credentialsUser.token).then((res) => {
      setLoading(false);

      setUsers(res.data.data);
      console.log(users);
      console.log(res.data);
    });
  };

  return (
    <>
      <Button
        className="mt-3 d-flex buttonCollapse"
        onClick={() => getUsers()}
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
                  {users.map((user) => (
                    <Col className=" d-flex justify-content-center align-items-center mb-5">
                      <div className="cardUser">
                        <h5>{user.name}</h5>
                        <h6>{user.surname}</h6>
                        <p>{user.email}</p>
                      </div>
                    </Col>
                  ))}
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

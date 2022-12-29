import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
//Redux
import { useSelector } from "react-redux";
//Slice
import { userData } from "./../../User/userSlice";
import "./Profile.scss";
function Profile() {
  const credentialsUser = useSelector(userData);

  return (
    <Container fluid className="divProfile ">
      <Row>
        <Col className="p-0">
          <div className=" pt-5 d-flex justify-content-center flex-column ">
            <h4 className="nameProfile d-flex justify-content-center">
              Bienvenidx a MusicCoWork {credentialsUser.credentials.name}
            </h4>
          </div>
        </Col>
      </Row>
      <Row className=" pt-3 d-flex justify-content-center">
        <Col md={6} className=" pt-3 d-flex justify-content-center flex-column">
          <div className=" p-3 d-flex justify-content-center flex-column ">
            <h4 className="nameProfile d-flex justify-content-center">
              Modifica los datos de tu perfil {credentialsUser.credentials.name}
            </h4>
          </div>
          <InputGroup className="mb-3 ">
            <InputGroup.Text id="basic-addon1">N</InputGroup.Text>
            <Form.Control
              name="email"
              type="email"
              placeholder={credentialsUser.credentials.name}
              aria-label="e-mail"
              aria-describedby="basic-addon1"
              //   onChange={(e) => handler(e)}
            />
          </InputGroup>
          <InputGroup className="mb-3 ">
            <InputGroup.Text id="basic-addon1">S</InputGroup.Text>
            <Form.Control
              name="password"
              type="password"
              placeholder={credentialsUser.credentials.surname}
              aria-label="password"
              aria-describedby="basic-addon1"
              //   onChange={(e) => handler(e)}
            />
          </InputGroup>
          <InputGroup className="mb-3 ">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              name="password"
              type="password"
              placeholder={credentialsUser.credentials.email}
              aria-label="password"
              aria-describedby="basic-addon1"
              //   onChange={(e) => handler(e)}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col className=" mt-3 d-flex justify-content-center">
          <Button variant="secondary">
            Modificar datos
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;

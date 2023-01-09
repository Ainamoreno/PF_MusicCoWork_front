import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
//Redux
import { useSelector } from "react-redux";
//Slice
import { userData, userout } from "./../../User/userSlice";
import "./Profile.scss";
import { updateProfile } from "./../../../services/user";
import { logoutUser } from "./../../../services/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Profile() {
  const credentialsUser = useSelector(userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
  });
  const inputHandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const updateUser = () => {
    updateProfile(credentialsUser.token, user).then((res) => {
      if(res.data.message === 'Se ha modificado correctamente el perfil'){
        logoutUser({token: credentialsUser.token}).then(res => {
          dispatch(userout({ credentials: {}, token: "", active: false }));
          navigate('/')
        })
        
      }
    });
  };

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
              name="name"
              type="name"
              placeholder={credentialsUser.credentials.name}
              aria-label="e-mail"
              aria-describedby="basic-addon1"
              onChange={(e) => inputHandler(e)}
            />
          </InputGroup>
          <InputGroup className="mb-3 ">
            <InputGroup.Text id="basic-addon1">S</InputGroup.Text>
            <Form.Control
              name="surname"
              type="surname"
              placeholder={credentialsUser.credentials.surname}
              aria-label="surname"
              aria-describedby="basic-addon1"
              onChange={(e) => inputHandler(e)}
            />
          </InputGroup>
          <InputGroup className="mb-3 ">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              name="email"
              type="email"
              placeholder={credentialsUser.credentials.email}
              aria-label="email"
              aria-describedby="basic-addon1"
              onChange={(e) => inputHandler(e)}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col className=" mt-3 d-flex justify-content-center">
          <Button variant="secondary" onClick={()=> updateUser()}>Modificar datos</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;

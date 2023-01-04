import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import "./Register.scss";

import { GiBeveledStar } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { registerUser } from "./../../services/user";
import { errorCheck } from "./../../services/usefull";

//UseNavigate
import { useNavigate } from "react-router-dom";

function Register() {
  const [messageError, setMessageError] = useState("");
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const [userError, setUserError] = useState({
    nameError: "",
    surnameError: "",
    emailError: "",
    passwordError: "",
  });
  let content = Object.values(user);
  const navigate = useNavigate();

  const handler = (e) => {
    setUser((objUser) => ({
      ...objUser,
      [e.target.name]: e.target.value,
    }));
  };

  const errorHandler = (field, value, type) => {
    let error = "";

    error = errorCheck(value, type);

    setUserError((prevState) => ({
      ...prevState,
      [field + "Error"]: error,
    }));
  };

  const register = () => {
    for (let value of content) {
      if (value === "") {
        setMessageError("Debes rellenar todos los datos");
      } else {
        registerUser(user).then((res) => {
          if (res.data.message === "Este email ya había sido utilizado.") {
            setMessageError("El email ya ha sido registrado");
          }
          if (res.data.message === "OK") {
            setMessageError("");
            navigate("/login");
          }
        });
      }
    }
  };

  return (
    <Container fluid className="containerRegister">
      <Row className="pt-5">
        <Col className=" pt-3 d-flex justify-content-center">
          <div className=" d-flex justify-content-center align-items-center flex-column">
            <h1 className=" d-flex justify-content-center align-items-center titleConatinerRegister tracking-in-contract-bck">
              Regístrate
            </h1>
            <h6 className="mt-3">
              Y podrás reservar nuestras salas y asistir a los mejores eventos
              musicales de Valencia
            </h6>
          </div>
        </Col>
      </Row>
      <Row className=" pt-3 d-flex justify-content-center">
        <Col md={6} className=" pt-3 d-flex justify-content-center flex-column">
          <InputGroup className="pb-3 ">
            <InputGroup.Text id="basic-addon1">
              <BsFillPersonFill />
            </InputGroup.Text>
            <Form.Control
              name="name"
              type="text"
              placeholder="Nombre"
              aria-label="name"
              aria-describedby="basic-addon1"
              onBlur={(e) =>
                errorHandler(e.target.name, e.target.value, "name")
              }
              onChange={(e) => handler(e)}
            />
          </InputGroup>
          <Container>
            <Row>
              <Col>
                <div className="errorInput d-flex justify-content-center mb-2">
                  {userError.nameError}
                </div>
              </Col>
            </Row>
          </Container>
          <InputGroup className="mb-3 ">
            <InputGroup.Text id="basic-addon1">
              <BsPerson />
            </InputGroup.Text>
            <Form.Control
              name="surname"
              type="text"
              placeholder="Apellido"
              aria-label="surname"
              aria-describedby="basic-addon1"
              onBlur={(e) =>
                errorHandler(e.target.name, e.target.value, "text")
              }
              onChange={(e) => handler(e)}
            />
          </InputGroup>
          <Container>
            <Row>
              <Col>
                <div className="errorInput d-flex justify-content-center mb-2">
                  {userError.surnameError}
                </div>
              </Col>
            </Row>
          </Container>
          <InputGroup className="mb-3 ">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              name="email"
              type="email"
              placeholder="Correo electrónico"
              aria-label="e-mail"
              aria-describedby="basic-addon1"
              onBlur={(e) =>
                errorHandler(e.target.name, e.target.value, "email")
              }
              onChange={(e) => handler(e)}
            />
          </InputGroup>
          <Container>
            <Row>
              <Col>
                <div className="errorInput d-flex justify-content-center mb-2">
                  {userError.emailError}
                </div>
              </Col>
            </Row>
          </Container>
          <InputGroup className="mb-2 ">
            <InputGroup.Text id="basic-addon1">
              <GiBeveledStar />
            </InputGroup.Text>
            <Form.Control
              name="password"
              type="password"
              placeholder="Contraseña"
              aria-label="password"
              aria-describedby="basic-addon1"
              onBlur={(e) =>
                errorHandler(e.target.name, e.target.value, "password")
              }
              onChange={(e) => handler(e)}
            />
          </InputGroup>

          <Row className=" d-flex justify-content-center mb-2">
            <Col className=" d-flex justify-content-center mb-2">
              <div className="errorInput d-flex justify-content-center mb-2">
                {userError.passwordError}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className=" mt-3 mb-3 d-flex justify-content-center">
          <Button variant="secondary" onClick={() => register()}>
            Regístrate
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className=" mt-3 mb-3 d-flex justify-content-center">
          {messageError}
        </Col>
      </Row>
    </Container>
  );
}

export default Register;

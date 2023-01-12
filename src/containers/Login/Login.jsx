import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import "./Login.scss";
import { GiBeveledStar } from "react-icons/gi";
//Redux
import { useDispatch } from "react-redux";
//UseNavigate
import { useNavigate } from "react-router-dom";
//React
import { useState } from "react";
//Services
import { loginUser } from "./../../services/user";
import { profileUser } from "./../../services/user";
//Slice
import { login } from "./../User/userSlice";

function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [messageError, setMessageError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let content = Object.values(user);

  const handler = (e) => {
    setUser((objUser) => ({
      ...objUser,
      [e.target.name]: e.target.value,
    }));
  };
  const logMe = () => {
    for (let value of content) {
      if (value === "") {
        setMessageError("Debes rellenar todos los datos");
      } else {
        setMessageError("");
        loginUser(user).then((res) => {
          const token = res.data.token;
          dispatch(login({ token: token }));
          profileUser(token)
            .then((res) => {
              dispatch(
                login({ token, credentials: res.data.user, active: true })
              );
              navigate("/");
            })
            .catch((error) => {
              if (error.response.data.message === "Wrong number of segments") {
                setMessageError("Email o contraseña no válidos.");
              }
            });
        });
      }
    }
  };

  return (
    <Container fluid className="containerLogin">
      <Row className="pt-5">
        <Col className=" pt-3 d-flex justify-content-center">
          <div className=" d-flex justify-content-center align-items-center flex-column">
            <h1 className=" d-flex justify-content-center align-items-center titleConatinerLogin tracking-in-contract-bck">
              Iniciar sesión
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
          <InputGroup className="mb-3 ">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              name="email"
              type="email"
              placeholder="Correo electrónico"
              aria-label="e-mail"
              aria-describedby="basic-addon1"
              onChange={(e) => handler(e)}
            />
          </InputGroup>
          <InputGroup className="mb-3 ">
            <InputGroup.Text id="basic-addon1">
              <GiBeveledStar />
            </InputGroup.Text>
            <Form.Control
              name="password"
              type="password"
              placeholder="Contraseña"
              aria-label="password"
              aria-describedby="basic-addon1"
              onChange={(e) => handler(e)}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col className=" d-flex justify-content-center">
          <h6 className="errorRepeatInput">{user.message}</h6>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="messageError text-center">{messageError}</div>
        </Col>
      </Row>
      <Row>
        <Col className=" mt-3 mb-3 d-flex justify-content-center">
          <Button variant="secondary" onClick={() => logMe()}>
            Iniciar sesión
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

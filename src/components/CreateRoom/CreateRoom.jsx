import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createRoom } from "../../services/admin";
import { errorCheck } from "../../services/usefull";
import { userData } from "./../../containers/User/userSlice";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, InputGroup, Row, Form } from "react-bootstrap";
import { AiTwotoneCalendar } from "react-icons/ai";
import { BiRename } from "react-icons/bi";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoIosPricetags } from "react-icons/io";
import Collapse from 'react-bootstrap/Collapse';
import './CreateRoom.scss';

function CreateRoom() {
  const credentialsUser = useSelector(userData);
  const navigate = useNavigate();

  const [openOne, setOpenOne] = useState(false);

  const [room, setRoom] = useState({
    name: "",
    description: "",
    price: "",
    horary: "",
  });

  const [userError, setUserError] = useState({
    nameError: "",
    descriptionError: "",
    priceError: "",
    horaryError: "",
  });
  
  const handler = (e) => {
    setRoom((objUser) => ({
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
  const createARoom = () => {
    console.log(room)
    createRoom(room, credentialsUser.token).then((res) => {
      if (res.data.message === "Se ha creado la sala correctamente.") {
        navigate("/rooms");
      }
      console.log(res.data);
    });
  };

  return (
    <>
      <Button
        className="mt-3 d-flex buttonCollapse"
        onClick={() => setOpenOne(!openOne)}
        aria-controls="example-collapse-text"
        aria-expanded={openOne}
      >
        Crear una sala
      </Button>
      <Collapse in={openOne}>
        <Row>
          <Col>
            <div>
              <h4 className=" pt-3 d-flex justify-content-center">
                Crear una nueva sala
              </h4>
              <Row className=" pt-3 d-flex justify-content-center">
                <Col
                  md={6}
                  className=" pt-3 d-flex justify-content-center flex-column"
                >
                  <InputGroup className="pb-3 ">
                    <InputGroup.Text id="basic-addon1">
                      <BiRename />
                    </InputGroup.Text>
                    <Form.Control
                      name="name"
                      type="text"
                      placeholder="Nombre de la sala"
                      aria-label="name"
                      aria-describedby="basic-addon1"
                      onBlur={(e) =>
                        errorHandler(
                          e.target.name,
                          e.target.value,
                          "description"
                        )
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
                      <MdDriveFileRenameOutline />
                    </InputGroup.Text>
                    <Form.Control
                      name="description"
                      type="description"
                      placeholder="Descripción de la sala"
                      aria-label="surname"
                      aria-describedby="basic-addon1"
                      onBlur={(e) =>
                        errorHandler(
                          e.target.name,
                          e.target.value,
                          "description"
                        )
                      }
                      onChange={(e) => handler(e)}
                    />
                  </InputGroup>
                  <Container>
                    <Row>
                      <Col>
                        <div className="errorInput d-flex justify-content-center mb-2">
                          {userError.descriptionError}
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1">
                      <IoIosPricetags />
                    </InputGroup.Text>
                    <Form.Control
                      name="price"
                      type="price"
                      placeholder="Precio por día"
                      aria-label="e-mail"
                      aria-describedby="basic-addon1"
                      onBlur={(e) =>
                        errorHandler(e.target.name, e.target.value, "price")
                      }
                      onChange={(e) => handler(e)}
                    />
                  </InputGroup>
                  <Container>
                    <Row>
                      <Col>
                        <div className="errorInput d-flex justify-content-center mb-2">
                          {userError.priceError}
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <InputGroup className="mb-2 ">
                    <InputGroup.Text id="basic-addon1">
                      <AiTwotoneCalendar />
                    </InputGroup.Text>
                    <Form.Control
                      name="horary"
                      type="text"
                      placeholder="Horario diario"
                      aria-label="password"
                      aria-describedby="basic-addon1"
                      onBlur={(e) =>
                        errorHandler(e.target.name, e.target.value, "text")
                      }
                      onChange={(e) => handler(e)}
                    />
                  </InputGroup>

                  <Row className=" d-flex justify-content-center mb-2">
                    <Col className=" d-flex justify-content-center mb-2">
                      <div className="errorInput d-flex justify-content-center mb-2">
                        {userError.horaryError}
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            <Row>
              <Col className=" mt-3 mb-3 d-flex justify-content-center">
                <Button variant="secondary" onClick={() => createARoom()}>
                  Añadir sala
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Collapse>
    </>
  );
}

export default CreateRoom;

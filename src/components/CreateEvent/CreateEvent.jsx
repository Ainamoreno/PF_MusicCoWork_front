import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createEvent } from "../../services/admin";
import { errorCheck } from "../../services/usefull";
import { userData } from "./../../containers/User/userSlice";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, InputGroup, Row, Form } from "react-bootstrap";
import { AiTwotoneCalendar } from "react-icons/ai";
import { BiRename } from "react-icons/bi";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoIosPricetags } from "react-icons/io";
import Collapse from "react-bootstrap/Collapse";
import ResponsiveDatePickers from "../DatePicker/DatePicker";

function CreateEvent() {
  const credentialsUser = useSelector(userData);
  const navigate = useNavigate();
  const [openTwo, setOpenTwo] = useState(false);
  const [date, setDate] = useState(" ");
  const [event, setEvent] = useState({
    name: "",
    description: "",
    date: date,
  });


  const [userError, setUserError] = useState({
    nameError: "",
    descriptionError: "",
    dateError: "",
  });
  const handler = (e) => {
    setEvent((objUser) => ({
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
  const resetDate = (date) => {
    setDate(`${date.$d}`);
  };
  const createAEvent = () => {
    let allDate = `${date.date}`;
    let dateSplit = allDate.split(" ");
    let month = dateSplit[1];
    switch (month) {
      case "Jan":
        month = "01";
        break;
      case "Feb":
        month = "02";
        break;
      case "Mar":
        month = "03";
        break;
      case "Apr":
        month = "04";
        break;
      case "May":
        month = "05";
        break;
      case "Jun":
        month = "06";
        break;
      case "Jul":
        month = "07";
        break;
      case "Aug":
        month = "08";
        break;
      case "Sep":
        month = "09";
        break;
      case "Oct":
        month = "10";
        break;
      case "Nov":
        month = "11";
        break;
      case "Dec":
        month = "12";
        break;
      default:
    }
    
    let dateFinally = `${dateSplit[3]}-${month}-${dateSplit[2]}`;
    setDate(dateFinally);
    createEvent(event, credentialsUser.token).then((res) => {
      if (res.data.message === "Se ha creado la sala correctamente.") {
        navigate("/rooms");
      }
      console.log(res.data);
    });
  };
  return (
    <>
      <Button
        className="mt-3 buttonCollapse"
        onClick={() => setOpenTwo(!openTwo)}
        aria-controls="example-collapse-text"
        aria-expanded={openTwo}
      >
        Crear un evento
      </Button>
      <Collapse in={openTwo}>
        <Row>
          <Col>
            <div>
              <h4 className=" pt-3 d-flex justify-content-center">
                Crear un nuevo evento
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
                      placeholder="Nombre del evento"
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
                      <MdDriveFileRenameOutline resetDate={resetDate} />
                    </InputGroup.Text>
                    <Form.Control
                      name="description"
                      type="description"
                      placeholder="Descripción del evento"
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
                  <ResponsiveDatePickers />
                  <Container>
                    <Row>
                      <Col>
                        <div className="errorInput d-flex justify-content-center mb-2">
                          {userError.priceError}
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </div>
            <Row>
              <Col className=" mt-3 mb-3 d-flex justify-content-center">
                <Button variant="secondary">Añadir sala</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Collapse>
    </>
  );
}

export default CreateEvent;

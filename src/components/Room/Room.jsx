import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import ResponsiveDatePickers from "../DatePicker/DatePicker";
import { useSelector } from "react-redux";
import { userData } from "../../containers/User/userSlice";
import { useNavigate } from "react-router-dom";
//Services
import { reservationRoom } from "./../../services/rooms";
import { deleteRoom } from "./../../services/admin";

function Room({ rooms }) {
  const [date, setDate] = useState({ date: " " });
  const [messageError, setMessageError] = useState("");
  const navigate = useNavigate();
  const credentialsUser = useSelector(userData);

  const resetDate = (date) => {
    setDate({ date: `${date.$d}` });
  };

  const makeAReservationRoom = (idRoom) => {
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
    setDate({ date: dateFinally });
    reservationRoom(credentialsUser.token, idRoom, { date: dateFinally }).then(
      (res) => {
        setMessageError("");
        navigate("/reservationsrooms");
        if (
          res.data.message ===
          "Lo sentimos, ya tenemos reservada el aula para este día"
        ) {
          setMessageError(
            "Lo sentimos, ya tenemos reservada el aula para este día"
          );
        }
      }
    );
  };

  const deleteARoom = (idRoom) => {
    deleteRoom(credentialsUser.token, idRoom).then((res) => {
      if (res.data.message === "Se ha eliminado la sala correctamente.") {
        navigate("/");
      }
    });
  };

  if (!credentialsUser.active) {
    return (
      <Col md={7} className="mb-3">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="d-flex justify-content-center flex-column"
          >
            <h3 className="d-flex justify-content-center titleRoom mt-5">
              {room.name}
            </h3>
            <p>{room.description}</p>
            <h6>{room.horary}</h6>
            <h6>El precio es de: {room.price}€/día</h6>
            <Row>
              <Col
                md={6}
                xs={12}
                className="d-flex justify-content-between mt-3 mb-2 "
              >
                <ResponsiveDatePickers disabled={true} />
              </Col>
              <Col md={6} xs={12} className="mb-4 ">
                <div>
                  <Button
                    variant="secondary"
                    onClick={() => navigate("/login")}
                  >
                    Inicia sesión para reservar
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </Col>
    );
  } else {
    return (
      <Col md={7} className="mb-3">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="d-flex justify-content-center flex-column"
          >
            <h3 className="d-flex justify-content-center titleRoom">
              {room.name}
            </h3>
            <p>{room.description}</p>
            <h6>{room.horary}</h6>
            <h6>El precio es de: {room.price}€/día</h6>
            <Row>
              <Col
                md={6}
                xs={12}
                className="d-flex justify-content-between mt-3 mb-2 "
              >
                <ResponsiveDatePickers resetDate={resetDate} />
              </Col>
              <Col md={6} xs={12} className="mb-4 ">
                <div>
                  <Button
                    variant="secondary"
                    onClick={() => makeAReservationRoom(room.id)}
                  >
                    Reserva
                  </Button>
                  <h6>{messageError}</h6>
                </div>
                {credentialsUser.credentials.role_id === 2 ? (
                  <Button
                    variant="secondary"
                    className="headersName"
                    onClick={() => deleteARoom(room.id)}
                  >
                    Eliminar sala
                  </Button>
                ) : (
                  <></>
                )}
              </Col>
            </Row>
          </div>
        ))}
      </Col>
    );
  }
}

export default Room;

import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { errorCheck } from "../../services/usefull";
import { createRoom } from "./../../services/admin";
import { AiTwotoneCalendar } from "react-icons/ai";
import { BiRename } from "react-icons/bi";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoIosPricetags } from "react-icons/io";

import { useSelector } from "react-redux";
import { userData } from "./../../containers/User/userSlice";
import { useNavigate } from "react-router-dom";

import Collapse from "react-bootstrap/Collapse";
import CreateRoom from "../../components/CreateRoom/CreateRoom";
import CreateEvent from "../../components/CreateEvent/CreateEvent";
function Admin() {
  //   const handler = (e) => {
  //     setRoom((objUser) => ({
  //       ...objUser,
  //       [e.target.name]: e.target.value,
  //     }));
  //   };

  //   const errorHandler = (field, value, type) => {
  //     let error = "";
  //     error = errorCheck(value, type);
  //     setUserError((prevState) => ({
  //       ...prevState,
  //       [field + "Error"]: error,
  //     }));
  //   };

  return (
    <Container>
      <Row>
        <Col>
          <CreateRoom/>
          <CreateEvent />
        </Col>
      </Row>
    </Container>
  );
}

export default Admin;

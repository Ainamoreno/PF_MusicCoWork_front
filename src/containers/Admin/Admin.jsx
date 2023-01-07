import React from "react";
import {  Col, Container,Row } from "react-bootstrap";


import CreateRoom from "../../components/CreateRoom/CreateRoom";
import CreateEvent from "../../components/CreateEvent/CreateEvent";
import AllUsers from "../../components/AllUsers/AllUsers";
import AllReservationsRooms from "../../components/AllReservationsRooms/AllReservationsRooms";
function Admin() {


  return (
    <Container>

<Row className="mt-5 d-flex justify-content-center align-items-center">
            <Col xs={12} md={6} className=" mt-3 d-flex justify-content-center">
              <div className=" d-flex justify-content-center align-items-center">
                <h4 className=" d-flex justify-content-center align-items-center titleConatinerRooms text-focus-in">
                  Espacio del administrador
                </h4>
              </div>
            </Col>
          </Row>

      <Row>
        <Col>
          <CreateRoom/>
          <CreateEvent />
          <AllUsers/>
          <AllReservationsRooms/>
        </Col>
      </Row>
    </Container>
  );
}

export default Admin;

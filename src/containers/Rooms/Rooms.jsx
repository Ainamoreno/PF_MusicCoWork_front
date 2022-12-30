import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import "./Rooms.scss";
import room from "./../../img/rooms.jpg";
import { getRooms } from "../../services/rooms";
import Room from "../../components/Room/Room";
function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
   getAllRooms()
  }, []);

  const getAllRooms = () => {
    setLoading(true);
    getRooms().then((res)=> {

      setLoading(false);
      setRooms(res.data.data)
    })
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <img className="w-75" src={room} alt=""></img>
        </Col>
        <Col xs={12} md={6} className=" mt-3 d-flex justify-content-center">
          <div className=" d-flex justify-content-center align-items-center">
            <h1 className=" d-flex justify-content-center align-items-center titleConatinerRooms text-focus-in">
              Salas de estudio y ensayo
            </h1>
          </div>
        </Col>
      </Row>
      <Row className="mt-5 d-flex justify-content-center">
      {!loading ? (     
              <Room rooms ={rooms}/>
        ) : (
          <div className=" d-flex justify-content-center align-items-center mb-3">
            <Spinner />
          </div>
        )}
         
      </Row>
    </Container>
  );
}

export default Rooms;

import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import './Toast.scss'
function AutohideExample({show, setShow}) {

  return (
    <Row  id='toastEv'>
      <Col xs={12} className="  d-flex justify-content-center">
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">MusicCoWork</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>No se ha podido realizar porque ya has reservado la asistencia a este evento.</Toast.Body>
        </Toast>
      </Col>
      
    </Row>
  );
}

export default AutohideExample;

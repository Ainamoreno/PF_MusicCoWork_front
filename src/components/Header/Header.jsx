import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../img/logo.png'

import { useNavigate } from "react-router-dom";

import './Header.scss'

function BasicExample() {
    const navigate = useNavigate();

  return (
    <Navbar bg="light" expand="lg" className='navbar' >
      <Container fluid className='headerDesign'>
        <Navbar.Brand href="#home"><img className='logoHeader' src={logo} onClick={() => navigate("/")} alt=''></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home"><div className="headersName" >
              Home
            </div></Nav.Link> */}
            <Nav.Link ><div className="headersName" onClick={() => navigate("/rooms")}>
              Salas
            </div></Nav.Link>
            <Nav.Link ><div className="headersName" onClick={() => navigate("/events")}>
              Eventos
            </div></Nav.Link>
            <Nav.Link ><div className="headersName" onClick={() => navigate("/about")}>
              Sobre MusicCoWork
            </div></Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item  onClick={() => navigate("/reservationsrooms")} >Mis reservas</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/reservationsevents")} >
                Mis asistencias a eventos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                Cerrar sesión
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../img/logo.png";

import { useNavigate } from "react-router-dom";
//Redux
import { useSelector, useDispatch } from "react-redux";
//Slice
import { userData, userout } from "./../../containers/User/userSlice";

import "./Header.scss";

function BasicExample() {
  const navigate = useNavigate();
  const credentialsUser = useSelector(userData);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userout({ credentials: {}, token: "", active: false }));
    return navigate("/");
  };
  console.log(credentialsUser);
  if (!credentialsUser.active) {
    return (
      <Navbar bg="light" expand="lg" className="navbar">
        <Container fluid className="headerDesign">
          <Navbar.Brand href="#home">
            <img
              className="logoHeader"
              src={logo}
              onClick={() => navigate("/")}
              alt=""
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <div className="headersName" onClick={() => navigate("/rooms")}>
                  Salas
                </div>
              </Nav.Link>
              <Nav.Link>
                <div
                  className="headersName"
                  onClick={() => navigate("/events")}
                >
                  Eventos
                </div>
              </Nav.Link>
              <Nav.Link>
                <div className="headersName" onClick={() => navigate("/about")}>
                  Sobre MusicCoWork
                </div>
              </Nav.Link>
              <Nav.Link>
                <div
                  className="headersName"
                  onClick={() => navigate("/register")}
                >
                  Regístrate
                </div>
              </Nav.Link>
              <Nav.Link>
                <div className="headersName" onClick={() => navigate("/login")}>
                  Inicia sesión
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar bg="light" expand="lg" className="navbar">
        <Container fluid className="headerDesign">
          <Navbar.Brand href="#home">
            <img
              className="logoHeader"
              src={logo}
              onClick={() => navigate("/")}
              alt=""
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <div className="headersName" onClick={() => navigate("/rooms")}>
                  Salas
                </div>
              </Nav.Link>
              <Nav.Link>
                <div
                  className="headersName"
                  onClick={() => navigate("/events")}
                >
                  Eventos
                </div>
              </Nav.Link>
              <Nav.Link>
                <div className="headersName" onClick={() => navigate("/about")}>
                  Sobre MusicCoWork
                </div>
              </Nav.Link>
              <NavDropdown
                title={credentialsUser.credentials.name}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item
                  onClick={() => navigate("/reservationsrooms")}
                >
                  Mis reservas
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => navigate("/reservationsevents")}
                >
                  Mis asistencias a eventos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => logout()}>Cerrar sesión</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default BasicExample;

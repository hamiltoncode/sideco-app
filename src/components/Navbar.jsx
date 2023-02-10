import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import hermoimg from "../assets/herosideco.png";
import "../css/navbar.css";

export default function NavbarApp() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="fixed-top flex-column pt-0"
      bg="light"
      variant="light"
    >
      <div id="pre-header" className="pt-1 pb-1">
        Encuentranos en Bogotá y alrededores
      </div>
      <Container>
        <LinkContainer to={"/home"}>
          <Navbar.Brand>
            <img
              src={hermoimg}
              height="45"
              className="d-inline-block align-top"
              alt="Sideco logo"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav>
            <LinkContainer to={"/about"}>
              <Nav.Link>Nosotros</Nav.Link>
            </LinkContainer>

            <LinkContainer to={"/services"}>
              <Nav.Link>Servicios</Nav.Link>
            </LinkContainer>

            <LinkContainer to={"/account"}>
              <Nav.Link>Mi cuenta</Nav.Link>
            </LinkContainer>

            <Dropdown as={ButtonGroup}>
              <LinkContainer to={"/contact"}>
                <Nav.Link>Contactános</Nav.Link>
              </LinkContainer>

              <Dropdown.Toggle
                split
                variant="light"
                id="dropdown-split-basic"
              />

              <Dropdown.Menu>
                <LinkContainer to={"/servicio-al-cliente"}>
                  <Dropdown.Item href="#/action-1">Servicio al cliente</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to={"/ventas"}>
                  <Dropdown.Item href="#/action-2">
                    Ventas
                  </Dropdown.Item>
                </LinkContainer>
                <LinkContainer to={"/linea-etica"}>
                  <Dropdown.Item href="#/action-3">
                    Linea ética
                  </Dropdown.Item>
                </LinkContainer>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

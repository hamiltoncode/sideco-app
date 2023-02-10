import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Account() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Iniciar Sesión</Form.Label>
              <br />
              <Form.Text className="text-muted">
                Si ya eres nuestro cliente, por favor inicia tu sesión aquí:
              </Form.Text>
              <Form.Control type="email" placeholder="Correro Electrónico" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
            <Button
              variant="primary"
              onClick={() => alert("Correo o contraseña incorrectos")}
            >
              Iniciar sesión
            </Button>
          </Form>
        </Col>

        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Crear Cuenta</Form.Label>
              <br />
              <Form.Text className="text-muted">
                Para crear una cuenta, por favor llena tu información aquí:
              </Form.Text>
              <Form.Control type="email" placeholder="Correro Electrónico" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Apellido" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>

            <Button variant="primary">Enviar</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

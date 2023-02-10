import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { LinkContainer } from "react-router-bootstrap";
import { BsWhatsapp } from "react-icons/bs";

export default function FormContact(props) {
  return (
    <>
      <Form action={"https://formsubmit.co/" + props.email} method="POST">
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="text" placeholder="Nombre" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Correo electronico"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="number" placeholder="Teléfono" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="text" placeholder="Mensaje" required />
        </Form.Group>

        <Form.Text className="text-muted">
          Al hacer clic en Enviar, acepta los{" "}
          <LinkContainer to={"/terminos-y-condiciones"}>
            <a href="">Términos y Condiciones</a>
          </LinkContainer>
        </Form.Text>

        <br />
        <br />
          <input type="hidden" name="_next" value="https://sideco.com.co/enviado"/>

        <div className="text-center">
          <p className="fs-5">O comunícate a </p>
          <p>
            {" "}
            <BsWhatsapp /> WhastApp: +(57) 3167200700
          </p>
          <p>{"Correo: " + props.email}</p>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </div>
      </Form>
    </>
  );
}

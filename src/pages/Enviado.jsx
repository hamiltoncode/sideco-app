import React, { useEffect } from "react";
import "../css/centrado.css";
import { LinkContainer } from "react-router-bootstrap";

export default function Enviado() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="notfound">
      <p className="fs-1 text-center">
        ¡Gracias!
        <br />
        El formulario fue enviado con éxito.
        <br />
        <LinkContainer to={"/"}>
          <a className="fs-5">Volver al inicio</a>
        </LinkContainer>
      </p>
    </div>
  );
}

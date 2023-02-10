import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import FormContact from "../components/FormContact";
import { Helmet } from "react-helmet";

export default function Ventas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mt-5 mb-5">
      <Helmet>
        <title>Sideco | Ventas</title>
      </Helmet>
      <h3 className="text-center">Formulario de Ventas</h3>
      <p>
        Si estás interesado en obtener más información sobre los servicios que
        ofrecemos para su empresa o si desea adquirirlos, puede proporcionarnos
        sus detalles en el siguiente formulario y nos pondremos en contacto con
        usted pronto. Ten en cuenta que somos expertos en los servicios de:
        <ul>
          <li>Limpieza y cafetería</li>
          <li>Servicios especializados</li>
          <li>Mantenimiento técnico locativo</li>
        </ul>
        Si deseas conocer más sobre nuestra oferta de servicios, haz clic{" "}
        <LinkContainer to={"/services"}>
          <a href="">aquí</a>
        </LinkContainer>
        {"."}
        <br />
        ¡Gracias por elegirnos!
        <br />
        <br />
        <FormContact email="ventas@sideco.com.co" />
        <br />
      </p>
    </div>
  );
}

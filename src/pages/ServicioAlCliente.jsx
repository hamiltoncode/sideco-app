import React, { useEffect } from "react";
import FormContact from "../components/FormContact";
import { Helmet } from "react-helmet";

export default function ServicioAlCliente() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mt-5 mb-5">
      <Helmet>
        <title>Sideco | servicio al cliente</title>
      </Helmet>
      <h3 className="text-center">Formulario de Servicio al cliente</h3>
      <p>
        Bienvenido al formulario PQRSF (Petición, Queja, Reclamo, Sugerencia o
        Felicitación).
      </p>
      <p>
        Si tienes algún problema o insatisfacción con nuestro servicio, estamos
        listos para escucharte y brindarte una solución efectiva.
      </p>
      <p>
        Por favor, proporciona tus datos en el formulario a continuación y nos
        pondremos en contacto contigo lo antes posible.
      </p>
      <FormContact email="servicioalcliente@sideco.com.co" />
    </div>
  );
}

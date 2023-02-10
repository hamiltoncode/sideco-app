import React, { useEffect } from "react";
import FormContact from "../components/FormContact";
import { Helmet } from "react-helmet";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mt-5 mb-5">
      <Helmet>
        <title>Sideco | contacto</title>
      </Helmet>
      <h3 className="text-center">Contáctanos</h3>
      <FormContact email="servicioalcliente@sideco.com.co" />
    </div>
  );
}

import React, { useEffect } from "react";
import FormContact from "../components/FormContact";
import { Helmet } from "react-helmet";
import "../css/texto-justificado.css";


export default function LineaEtica() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mt-5 mb-5 text-justify">
      <Helmet>
        <title>Sideco | Línea ética</title>
      </Helmet>
      <h3 className="text-center">Línea ética</h3>
      <p>
        La Línea Ética es un medio de comunicación confidencial que está
        disponible las 24 horas, los 7 días de la semana, y está diseñado para
        que los colaboradores, clientes, proveedores y contratistas de Sideco
        S.A.S. puedan informar sobre actos o actividades sospechosas que
        consideren contrarios a la ética y a los estándares empresariales por
        parte de alguno de los miembros de la compañía.
      </p>
      <p>Entre las situaciones que se pueden reportar se incluyen:</p>
      <ul>
        <li>
          Comportamientos no éticos y violaciones al Código de Ética y Conducta
          de Sideco S.A.S
        </li>
        <li>Apropiación y uso indebido de los bienes de la compañía.</li>
        <li>Situaciones derivadas por conflicto de intereses.</li>
        <li>Fraude y corrupción.</li>
        <li>Uso indebido de información confidencial.</li>
        <li>
          Actividades sospechosas relacionadas con el lavado de activos y la
          financiación del terrorismo.
        </li>
        <li>
          Abuso de poder y/o violaciones de normas, políticas y procedimientos.
        </li>
        <li>
          Vulnerabilidades que pongan en peligro la confidencialidad y
          disponibilidad de los activos del cliente.
        </li>
        <li>
          Cualquier otra situación que consideres irregular y se evidencien
          dentro y fuera del horario laboral.
        </li>
      </ul>
      <p>
        Puedes realizar tu denuncia a través del formulario que se encuentra a
        continuación o a través de estos canales:
      </p>
      <FormContact email="gerencia@sideco.com.co" />
    </div>
  );
}

import React, { useEffect } from "react";
import "../css/texto-justificado.css";

export default function TrabajaConNosotros() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mt-5 mb-5 text-justify">
      <h2>
        ¿Quieres ser parte de la Familia SIDECO? Así de fácil puedes postularte:{" "}
      </h2>
      <br />
      <p>
        Recuerda que buscamos operarias y operarios de limpieza, jardineros,
        toderos, técnicos de mantenimiento y auxiliares de cocina, entre otros
        perfiles. Envíanos tu hoja de vida al correo gerencia@sideco.com.co y
        pronto nuestro equipo de selección te contactara.
      </p>
      <p className="fw-bold">
        Lo más importante, al pertenecer a la gran Familia SIDECO S.A.S. te
        garantizamos:
      </p>

      <ul>
        <li>Estabilidad laboral</li>
        <li>Pagos puntuales</li>
        <li>Contrato directo</li>
        <li>Todas las prestaciones de ley</li>
        <li>Formación dentro de la compañía – Plan Carrera</li>
      </ul>

      <p>
        ¿Quieres saber más? ⇾{" "}
        <span className="fw-bold">Beneficios de trabajar en SIDECO S.A.S</span>
      </p>
      <p>Cumplamos sueños juntos. Postúlate y únete a esta gran familia.</p>
      <p>¡Con trabajo formal aseguras tu futuro y el de tu familia!</p>

      <hr />

      <p>
        ¡Únete a la familia! Tenemos vacantes que esperan por ti, por eso aquí
        te contamos cuáles son los beneficios de trabajar en SIDECO S.A.S.{" "}
      </p>

      <p>
        En SIDECO S.A.S. nuestro capital humano es lo más valioso de la
        organización. Estamos comprometidos siempre con el bienestar de los
        colaboradores, quienes día a día nos representan con compromiso frente a
        cada cliente. Al vincularte a esta familia, obtienes:
      </p>

      <ul>
        <li>Estabilidad laboral</li>
        <li>Pagos puntuales</li>
        <li>Contrato directo</li>
        <li>Todas las prestaciones de ley</li>
        <li>Capacitación permanente</li>
      </ul>

      <p>
        En SIDECO S.A.S tenemos como objetivo principal la calidad de vida de
        nuestros colaboradores y sus familias.
      </p>
      <p>
        Estamos comprometidos con los ODS (Objetivos de Desarrollo Sostenible),
        ̈Trabajo Decente y Crecimiento Económico ̈. Por otro lado, nos encanta
        exaltar el esfuerzo de nuestros trabajadores, por eso cada tres meses
        realizamos el “Cuadro de Honor”, donde se reconoce a los mejores
        colaboradores del trimestre, de manera que los invitamos a un desayuno
        con los directivos de la empresa, allí reciben diferentes incentivos y
        participan en rifas de premios, dinero en efectivo.
      </p>
      <p>
        Y estos son solo algunos de los beneficios de trabajar con nosotros,
        ¡aplica a nuestras vacantes y únete a esta gran Familia!
      </p>
    </div>
  );
}

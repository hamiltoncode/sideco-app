import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { LinkContainer } from "react-router-bootstrap";
import "../css/texto-justificado.css";

export default function PreguntasFrecuentes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mt-5 mb-5 text-justify">
      <Helmet>
        <title>Sideco | preguntas frecuentes</title>
      </Helmet>
      <h1 className="text-center mb-3">Preguntas Frecuentes</h1>
      <p className="fw-bold">
        Aseo y Mantenimiento a Empresas y Propiedad Horizontal
      </p>
      <ul>
        <li>
          <p className="fw-bold">
            ¿SIDECO S.A.S presta servicios de limpieza en empresas, oficinas y
            locales comerciales?
          </p>
          <p>
            Si, préstamos servicios de aseo y limpieza en empresas, oficinas y
            locales comerciales.
          </p>
        </li>
        <li>
          <p className="fw-bold">
            ¿Estos servicios están disponibles a nivel nacional?
          </p>
          <p>Inicialmente sólo en Bogotá y alrededores.</p>
        </li>
        <li>
          <p className="fw-bold">¿Cómo puedo adquirir estos servicios?</p>
          <p>
            Los servicios de limpieza podrán ser adquiridos a través de nuestro
            correo ventas@sideco.com.co o comunicándote al número celular 316
            7200 700 de lunes a viernes de 8:00 a.m. a 5:00 p.m. y sábados 8:00
            a.m. a 12:00 m.
          </p>
        </li>
        <li>
          <p className="fw-bold">
            ¿Puedo pagar los servicios cuando la experta de Limpieza llegue a mi
            empresa u oficina?
          </p>
          <p>
            No, primero debes reservar el servicio a través de nuestros puntos
            de contacto. Una vez finalizada tu reserva, recibirás un correo
            electrónico con la confirmación del servicio.
          </p>
          <p>
            Una vez realizado el pago se te liberara el servicio para ser
            prestado el día requerido dentro de tu solicitud.
          </p>
          <p>
            En ningún caso nuestros colaboradores están autorizados para recibir
            dinero por parte del cliente.
          </p>
        </li>
        <li>
          <p className="fw-bold">
            ¿El servicio solicitado incluye los insumos de aseo y limpieza?
          </p>
          <p>
            Si, la solicitud del servicio incluye de manera adicional un kit de
            limpieza con productos especializados, los cuales quedan en las
            instalaciones del cliente y serán utilizados para futuras limpiezas
            mientras dure la ejecución del contrato.
          </p>
        </li>
        <li>
          <p className="fw-bold">
            ¿Cómo hago para trabajar en SIDECO S.A.S?{" "}
            <LinkContainer to={"/trabaja-con-nosotros"}>
              <a className="fw-bold pe-auto">Trabaja con nosotros</a>
            </LinkContainer>
          </p>
          <p>
            Envíanos tu hoja de vida al correo gerencia@sideco.com.co y pronto
            nuestro equipo de selección te contactara
          </p>
        </li>
        <li>
          <p className="fw-bold">
            ¿Si ya trabajé en SIDECO S.A.S puedo volver a trabajar con ustedes?
          </p>
          <p>
            Cada caso es especial, debes enviar tu hoja de vida al correo
            gerencia@sideco.com.co y seguir el proceso de selección.
          </p>
        </li>
        <li>
          <p className="fw-bold">Para incapacidades</p>
          <p>
            Para radicación de incapacidades puedes hacerlo enviando al correo
            gerencia@sideco.com.co, de lunes a viernes de 8:00 a.m. a 4:00 p.m.
            y sábados de 8:30 a.m. a 11:30 a.m., adjuntando copia de tu cédula y
            tu incapacidad.
          </p>
        </li>
        <li>
          <p className="fw-bold">Para Liquidaciones</p>
          <p>
            Para programar tú liquidación debes contar con tu paz y salvo y
            entregar tu respectivo carnet y uniformes. Una vez cuentes con él,
            comunícate a los diez (10) días hábiles a partir de la fecha de tu
            retiro con Tesorería al número 316 7200 700 para programar la fecha
            en la que podrás reclamarla.{" "}
          </p>
        </li>
        <li>
          <p className="fw-bold">
            Para inclusión de Beneficiarios a EPS y/o Caja de Compensación{" "}
          </p>
          <p>
            Debes enviar los siguientes documentos a nuestro correo
            gerencia@sideco.com.co, de lunes a viernes de 9:00 a.m. a 4:30 p.m.
            y sábados de 8:30 a.m. a 11:30 a.m.
          </p>
          <ul></ul>
          <p className="fw-bold">Para hijos menores de 7 años</p>
          <ul>
            <li>Registro civil</li>
            <li>Fotocopia de cédula</li>
          </ul>
          <p className="fw-bold">Para hijos mayores de 7 años</p>
          <ul>
            <li>Registro civil</li>
            <li>Copia de tarjeta de identidad</li>
            <li>Fotocopia de cédula</li>
          </ul>
        </li>
        <li>
          <p className="fw-bold">
            Para desprendibles de pago, certificaciones de ingreso y retenciones
          </p>
          <p>
            Los puedes solicitar a través del correo gerencia@sideco.com.co de
            lunes a viernes de 2:00 p.m. a 4:00 p.m.{" "}
          </p>
        </li>
        <li>
          <p className="fw-bold">Para Certificaciones Laborales</p>
          <p>
            Los puedes solicitar los miércoles de 10 a.m. a 4:00 p.m. y sábados
            de 8:30 a.m. a 12:00 m. a través del correo gerencia@sideco.com.co
            de lunes a viernes de 2:00 p.m. a 4:00 p.m.
          </p>
        </li>
      </ul>
    </div>
  );
}

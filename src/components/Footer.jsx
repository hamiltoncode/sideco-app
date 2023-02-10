import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import "../css/footer.css";
import appstore from "../assets/app-store.png";
import { LinkContainer } from "react-router-bootstrap";
import colombia from "../assets/colombia.svg";
import { BsEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="container-fluid mt-auto">
      <div className="row p-5 bg-dark text-white pb-0">
        <div className="col-xs-12 col-md-6 col-lg-3 pb-3">
          <p className="h5">Nuestras redes</p>
          <div className="text-secondary">
            <a href="https://www.facebook.com/" target={"_blank"}>
              <BsFacebook className="m-2 icon" />
            </a>
            <a href="https://www.instagram.com/" target={"_blank"}>
              <BsInstagram className="m-2 icon" />
            </a>
            <a href="https://twitter.com/" target={"_blank"}>
              <BsTwitter className="m-2 icon" />
            </a>
            <a href="https://www.linkedin.com/" target={"_blank"}>
              <BsLinkedin className="m-2 icon" />
            </a>
          </div>
          <div>
            <p className="h5 mt-5">Encuéntranos en</p>
            <LinkContainer to={"/"}>
              <img src={colombia} alt="" width={"10%"} />
            </LinkContainer>
          </div>
        </div>

        <div className="col-xs-12 col-md-6 col-lg-3 pb-3">
          <p className="h5">Sideco APP</p>
          <div className="text-secondary">
            <p>
              ¡Descarga ahora nuestra App Sideco! Agenda a tu experta de
              limpieza, revisa su perfil, adquiere los mejores servicios y mucho
              más, de manera fácil y rápida.
            </p>
            <a href="https://www.apple.com/co/app-store/" target={"_blank"}>
              <img src={appstore} alt="icono de app store" width={"45%"} />
            </a>
          </div>
        </div>

        <div className="col-xs-12 col-md-6 col-lg-3 pb-3">
          <p className="h5">Información</p>

          <div className="text-secondary footer-links">
            <LinkContainer to={"/about"}>
              <p>Nosotros</p>
            </LinkContainer>

            <LinkContainer to={"/trabaja-con-nosotros"}>
              <p>Trabaja con Nosotros</p>
            </LinkContainer>

            <LinkContainer to={"/contact"}>
              <p>Contáctanos</p>
            </LinkContainer>

            <LinkContainer to={"/terminos-y-condiciones"}>
              <p>Términos y condiciones</p>
            </LinkContainer>

            <a href="https://www.sic.gov.co/" target={"_blank"}>
              <p>SIC</p>
            </a>

            <LinkContainer to={"/preguntas-frecuentes"}>
              <p>Preguntas frecuentes</p>
            </LinkContainer>

            <LinkContainer to={"/politicas-de-privacidad"}>
              <p>Politicas de privacidad</p>
            </LinkContainer>
          </div>
        </div>

        <div className="col-xs-12 col-md-6 col-lg-3 pb-3">
          <p className="h5">Contacto</p>
          <div className="text-secondary">
            <p>SAC</p>
            <p>
              <BsEnvelopeFill /> servicioalcliente@sideco.com.co
            </p>
            <p>Ventas</p>
            <p>
              <BsEnvelopeFill /> ventas@sideco.com.co
            </p>
            <p>WhastApp</p>
            <p>
              <BsFillTelephoneFill /> +(57) 3167200700
            </p>
            <p>Gerencia</p>
            <p>
              <BsEnvelopeFill /> gerencia@sideco.com.co
            </p>
          </div>
        </div>

        <p className="copyright">
          Sideco © Copyright - Todos Los Derechos Reservados.
        </p>
      </div>
    </footer>
  );
}

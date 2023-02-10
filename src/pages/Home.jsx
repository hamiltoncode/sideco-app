import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import cafeteria from "../assets/c1.jpg";
import mantenimiento from "../assets/c2.jpg";
import servicios from "../assets/c3.jpg";
import "../css/home.css";
import { LinkContainer } from "react-router-bootstrap";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={cafeteria}
          alt="First slide"
        />
        <LinkContainer to={"/services/limpiezaycafeteria"}>
          <Carousel.Caption className="caption-carousel">
            <h3>LIMPIEZA Y CAFETERÍA</h3>
          </Carousel.Caption>
        </LinkContainer>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={mantenimiento}
          alt="Second slide"
        />
        <LinkContainer to={"/services/matenimientotecnico"}>
          <Carousel.Caption className="caption-carousel">
            <h3>MANTENIMIENTO TÉCNICO LOCATIVO</h3>
          </Carousel.Caption>
        </LinkContainer>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={servicios}
          alt="Third slide"
        />
        <LinkContainer to={"/services/serviciosespecializados"}>
          <Carousel.Caption className="caption-carousel">
            <h3>SERVICIOS ESPECIALIZADOS</h3>
          </Carousel.Caption>
        </LinkContainer>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;

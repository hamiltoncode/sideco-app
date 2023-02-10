import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { LinkContainer } from "react-router-bootstrap";
import { Outlet } from "react-router-dom";
import { useRef } from "react";
import { Helmet } from "react-helmet";
import cafeteria from "../assets/limpiezaycafeteria.jpg";
import mantenimiento from "../assets/mantenimientotecnicolocativo.jpg";
import servicios from "../assets/serviciosespecializados.jpg";

const services = [
  {
    title: "LIMPIEZA Y CAFETERÍA",
    img: cafeteria,
    url: "/services/limpiezaycafeteria",
  },
  {
    title: "MANTENIMIENTO TÉCNICO LOCATIVO ",
    img: mantenimiento,
    url: "/services/matenimientotecnico",
  },
  {
    title: "SERVICIOS ESPECIALIZADOS",
    img: servicios,
    url: "/services/serviciosespecializados",
  },
];

export default function Services() {
  const ref = useRef(null);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="container mb-5">
      <Helmet>
        <title>Sideco | Servicios </title>
      </Helmet>

      <h1 className="mt-5 mb-5">Servicos</h1>
      <Row xs={1} md={3} className="g-4">
        {services.map((data, i) => {
          return (
            <Col key={i}>
              <Card style={{ width: "100%", height: "100%" }}>
                <Card.Img variant="top" src={data.img} />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <LinkContainer to={data.url}>
                    <Button
                      variant="primary"
                      onClick={() => scrollToSection(ref)}
                    >
                      Conocer más
                    </Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <div ref={ref} id="info">
        <Outlet />
      </div>
    </div>
  );
}

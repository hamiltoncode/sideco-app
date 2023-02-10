import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Figure from "react-bootstrap/Figure";
import imgnosotros from "../assets/imgnosotros.jpg";
import "../css/about.css";
import "../css/texto-justificado.css";

const dirEstrategico = [
  {
    title: "Quiénes Somos",
    description:
      "Somos una empresa 100% colombiana dedicada a ofrecer soluciones Integrales de Aseo y Mantenimiento a Empresas y Propiedad Horizontal, dando atención oportuna a las necesidades y expectativas de Limpieza, Desinfección, Fumigación, Jardinería, Cafetería, Mantenimiento Técnico Locativo y Otros Servicios Especializados.",
  },
  {
    title: "Misión",
    description:
      "Brindar soluciones Integrales de Aseo y Mantenimiento, ofreciendo servicios de calidad a Empresas y Propiedad Horizontal, dando atención oportuna a las necesidades y expectativas de nuestros clientes.\nLogrando la felicidad y el éxito de nuestros colaboradores enfocados en la mejora continua, generando valor para todos nuestros grupos de interés.",
  },
  {
    title: "Visión",
    description:
      "En el año 2025 ser reconocida como empresa líder en la prestación de servicios de Aseo y Mantenimiento; basados en procesos eficientes y eficaces con un capital humano comprometido con prestar servicios de calidad.",
  },
  {
    title: "Política del Sistema de Gestión Integral",
    description:
      "En Soluciones Integrales de Colombia- SIDECO SAS. ofrecemos soluciones integrales de acuerdo a las necesidades de nuestros clientes. contribuyendo en la construcción de un mundo más limpio, sostenible y con mayor bienestar para todos. Trabajamos con calidad para posicionarnos en el mercado, cumpliendo nuestros objetivos y ejecutando nuestras operaciones comprometidos con: ",
  },
];

const acronimo = [
  {
    letter: "C",
    description: "ompromiso",
  },
  {
    letter: "A",
    description: "tención",
  },
  {
    letter: "L",
    description: "iderazgo",
  },
  {
    letter: "I",
    description: "ntegridad",
  },
  {
    letter: "D",
    description: "inamismo",
  },
  {
    letter: "A",
    description: "mabilidad",
  },
  {
    letter: "D",
    description: "estreza",
  },
];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="text-justify">
      <Helmet>
        <title>Sideco | Nosotros </title>
      </Helmet>

      <Figure>
        <Figure.Image
          className="img-fluid img-about"
          alt="171x180"
          src={imgnosotros}
        />
        <Figure.Caption className="text-center text-black">
          <h2 className="mt-3 mb-0">Sobre nosotros</h2>
          Desde 2021 creando soluciones a la medida de tus necesidades.
        </Figure.Caption>
      </Figure>

      <section className="container">
        {dirEstrategico.map((data, i) => {
          return (
            <div key={i}>
              <h4 className="mt-4">{data.title}</h4>
              <p className="line-space mt-3">{data.description}</p>
            </div>
          );
        })}
        <div>
          <ul>
            <li>
              Facilitar condiciones de trabajo seguras y saludables, previniendo
              lesiones y/o enfermedades laborales.
              <li>
                Prevenir la contaminación del medio ambiente promoviendo la
                reducción, re utilización y aprovechamiento de los residuos
                sólidos.
              </li>
              <li>
                Promover la cultura de mejora continua en todos nuestros
                procesos soportados en el Sistema de Gestión Integral.
              </li>
              <li>
                Eliminar o mitigar los peligros y reducir los riesgos mediante
                la identificación de los mismos, evaluando, valorando y
                determinando los respectivos controles, con el objetivo de
                garantizar la seguridad y salud de todos nuestros colaboradores,
                contratistas, proveedores y visitantes.
              </li>
              <li>
                Cumplir con los requisitos legales y otros requisitos
                aplicables.
              </li>
              <li>
                Promover una cultura de datos y hechos basada en el seguimiento
                de indicadores de gestión.
              </li>
              <li>
                Administrar adecuadamente los activos durante su ciclo de vida,
                optimizando el costo, el riesgo y el desempeño, garantizando la
                sostenibilidad del negocio.
              </li>
              <li>
                Buscar continuamente la innovación en el uso de tecnologías
                aplicables de acuerdo a la naturaleza del negocio.
              </li>
              <li>
                Tener en cuenta a los trabajadores y/o sus representantes en la
                consulta y la participación de nuestro sistema de gestión
                integral.
              </li>
              <li>
                Trabajar con una visión bajo la metodología de la planeación
                estratégica que garantice el logro de los objetivos.
              </li>
            </li>
          </ul>

          <p>
            Nuestros compromisos buscan garantizar la satisfacción de las partes
            interesadas y generar estrategias de gestión a los riesgos y
            oportunidades en el contexto de nuestra empresa, asignando los
            recursos necesarios para la ejecución de procesos, contando con un
            capital humano competente orientado a cumplir los objetivos
            organizacionales, manteniendo y mejorando su calidad de vida.
          </p>

          <h2 className="mt-3 mb-0">Responsabilidad Social Empresarial</h2>
          <p className="line-space mt-3">
            "Soluciones Integrales de Colombia- SIDECO SAS. tiene un gran valor
            de responsabilidad frente a la sociedad y el entorno que nos rodea.
            Los problemas ambientales generados por la contaminación, el aumento
            de las enfermedades laborales y el agotamiento de los recursos
            naturales requieren un compromiso real por parte de todos los
            sectores económicos. SIDECO SAS refleja su compromiso por medio de
            la Política de Gestión Integral que promueve la protección y
            conservación del Medio ambiente, reduciendo los impactos
            socio-ambientales derivados de nuestra operación.
          </p>
        </div>
        <div className="d-flex flex-column container-acronimo mb-5">
          <h2 className="mt-5">Valores Corporativos</h2>
          <p className="mb-4" id="valores-description">
            Aquí encontraras <span id="span-valores">Calidad</span>
          </p>

          {acronimo.map((data, i) => {
            return (
              <div key={i} className="d-flex justify-content-center acronimo">
                <span>{data.letter}</span>
                <p>{data.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

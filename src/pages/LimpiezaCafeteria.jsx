import { useEffect } from "react";
import { useRef } from "react";
import '../css/list-space.css'

const data = [
  {
    title: "Servicio de Limpieza",
    depcription:
      "Contamos con capital humano altamente capacitado en técnicas de aseo para la limpieza de edificios, oficinas, centros comerciales, grandes superficies, colegios, universidades, aeropuertos, hoteles y conjuntos residenciales, entre otros. Implementamos procedimientos de limpieza adaptados a las necesidades específicas de cada uno de nuestros clientes, poniendo a su disposición maquinaria de última tecnología.",
    items: [
      "Limpieza integral de empresas y grandes superficies",
      "Limpieza general de recepciones y oficinas",
      "Limpieza de pisos y escaleras",
      "Limpieza de áreas externas: pasillos y accesos",
      "Limpieza de ascensores, salas de espera y tapetes",
      "Limpieza de paredes, vidrios de zonas comunes y sociales",
      "Limpieza de las zonas de parqueo",
      "Limpieza, lavado y desinfección de baños",
      "Recolección interna, organización y evacuación de residuos hasta su lugar de acopio.",
    ],
  },
  {
    title: "Servicio de Cafetería",
    depcription:
      "Contamos con colaboradores capacitados para la manipulación de alimentos y con cursos de Etiqueta y Protocolo, para garantizar un excelente servicio a nuestros clientes.",
    items: [
      "Preparación de café, té y aromáticas.",
      "Ofrecimiento de bebidas calientes y frías en los horarios establecidos por el cliente.",
      "Recorridos periódicos para recoger utensilios ya usados.",
      "Atención de reuniones y/o eventos especiales realizados dentro de las instalaciones del cliente.",
    ],
  },
];
export default function LimpiezaCafeteria() {
  const ref = useRef(null);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToSection(ref);
    scrollToSection(ref);
  }, []);
  return (
    <div ref={ref} className="container mt-4 pt-1">
      <hr className="mt-5" />
      <h1 className="pt-5">LIMPIEZA Y CAFETERÍA</h1>
      {data.map((data, i) => {
        return (
          <div key={i}>
            <p className="fs-3">{data.title}</p>
            <p>{data.depcription}</p>
            <ul>
              {data.items.map((element, i) => {
                return <li key={i}>{element}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

import { useEffect } from "react";
import { useRef } from "react";
import '../css/list-space.css'

const data = [
  {
    title: "Mantenimiento Técnico de Infraestructura:",
    depcription:
      "Gestionamos de forma integral el mantenimiento de los activos, orientado a la maximización de la vida útil, disponibilidad y optimización de los mismos. Contamos con Recurso Humano altamente calificado para llevar a cabo estas actividades.",
    items: [],
  },
  {
    title: "Mantenimiento preventivo:",
    depcription:
      "Corrige los defectos presentados en los equipamientos o instalaciones, consiste en localizar averías o defectos para corregirlos o repararlos.",
    items: [],
  },
  {
    title: "Mantenimiento correctivo:",
    depcription:
      "Es el destinado a la conservación de equipos o instalaciones mediante la realización de revisión periódica y limpieza que garanticen su buen funcionamiento, confiabilidad y disponibilidad",
    items: [],
  },
  {
    title: "Mantenimiento Hidrosanitario:",
    depcription: "",
    items: [
      "Inspección de tubería hidrosanitaria.",
      "Verificación y limpieza de sifones.",
      "Limpieza de canales y rejillas.",
      "Verificación y ajustes de las baterías sanitarias.",
      "Verificación y corrección de fugas en grifos, fluxómetro y accesorios sanitarios.",
    ],
  },
  {
    title: "Mantenimiento de Infraestructura:",
    depcription: "Mantenimiento de Mobiliario:",
    items: [
      "Mantenimiento de escritorios, gabinetes, archivadores, mesas, paneles, bibliotecas, archivos, estantes, sillas.",
      "Reubicación de puestos de trabajo en oficina abierta.",
    ],
  },
  {
    title: "Mantenimiento Locativo:",
    depcription: "",
    items: [
      "Obra civil menor.",
      "Impermeabilización de superficies.",
      "Pintura de paredes, fachadas y techos.",
      "Cerrajería.",
      "Plomería.",
      "Carpintería.",
      "Enchapes.",
    ],
  },
  {
    title: "Mantenimiento Eléctrico:",
    depcription: "",
    items: [
      "Inspección y limpieza de tableros eléctricos de distribución de baja tensión.",
      "Inspección de luminarias (lámparas y reflectores).",
      "Sujeción de lámparas.",
      "Cambio de luminarias según recomendación de consumo eléctrico.",
      "Verificación de sujeción de las tapas de las cajas de distribución.",
      "Ajuste mecánico de tuercas y tornillos de cajas.",
    ],
  },
  {
    title: "Mantenimiento de equipos:",
    depcription: "",
    items: ["Motobombas"],
  },
];

export default function MantenimientoTecnico() {
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
      <h1 className="pt-5">MANTENIMIENTO TÉCNICO LOCATIVO</h1>
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

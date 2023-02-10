import { useEffect } from "react";
import { useRef } from "react";
import '../css/list-space.css'

const data = [
  {
    title: "Jardinería",
    depcription: "",
    items: [
      "Mantenimiento de zonas verdes, jardines y plantas.",
      "Poda y corte de zonas verdes",
      "Remoción de tierra",
      "Traslado y reemplazo de plantas",
      "Mantenimiento y limpieza de terrazas, macetas, jardineras y soportes.",
      "Aplicación de productos en jardines para el control de insectos voladores y rastreos.",
    ],
  },
  {
    title: "Brigadas de aseo",
    depcription: "",
    items: [
      "Aseo profundo de puestos de trabajo.",
      "Aspirado de sillas.",
      "Aspirado de tapetes.",
      "Lavado de pisos.",
      "Limpieza de paredes y/o ventanales internos.",
      "Limpieza de baños, escaleras y barandas.",
    ],
  },
  {
    title: "Limpieza de terminación de obra",
    depcription:
      "Intervención de obras para retirar la suciedad gruesa o fina de las distintas áreas.",
    items: [
      "Limpieza gruesa.",
      "Limpieza fina.",
      "Limpieza de repaso.",
      "Limpieza permanente de obra.",
    ],
  },
  {
    title: "Fumigación y control de plagas",
    depcription: "",
    items: [
      "Control de plagas.",
      "Control de insectos voladores y rastreros (cucarachas, moscas, zancudos, hormigas, pulgas, arañas, polillas, ácaros y larvas).",
      "Control de cucarachas.",
      "Control de roedores.",
      "Desinfección ambiental contra hongos, virus y bacterias.",
    ],
  },
  {
    title: "Tratamiento de pisos",
    depcription:
      "Llevamos a cabo el tratamiento de pisos con tecnología de punta.",
    items: [
      "Cristalizado de pisos (granito, mármol y terrazo)",
      "Sellado de pisos (vinilo, porcelanato, concreto pulido, baldosa, tableta española, piedra muñeca)",
      "Lavado de pisos (porcelanato, baldosas y piedra muñeca)",
    ],
  },
  {
    title: "Limpieza de cubiertas",
    depcription: "",
    items: [
      "Limpieza de vigas canales.",
      "Limpieza de bajantes y canaletas.",
      "Limpieza de tejas traslúcidas.",
    ],
  },
  {
    title: "Lavado y desengrasado de bodegas y parqueaderos",
    depcription: "",
    items: [
      "Lavado de bodegas y parqueaderos.",
      "Desengrasado de pisos y muros.",
      "Insumos para desengrasado de áreas críticas.",
      "Valoración de necesidad de desengrasado y lavado.",
    ],
  },
];

export default function ServiciosEspecializados() {
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
      <h1 className="pt-5">SERVICIOS ESPECIALIZADOS</h1>

      <p>
        Contamos con colaboradores altamente calificados y acreditados para la
        prestación de servicios de aseo con los mejores estándares de calidad y
        condiciones seguras.
      </p>

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

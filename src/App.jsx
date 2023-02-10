import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import NavbarApp from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import LimpiezaCafeteria from "./pages/LimpiezaCafeteria";
import MantenimientoTecnico from "./pages/MantenimientoTecnicoLocativo";
import ServiciosEspecializados from "./pages/ServiciosEspecializados";
import Account from "./pages/Account";
import TrabajaConNosotros from "./pages/TrabajaConNosotros";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes";
import PoliticasDePrivacidad from "./pages/PoliticasDePrivacidad";
import TerminosYCondiciones from "./pages/TerminosYCondiciones";
import Contact from "./pages/Contact";
import Ventas from "./pages/Ventas";
import ServicioAlCliente from "./pages/ServicioAlCliente";
import LineaEtica from "./pages/LineaEtica";
import Enviado from "./pages/Enviado";
import WhatsApp from "./components/WhatsApp";


function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Sideco</title>
      </Helmet>
      <NavbarApp />
      <WhatsApp />
      <div className="mt-5 pt-4">
        <Routes>
          <Route path="/" element={<Navigate replace to={"/home"} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/" element={<Services />}>
            <Route path="limpiezaycafeteria" element={<LimpiezaCafeteria />} />
            <Route
              path="matenimientotecnico"
              element={<MantenimientoTecnico />}
            />
            <Route
              path="serviciosespecializados"
              element={<ServiciosEspecializados />}
            />
          </Route>
          <Route path="/account" element={<Account />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ventas" element={<Ventas />} />
          <Route path="/servicio-al-cliente" element={<ServicioAlCliente />} />
          <Route path="/linea-etica" element={<LineaEtica />} />
          <Route path="/terminos-y-condiciones" element={<TerminosYCondiciones />} />
          <Route path="/trabaja-con-nosotros" element={<TrabajaConNosotros/>} />
          <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes/>}/>
          <Route path="/politicas-de-privacidad" element={<PoliticasDePrivacidad/>}/>
          <Route path="/enviado" element={<Enviado/>}/>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

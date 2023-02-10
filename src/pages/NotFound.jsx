import React, { useEffect } from "react";
import "../css/centrado.css";

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="notfound">
      <h1>Página no encontrada</h1>
    </div>
  );
}

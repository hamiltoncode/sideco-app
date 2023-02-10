import React from "react";
import "../css/wsp.css";
import { BsWhatsapp } from "react-icons/bs";

export default function WhatsApp() {
  return (
    <>
      <a
        href="https://api.whatsapp.com/send?phone=573167200700"
        className="btn-wsp"
        target={"_blank"}
      >
        <BsWhatsapp />
      </a>
    </>
  );
}

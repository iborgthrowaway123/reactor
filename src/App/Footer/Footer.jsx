import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer fixed-bottom">
      Copyrights 2020 - {new Date().getFullYear()} All Rights Reserved.
    </div>
  );
}

export default Footer;

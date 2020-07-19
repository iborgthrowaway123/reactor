import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer fixed-bottom font-weight-light">
      Copyrights 2019 - {new Date().getFullYear()} iBorg. All Rights Reserved.
    </div>
  );
}

export default Footer;

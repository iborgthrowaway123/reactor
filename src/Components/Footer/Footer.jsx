import React from "react";
import "./Footer.css";

const Footer = () => (
  <div className="Footer fixed-bottom font-weight-light">
    Copyrights 2019 - {new Date().getFullYear()} iBorg. All Rights Reserved.
  </div>
);

export default Footer;

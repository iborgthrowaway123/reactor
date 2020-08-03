import React from "react";
import "./Home.css";
import logo from "../Pictures/Logo.png"

const Home = () => (
  <div className="Home" align="center">
    <img
      className="Logo"
      src={logo}
      alt=""
    />
  </div>
);

export default Home;

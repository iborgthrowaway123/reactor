import React from "react";
import "./Home.css";
import logo from "../Pictures/Logo.png";
import Graph from "../Graph/Graph";

const Home = () => (
  <div>
    <div className="Home" align="center">
      <img
        className="Logo"
        src={logo}
        alt=""
      />
    </div>
    <br />
    <div className="Graph" align="center">
      <Graph />
    </div>
  </div>
);

export default Home;

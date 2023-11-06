import React from "react";
import "../App.css";
import planet from "../assets/planet.svg";

const Footer = () => {
  return (
    <div className="row">
      <img src={planet} className="planet" />
    </div>
  );
};

export default Footer;

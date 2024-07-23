import React from "react";
import "../style/connexion.css";
import Login from "../components/login";

const Connexion = () => {
  return (
    <div className="connexion-container">
      <div className="connexion-content">
        <Login />
      </div>
    </div>
  );
};

export default Connexion;

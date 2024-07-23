import React, { useState } from "react";
import "../style/connexion.css";
import Login from "../components/login";
import SignUp from "../components/signup";

const Connexion = () => {
  const [isSignup, setIsSignup] = useState<boolean>(false);

  const toggleSignup = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="connexion-container">
      {isSignup ? (
        <div className="connexion-content">
          <SignUp />
          <button onClick={toggleSignup}>Se connecter</button>
        </div>
      ) : (
        <div className="connexion-content">
          <Login />
          <button onClick={toggleSignup}>S'inscrire</button>
        </div>
      )}
    </div>
  );
};

export default Connexion;

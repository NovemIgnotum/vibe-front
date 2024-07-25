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
          <hr
            style={{
              width: "100%",
              color: "black",
              backgroundColor: "black",
              height: 1,
            }}
          />
          <button className="change-button" onClick={toggleSignup}>
            Se connecter
          </button>
        </div>
      ) : (
        <div className="connexion-content">
          <Login />
          <hr
            style={{
              width: "100%",
              color: "black",
              backgroundColor: "black",
              height: 1,
            }}
          />
          <button className="change-button" onClick={toggleSignup}>
            S'inscrire
          </button>
        </div>
      )}
    </div>
  );
};

export default Connexion;

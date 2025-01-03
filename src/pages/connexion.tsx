import React, { useState } from "react";
import "../style/connexion.css";
import Login from "../components/login";
import SignUp from "../components/signup";

const Connexion = () => {
  const [alreadyHaveAccount, setAlreadyHaveAccount] = useState<boolean>(false);

  const toggleHaveAccount = () => {
    setAlreadyHaveAccount(!alreadyHaveAccount);
  };

  return (
    <div className="connexion-container">
      {alreadyHaveAccount ? (
        <div className="connexion-content">
          <SignUp alreadyHaveAccount={toggleHaveAccount} />
        </div>
      ) : (
        <div className="connexion-content">
          <Login alreadyHaveAccount={toggleHaveAccount} />
        </div>
      )}
    </div>
  );
};

export default Connexion;

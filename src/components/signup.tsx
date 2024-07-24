import React, { useState } from "react";

const Signup = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    firstName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    adress: {
      street: "",
      city: "",
      zipCode: "",
    },
    pseudo: "",
  });

  return (
    <div
      style={{
        backgroundColor: "RED",
        height: "800px",
        display: "flex",
        flexDirection: "column",
        width: "800px",
      }}
    >
      <label htmlFor="Nom">Nom</label>
      <input type="text" id="Nom" name="Nom" />
      <label htmlFor="Prénom">Prénom</label>
      <input type="text" id="Prénom" name="Prénom" />
      <label htmlFor="Email">Email</label>
      <input type="text" id="Email" name="Email" />
      <label htmlFor="Mot de passe">Mot de passe</label>
      <input type="password" id="Mot de passe" name="Mot de passe" />
      <label htmlFor="Confirmer mot de passe">Confirmer mot de passe</label>
      <input
        type="password"
        id="Confirmer mot de passe"
        name="Confirmer mot de passe"
      />
      <button>Suivant </button>
    </div>
  );
};

export default Signup;

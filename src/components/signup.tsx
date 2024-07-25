import React, { useState } from "react";
import "./style/signup.css";

const Signup = () => {
  const [stepCounter, setStepCounter] = useState(1);
  const [formValues, setFormValues] = useState({
    name: "",
    firstName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    address: {
      street: "",
      city: "",
      zipCode: "",
    },
    pseudo: "",
  });

  const createUser = async () => {
    console.log("User created");
    console.log(formValues);
    setFormValues({
      name: "",
      firstName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      address: {
        street: "",
        city: "",
        zipCode: "",
      },
      pseudo: "",
    });
  };

  return (
    <div>
      {stepCounter === 1 ? (
        <div className="signUp-form">
          <div className="wrapper">
            <h1>Inscription</h1>
            <label htmlFor="Nom">Nom</label>
            <input
              className="form-input"
              type="text"
              id="Nom"
              name="Nom"
              value={formValues.name}
              onChange={(e) =>
                setFormValues({ ...formValues, name: e.target.value })
              }
            />
            <label htmlFor="Prénom">Prénom</label>
            <input
              className="form-input"
              type="text"
              id="Prénom"
              name="Prénom"
              value={formValues.firstName}
              onChange={(e) =>
                setFormValues({ ...formValues, firstName: e.target.value })
              }
            />
            <label htmlFor="Email">Email</label>
            <input
              className="form-input"
              type="text"
              id="Email"
              name="Email"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
            />

            <label htmlFor="Pseudonyme">Pseudonyme</label>
            <input
              className="form-input"
              type="text"
              id="Pseudonyme"
              name="Pseudonyme"
              value={formValues.pseudo}
              onChange={(e) =>
                setFormValues({ ...formValues, pseudo: e.target.value })
              }
            />
            <label htmlFor="Mot de passe">Mot de passe</label>
            <input
              className="form-input"
              type="password"
              id="Mot de passe"
              name="Mot de passe"
              value={formValues.password}
              onChange={(e) =>
                setFormValues({ ...formValues, password: e.target.value })
              }
            />
            <label htmlFor="Confirmation du mot de passe">
              Confirmation du mot de passe
            </label>
            <input
              className="form-input"
              type="password"
              id="Confirmation du mot de passe"
              name="Confirmation du mot de passe"
              value={formValues.passwordConfirm}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  passwordConfirm: e.target.value,
                })
              }
            />
            <button
              className="validate-button"
              onClick={() => setStepCounter(stepCounter + 1)}
            >
              Suivant
            </button>
          </div>
        </div>
      ) : stepCounter === 2 ? (
        <div className="signUp-form">
          <h1>Inscription</h1>

          <div className="wrapper">
            <label htmlFor="Adresse">Adresse</label>
            <input
              className="form-input"
              type="text"
              id="Adresse"
              name="Adresse"
              value={formValues.address.street}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  address: { ...formValues.address, street: e.target.value },
                })
              }
            />
            <label htmlFor="Ville">Ville</label>
            <input
              className="form-input"
              type="text"
              id="Ville"
              name="Ville"
              value={formValues.address.city}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  address: { ...formValues.address, city: e.target.value },
                })
              }
            />
            <label htmlFor="Code postal">Code postal</label>
            <input
              className="form-input"
              type="text"
              id="Code postal"
              name="Code postal"
              value={formValues.address.zipCode}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  address: { ...formValues.address, zipCode: e.target.value },
                })
              }
            />
          </div>
          <div className="button-wrapper">
            <button
              className="cancel-button"
              onClick={() => setStepCounter(stepCounter - 1)}
            >
              Précédent
            </button>
            <button className="validate-button" onClick={() => createUser()}>
              Validez
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Signup;

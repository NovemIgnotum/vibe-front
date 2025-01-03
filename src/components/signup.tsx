import React, { useState } from "react";
import axios from "axios";
import "./style/signup.css";
import { toast } from "react-toastify";

interface props {
  alreadyHaveAccount: () => void;
}

const Signup = (props: props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    firstName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    pseudo: "",
  });

  const createUser = async () => {
    if (
      formValues.name === "" ||
      formValues.firstName === "" ||
      formValues.email === "" ||
      formValues.password === "" ||
      formValues.passwordConfirm === "" ||
      formValues.pseudo === ""
    ) {
      toast.error("Veuillez remplir tous les champs du formulaire");
      return;
    } else {
      if (formValues.password !== formValues.passwordConfirm) {
        toast.error("Les mots de passe ne correspondent pas");
        return;
      } else {
        try {
          await axios
            .post(`${process.env.REACT_APP_API_URL}/user/create`, {
              name: formValues.name,
              firstname: formValues.firstName,
              email: formValues.email,
              password: formValues.password,
              pseudo: formValues.pseudo,
              role: "user",
            })
            .then((res) => {
              toast.success("Utilisateur créé avec succès");
              setFormValues({
                name: "",
                firstName: "",
                email: "",
                password: "",
                passwordConfirm: "",
                pseudo: "",
              });
            })
            .catch((e) => {
              console.error("Error while creating user", e);
              toast.error("Erreur lors de la création de l'utilsateur");
            });
        } catch (e) {
          console.log("Error while creating user", e);
          toast.error("Erreur lors de la création de l'utilisateur");
        }
      }
    }
  };

  return (
    <div className="signUp-form">
      <div className="wrapper">
        <h2>Inscription</h2>
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
        <button className="validate-button" onClick={() => createUser()}>
          Créez mon compte
        </button>
      </div>
      <hr
        style={{
          width: "100%",
          color: "black",
          backgroundColor: "black",
          height: 1,
          marginTop: "5%",
        }}
      />
      <button
        className="change-button"
        style={{
          marginTop: "2%",
        }}
        onClick={props.alreadyHaveAccount}
      >
        Se connecter
      </button>
    </div>
  );
};

export default Signup;

import React, { useState } from "react";
import axios from "axios";
import "./style/login.css";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

interface props {
  alreadyHaveAccount: () => void;
}

const Login = (props: props) => {
  const navigate = useNavigate();
  const { toggleSignup } = useAuth();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const loginUser = async () => {
    try {
      if (formValues.email === "" || formValues.password === "") {
        toast.error("Veuillez remplir tous les champs du formulaire");
        return;
      } else {
        await axios
          .post(`${process.env.REACT_APP_API_URL}/user/login`, {
            email: formValues.email,
            password: formValues.password,
          })
          .then((res) => {
            toggleSignup();
            localStorage.setItem("id", res.data.id);
            localStorage.setItem("token", res.data.token);
            setFormValues({
              email: "",
              password: "",
            });
            navigate("/home");
          })
          .catch((e) => {
            console.error("Error while logging in user", e);
            toast.error("Erreur lors de la connexion de l'utilsateur");
          });
      }
    } catch (e) {
      console.error("Error while creating user", e);
      toast.error("Erreur lors de la création de l'utilsateur");
    }
  };

  return (
    <div className="signUp-form">
      <div
        className="wrapper"
        style={{
          marginTop: "10%",
        }}
      >
        <h1
          style={{
            color: "#41D360",
            fontSize: "2rem",
            marginBottom: "25%",
          }}
        >
          Connexion
        </h1>
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
        <hr
          style={{
            marginTop: "10%",
            marginBottom: "5%",
          }}
        />
        <label htmlFor="Email">mot de passe</label>
        <input
          className="form-input"
          type="password"
          id="Email"
          name="Email"
          value={formValues.password}
          onChange={(e) =>
            setFormValues({ ...formValues, password: e.target.value })
          }
        />
      </div>
      <hr
        style={{
          marginTop: "5%",
        }}
      />
      <div>
        <button className="change-button">Mot de passe oublié ?</button>
      </div>
      <button className="validate-button" onClick={loginUser}>
        Connexion
      </button>
      <hr
        style={{
          width: "100%",
          color: "black",
          backgroundColor: "black",
          height: 1,
          marginTop: "10%",
          marginBottom: "5%",
        }}
      />

      <button className="change-button" onClick={props.alreadyHaveAccount}>
        S'inscrire
      </button>
    </div>
  );
};

export default Login;

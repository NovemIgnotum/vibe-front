import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import "../styles/Connexion.css";
import Logo from "../assets/logo.png";
type Inputs = {
  email: string;
  password: string;
};

type singin = {
  name: string;
  firstname: string;
  email: string;
  pseudo: string;
  password: string;
  passwordConfirm: string;
};

const Connexion = () => {
  const [isSignup, setIsSignup] = useState(true);

  const Signup = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
      console.log(data);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_APP_API_URL}/user/login`,
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const result = await response.json();
        console.log("response", response);
        console.log("result", result);
        console.log(document.cookie);
      } catch (error) {
        console.error(error);
      }
    };
    return (
      <div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <label>Adresse mail</label>
          <input {...register("email", { required: true })} />
          {errors.email && <span>This field is required</span>}
          <label>Mot de passe</label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
          <input type="submit" />
          <button onClick={() => setIsSignup(false)}>S'inscrire</button>
        </form>
      </div>
    );
  };
  const Signin = () => {
    const { register, handleSubmit } = useForm<singin>();
    const onSubmit: SubmitHandler<singin> = async (data) => {
      console.log(data);
      try {
        console.log(`${import.meta.env.VITE_APP_API_URL}/user/create`);
        const response = await fetch(
          `${import.meta.env.VITE_APP_API_URL}/user/create`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const result = await response.json();
        console.log("response", response);
        console.log("result", result);
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <div className="modal">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <label>Nom</label>
          <input {...register("name", { required: true })} />
          <label>Prénom</label>
          <input {...register("firstname", { required: true })} />
          <label>Pseudonyme</label>
          <input {...register("pseudo", { required: true })} />
          <label>Adresse mail</label>
          <input {...register("email", { required: true })} />
          <label>Mot de passe</label>
          <input {...register("password", { required: true })} />
          <label>Confirmation de mot de passe</label>
          <input {...register("passwordConfirm", { required: true })} />
          <input type="submit" />
          <button onClick={() => setIsSignup(true)}>Se connecter</button>
        </form>
      </div>
    );
  };

  return (
    <div className="container">
      <img src={Logo} alt="logo" />
      <div className="connexion">{!isSignup ? Signin() : Signup()}</div>
    </div>
  );
};

export default Connexion;

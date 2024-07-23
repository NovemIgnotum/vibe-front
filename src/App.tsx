import { useEffect } from "react";
import "./App.css";
import Connexion from "./pages/connexion";
import axios from "axios";

console.log(process.env.REACT_APP_API_URL);

function App() {
  useEffect(() => {
    isServerUp();
  }, []);

  const isServerUp = async () => {
    try {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/user/ServerUp`)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Connexion />
        here
      </header>
    </div>
  );
}

export default App;

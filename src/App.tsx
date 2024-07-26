import { useEffect, useState } from "react";
import { backendHealth } from "./utils/backendHealth";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Connexion from "./pages/connexion";
import { ToastContainer } from "react-toastify";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const [isBackendAvailable, setIsBackendAvailable] = useState(false);
  const { isSignup, toggleSignup } = useAuth();

  useEffect(() => {
    const checkBackendHealth = async () => {
      const isAvailable = await backendHealth();
      setIsBackendAvailable(isAvailable);
    };

    checkBackendHealth();

    const interval = setInterval(checkBackendHealth, 200000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      <header className="App-header">
        {isBackendAvailable ? (
          isSignup ? (
            <div>
              <Connexion />
            </div>
          ) : (
            <div>
              <p>user connecté</p>
              <button onClick={toggleSignup}>Déconnexion</button>
            </div>
          )
        ) : (
          <p>Connexion au serveur de Vibe impossible, réessayer plus tard</p>
        )}
      </header>
    </div>
  );
};

export default App;

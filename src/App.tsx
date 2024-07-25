import { useEffect, useState } from "react";
import { backendHealth } from "./utils/backendHealth";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import Connexion from "./pages/connexion";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [isBackendAvailable, setIsBackendAvailable] = useState(false);

  useEffect(() => {
    const checkBackendHealth = async () => {
      const isAvailable = await backendHealth();
      setIsBackendAvailable(isAvailable);
      console.log("Backend health checked");
    };

    checkBackendHealth(); 

    const interval = setInterval(checkBackendHealth, 20000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      <header className="App-header">
        {isBackendAvailable ? (
          <div>
            <Connexion />
          </div>
        ) : (
          <p>Connexion au serveur de Vibe impossible, réessayer plus tard</p>
        )}
      </header>
    </div>
  );
};

export default App;

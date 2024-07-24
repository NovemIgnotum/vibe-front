import { useEffect, useState } from "react";
import { backendHealth } from "./utils/backendHealth";
import "./App.css";
import Connexion from "./pages/connexion";

const App = () => {
  const [isBackendAvailable, setIsBackendAvailable] = useState(false);

  useEffect(() => {
    const checkBackendHealth = async () => {
      const isAvailable = await backendHealth();
      setIsBackendAvailable(isAvailable);
      console.log("Backend health checked");
    };

    checkBackendHealth(); // Call initially to check immediately on mount

    const interval = setInterval(checkBackendHealth, 20000); // Set interval to 1 minute

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="App">
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

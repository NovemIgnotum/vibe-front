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
    };

    checkBackendHealth();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {isBackendAvailable ? (
          <div>
            <Connexion />
            here
          </div>
        ) : (
          <p>Backend not available</p>
        )}
      </header>
    </div>
  );
};

export default App;

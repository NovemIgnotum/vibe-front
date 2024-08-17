import { useEffect, useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Connexion from "./pages/connexion";
import { ToastContainer } from "react-toastify";
import { useAuth } from "./context/AuthContext";
import Header from "./components/Header";
import Home from "./pages/home";
import Profil from "./pages/userProfil";

const App = () => {
  const { isSignup } = useAuth();
  const [showProfil, setShowProfil] = useState(false);

  const handleShowProfil = () => {
    setShowProfil(true);
  };

  const handleGoBackToHome = () => {
    setShowProfil(false);
  };

  useEffect(() => {}, [isSignup]);

  return (
    <div className="App">
      <ToastContainer />
      <header className="App-header">
        {!isSignup ? (
          <div>
            <Connexion />
          </div>
        ) : (
          <div className="body">
            <Header
              showProfil={handleShowProfil}
              goBackToHome={handleGoBackToHome}
            />
            {showProfil ? <Profil /> : <Home />}
          </div>
        )}
      </header>
    </div>
  );
};

export default App;

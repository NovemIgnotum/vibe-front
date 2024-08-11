import { useEffect } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Connexion from "./pages/connexion";
import { ToastContainer } from "react-toastify";
import { useAuth } from "./context/AuthContext";
import Header from "./components/Header";
import Home from "./pages/home";

const App = () => {
  const { isSignup } = useAuth();

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
            <Header />
            <Home />
          </div>
        )}
      </header>
    </div>
  );
};

export default App;

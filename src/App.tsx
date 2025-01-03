import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Connexion from "./pages/connexion";
import { ToastContainer } from "react-toastify";
import { useAuth } from "./context/AuthContext";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAudio } from "./context/AudioContext";

import Home from "./pages/home";
import Profil from "./pages/userProfil";
import PlayList from "./pages/Playlist";
const AppContent = () => {
  const { isSignup } = useAuth();
  const { isPlayerActive } = useAudio();

  return (
    <div className={`app-container ${isPlayerActive ? "player-active" : ""}`}>
      <ToastContainer />
      {isSignup && <Header />}
      <header className="App-header">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/playlist/:playListId" element={<PlayList />} />
        </Routes>
      </header>
      {!isSignup ? (
        <div>
          <Connexion />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { SearchContextProvider } from "./context/SearchContext";
import { UserProvider } from "./context/UserContext";
import { AudioProvider } from "./context/AudioContext";
import AudioPlayer from "./components/AudioPlayer";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <AudioProvider>
          <SearchContextProvider>
            <App />
            <AudioPlayer />
          </SearchContextProvider>
        </AudioProvider>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>
);

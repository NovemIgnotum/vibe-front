import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { SearchContextProvider } from "./context/SearchContext";
import { UserProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>
);

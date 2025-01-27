import "./App.css";
import Connexion from "./pages/Connexion";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";

function App() {
  const [isFetched, setIsFetched] = useState(false);

  const fetchProfile = useCallback(async () => {
    if (isFetched) return; // Éviter les appels multiples
    setIsFetched(true);

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_APP_API_URL}/user/getProfile`,
        {},
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response", response);
    } catch (error) {
      console.error(error);
    }
  }, [isFetched]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return (
    <>
      <Connexion />
    </>
  );
}

export default App;

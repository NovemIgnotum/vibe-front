import React from "react";
import axios from "axios";
import "./style/SearchBar.css";
import { useState, useEffect } from "react";
import { useSearchContext } from "../context/SearchContext";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [haveResult, setHaveResult] = useState(false);
  const [result, setResult] = useState<Object>([]);

  const searchRequest = async (query: string) => {
    try {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/search/${query}`)
        .then((res) => {
          console.log("Search", res.data);
          setHaveResult(true);
          setResult(res.data);
          console.log("Result", res.data.length);
          res.data.forEach((element: any) => {
            console.log(element);
          });
        })
        .catch(() => {
          setHaveResult(false);
          console.error("Aucune donnée trouvée");
        });
    } catch (e) {
      console.error("Error while searching", e);
    }
  };

  useEffect(() => {
    searchRequest(search);


  }, [search]);

  return (
    <>
      <div className="searchBar">
        <input
          className="searchInput"
          type="text"
          placeholder="Recherchez une musique, un artiste ou un utilisateur"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="resultsContainer">
        {haveResult && (
          <div className="result">
            <h2>Résultat de la recherche</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;

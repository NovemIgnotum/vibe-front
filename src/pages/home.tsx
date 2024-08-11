import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/home.css";

const Home = () => {
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    myplaylist();
    getUserInfo();
  }, []);

  const myplaylist = async () => {
    try {
      const userId = localStorage.getItem("id");
      await axios
        .get(`${process.env.REACT_APP_API_URL}/playlist/readAll/${userId}`)
        .then((res) => {
          console.log("Playlist", res.data.playlists);
          setPlaylists(res.data.playlists);
        })
        .catch((e) => {
          console.error("Error while getting playlist", e);
        });
    } catch (e) {
      console.error("Error while getting playlist", e);
    }
  };

  const getUserInfo = async () => {
    try {
      const userId = localStorage.getItem("id");
      await axios
        .get(`${process.env.REACT_APP_API_URL}/user/${userId}`)
        .then((res) => {
          console.log("User", res.data.message.profilePicture);
          localStorage.setItem("pseudo", res.data.message.pseudo);
          localStorage.setItem(
            "profilPicture",
            res.data.message.profilePicture
          );
        })
        .catch((e) => {
          console.error("Error while getting user", e);
        });
    } catch (e) {
      console.error("Error while getting user", e);
    }
  };

  return (
    <div>
      <div
        style={{
          color: "white",
          fontSize: 30,
          textAlign: "left",
          marginLeft: 20,
          marginTop: 20,
          alignContent: "left",
        }}
      >
        Mes playlists
      </div>
      <hr
        style={{
          color: "white",
          backgroundColor: "white",
          height: 1,
          width: "90%",
          alignSelf: "left",
          marginLeft: 20,
        }}
      />
      <div className="playlist-container">
        {playlists.map((playlist, index) => (
          <div key={index} className="playlist-display">
            {Object(playlist).name}
            <img
              src={Object(playlist).cover}
              alt="playlist"
              className="playlist-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "../style/home.css";
import { useUser } from "../context/UserContext";

const Home = () => {
  const [playlists, setPlaylists] = useState([]);
  const [band, setBand] = useState([]);
  const [genre, setGenre] = useState([]);
  const {
    setFirstName,
    setBackgroundPicture,
    setEmail,
    setName,
    setPlaylists: setUserPlaylist,
    setProfilePicture,
    setPseudo,
    setFollowers,
    setFollowing,
    setLikedSongs,
  } = useUser();

  const myplaylist = useCallback(async () => {
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
  }, []);

  const getRandomArtist = useCallback(async () => {
    try {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/band/GetRandomBand`)
        .then((res) => {
          console.log("Artist", res.data.bands);
          setBand(res.data.bands);
        })
        .catch((e) => {
          console.error("Error while getting artist", e);
        });
    } catch (e) {
      console.error("Error while getting artist", e);
    }
  }, []);

  const getRandomGenre = useCallback(async () => {
    try {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/genre/randomGenre`)
        .then((res) => {
          console.log("Genre", res.data.genre);
          setGenre(res.data.genre);
        })
        .catch((e) => {
          console.error("Error while getting genre", e);
        });
    } catch (e) {
      console.error("Error while getting genre", e);
    }
  }, []);

  const getUserInfo = useCallback(async () => {
    try {
      const userId = localStorage.getItem("id");
      await axios
        .get(`${process.env.REACT_APP_API_URL}/user/${userId}`)
        .then((res) => {
          console.log("User", res.data.message.playlist);
          setName(res.data.message.account.name);
          setFirstName(res.data.message.account.firstname);
          setEmail(res.data.message.email);
          setProfilePicture(res.data.message.profilePicture);
          setPseudo(res.data.message.pseudo);
          setBackgroundPicture(res.data.message.backgroundPicture);
          setUserPlaylist(res.data.message.playlist);
          setFollowers(res.data.message.followers);
          setFollowing(res.data.message.following);
          setLikedSongs(res.data.message.likedTracks);
        })
        .catch((e) => {
          console.error("Error while getting user", e);
        });
    } catch (e) {
      console.error("Error while getting user", e);
    }
  }, [
    setName,
    setFirstName,
    setEmail,
    setProfilePicture,
    setPseudo,
    setBackgroundPicture,
    setUserPlaylist,
    setFollowers,
    setFollowing,
    setLikedSongs,
  ]);

  useEffect(() => {
    myplaylist();
    getUserInfo();
    getRandomArtist();
    getRandomGenre();
  }, [myplaylist, getUserInfo, getRandomArtist, getRandomGenre]);

  return (
    <div className="body">
      <div
        style={{
          color: "white",
          fontSize: 30,
          textAlign: "left",
          marginLeft: 20,
          marginTop: 125,
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
          width: "95%",
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
        Des vibes qui pourrais vous plaire 👀
      </div>
      <hr
        style={{
          color: "white",
          backgroundColor: "white",
          height: 1,
          width: "95%",
          alignSelf: "left",
          marginLeft: 20,
        }}
      />
      <div className="playlist-container">
        {genre.map((playlist, index) => (
          <div key={index} className="playlist-display">
            {Object(playlist).name}
            <img
              src={Object(playlist).picture}
              alt="playlist"
              className="playlist-image"
            />
          </div>
        ))}
      </div>
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
        Des artistes que vous pourriez aimer 💖
      </div>
      <hr
        style={{
          color: "white",
          backgroundColor: "white",
          height: 1,
          width: "95%",
          alignSelf: "left",
          marginLeft: 20,
        }}
      />
      <div
        className="playlist-container"
        style={{
          marginBottom: 50,
        }}
      >
        {band.map((playlist, index) => (
          <div key={index} className="playlist-display">
            {Object(playlist).name}
            <img
              src={Object(playlist).profilePic}
              alt="playlist"
              className="playlist-image"
              style={{
                borderRadius: "50%",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

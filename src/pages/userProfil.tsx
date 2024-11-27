import { useUser } from "../context/UserContext";
import { useState, useEffect } from "react";
import "../style/userProfil.css";
import PlayList from "../components/PlayList";
import Header from "../components/Header";

const Profil = () => {
  const {
    pseudo,
    profilePicture,
    backgroundPicture,
    followers,
    following,
    likedSongs,
    playlists,
  } = useUser();

  console.log("likedSongs", likedSongs);
  const [numberOfFollower, setNumberOfFollower] = useState(0);
  const [numberOfFollowing, setNumberOfFollowing] = useState(0);
  const [displayLike, setDisplayLike] = useState(false);
  const [displayPlaylist, setDisplayPlaylist] = useState(true);

  useEffect(() => {
    setNumberOfFollower(followers.length);
    setNumberOfFollowing(following.length);
  }, [followers, following]);

  const PlaylistDisplay = () => {
    return (
      <>
        {playlists.map((playlist) => (
          <div>
            <PlayList playlistId={playlist} />
          </div>
        ))}
      </>
    );
  };

  const LikeDisplay = () => {
    return (
      <>
        <div></div>
      </>
    );
  };

  return (
    <>
      <Header />
      <div className="userPage">
        <div className="banner-container">
          <img src={backgroundPicture} alt="background" className="banner" />

          <div className="profile-container">
            <img src={profilePicture} alt="profile" />

            <div
              style={{
                marginLeft: "20px",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h1 style={{ fontSize: "30px", marginBottom: "10px" }}>
                {pseudo}
              </h1>
              <div style={{ fontSize: "18px" }}>
                <div>{numberOfFollower} followers</div>
                <div>{numberOfFollowing} following</div>
              </div>
            </div>
          </div>
        </div>

        <div className="profileButton-container">
          <button
            className="profileButton"
            style={{
              borderRadius: "50px 0px 0px 50px",
              backgroundColor: displayPlaylist ? "#41D360" : "",
              color: displayPlaylist ? "white" : "black",
            }}
          >
            PLAYLIST
          </button>
          <button
            className="profileButton"
            style={{
              borderRadius: "0px 50px 50px 0px",
            }}
          >
            LIKE
          </button>
        </div>
        {displayPlaylist ? (
          PlaylistDisplay()
        ) : displayLike ? (
          LikeDisplay()
        ) : (
          <> </>
        )}
      </div>
    </>
  );
};

export default Profil;

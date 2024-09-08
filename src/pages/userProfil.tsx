import { useUser } from "../context/UserContext";
import { useState, useEffect } from "react";

const Profil = () => {
  const { pseudo, profilePicture, backgroundPicture, followers, following,likedSongs } = useUser();
const [numberOfFollower, setNumberOfFollower] = useState(0);
const [numberOfFollowing, setNumberOfFollowing] = useState(0);


  useEffect(() => {
    setNumberOfFollower(followers.length);
    setNumberOfFollowing(following.length);
  }, [followers, following]);
  
  return (
    <div style={{ width: "100%", marginTop: "90px" }}>
      <div style={{ position: "relative", height: "300px" }}>
        {/* Background Picture */}
        <img
          src={backgroundPicture}
          alt="background"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
  
        {/* Profile Picture and Info on top of the background */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "20px",
            display: "flex",
            alignItems: "center",
            transform: "translateY(-50%)",
          }}
        >
          {/* Profile Picture */}
          <img
            src={profilePicture}
            alt="profile"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              border: "4px solid white",
              objectFit: "cover",
            }}
          />
  
          {/* User Information */}
          <div
            style={{
              marginLeft: "20px",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1 style={{ fontSize: "30px", marginBottom: "10px" }}>{pseudo}</h1>
            <div style={{ fontSize: "18px" }}>
              <div>{numberOfFollower} followers</div>
              <div>{numberOfFollowing} following</div>
            </div>
          </div>
        </div>
      </div>
  
      {/* User Details */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {/* Add any additional user details here */}
      </div>
    </div>
  );
  
};

export default Profil;

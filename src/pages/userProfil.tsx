import { useUser } from "../context/UserContext";

const Profil = () => {
  const { name, firstName, email, pseudo, profilePicture, backgroundPicture } = useUser();
  
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
        
        {/* Profile Picture and Info */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
          <h1
            style={{
              color: "white",
              fontSize: "30px",
              marginTop: "20px",
            }}
          >
            {pseudo}
          </h1>
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
      </div>
    </div>
  );
};

export default Profil;

import { useState, useEffect } from "react";
import "./style/Header.css";
import { useAuth } from "../context/AuthContext";
import logo from "../image/logo.png";
import SearchBar from "./SearchBar";
import defaultPP from "../image/avatar190.png";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { profilePicture, pseudo } = useUser();
  const [havePP, setHavePP] = useState(false);
  const [option, setOption] = useState(false);
  const [modal, setModal] = useState(false);
  const { toggleSignup } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (profilePicture === "") {
      setHavePP(false);
    } else {
      setHavePP(true);
    }
  }, [profilePicture]);

  const handleLogout = () => {
    localStorage.clear();
    toggleSignup();
  };

  const showOption = () => {
    return (
      <>
        {modal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 2000,
            }}
          >
            <div className="modal">
              <h2>Êtes-vous sûr de vouloir vous déconnecter ?</h2>
              <div>
                <button
                  onClick={() => setModal(!modal)}
                  className="logout"
                  style={{
                    width: "50px",
                  }}
                >
                  Non
                </button>
                <button
                  onClick={handleLogout}
                  className="logout"
                  style={{
                    width: "50px",
                    backgroundColor: "green",
                  }}
                >
                  Oui
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="options">
          <h2
            className="username"
            onClick={() => {
              setOption(false);
              navigate("/profil");
            }}
          >
            {pseudo}
          </h2>
          <hr
            style={{
              color: "white",
              backgroundColor: "white",
              height: 1,
              width: "90%",
              alignSelf: "left",
              marginLeft: 20,
              marginBottom: "10px",
            }}
          />
          <h2
            style={{
              color: "white",
              fontSize: 20,
              textAlign: "left",
              paddingLeft: "20px",
              alignContent: "center",
              margin: "0px",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          >
            Confidentialité & paramètre
          </h2>
          <button className="logout" onClick={() => setModal(true)}>
            Se déconnecter
          </button>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="header">
        <img
          src={logo}
          alt="logo"
          className="logo"
          onClick={() => {
            navigate("/home");
          }}
        />
        <SearchBar />
        <div
          className="user-image"
          style={{
            cursor: "pointer",
          }}
        >
          <img
            src={havePP ? profilePicture : defaultPP}
            alt="user"
            style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
            }}
            onClick={() => setOption(!option)}
          />
          {option && showOption()}
        </div>
      </div>
    </div>
  );
};

export default Header;

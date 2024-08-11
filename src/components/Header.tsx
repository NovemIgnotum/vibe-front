import { useState } from "react";
import "./style/Header.css";
import { useAuth } from "../context/AuthContext";
import logo from "../image/logo.png";
import SearchBar from "./SearchBar";

const Header = () => {
  const [option, setOption] = useState(false);
  const [modal, setModal] = useState(false);
  const { toggleSignup } = useAuth();

  const handleLogout = () => {
    localStorage.clear();
    toggleSignup();
  };

  const showOption = () => {
    const userName = localStorage.getItem("pseudo");
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
              <h2>Vous voulez vous déconnecter</h2>
              <div>
                <button
                  onClick={() => setModal(!modal)}
                  className="logout"
                  style={{
                    width: "50px",
                  }}
                >
                  non
                </button>
                <button
                  onClick={handleLogout}
                  className="logout"
                  style={{
                    width: "50px",
                    backgroundColor: "green",
                  }}
                >
                  oui
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="options">
          <h2
            style={{
              color: "white",
              fontSize: 25,
              textAlign: "center",
              alignContent: "center",
              margin: "0px",
              marginBottom: "10px",
            }}
          >
            {userName}
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
        <img src={logo} alt="logo" className="logo" />
        <SearchBar />
        <div
          className="user-image"
          style={{
            cursor: "pointer",
          }}
        >
          <img
            src={localStorage.getItem("profilPicture") ?? ""}
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

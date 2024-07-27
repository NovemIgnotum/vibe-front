import React from "react";
import "./style/Header.css";
import logo from "../image/logo.png";
import { FaCircleUser } from "react-icons/fa6";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div>
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
        <SearchBar />
        <div className="user-image">
          <FaCircleUser size={40} />
        </div>
      </div>
    </div>
  );
};

export default Header;

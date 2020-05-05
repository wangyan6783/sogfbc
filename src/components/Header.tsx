import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="header-logo" src={Logo} alt="church logo" />
      </Link>
    </header>
  );
};

export default Header;

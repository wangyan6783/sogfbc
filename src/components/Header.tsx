import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/" className="header-link">
        <img className="header-logo" src={Logo} />
        <div className="header-text">
          <h1>恩霖信心聖經教會</h1>
          <h2>Shower of Grace Faith Bible Church</h2>
        </div>
      </Link>
    </header>
  );
};

export default Header;

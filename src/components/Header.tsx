import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1>恩霖信心聖經教會</h1>
        <h2>Shower of Grace Faith Bible Church</h2>
      </Link>
    </header>
  );
};

export default Header;

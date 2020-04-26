import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <h2>關於我們</h2>
      <Link to="/our-belief">
        <h3>我們的信仰</h3>
      </Link>
      <Link to="/church-history">
        <h3>教會簡史</h3>
      </Link>
      <Link to="/hours">
        <h3>聚會時間</h3>
      </Link>
    </aside>
  );
};

export default Sidebar;

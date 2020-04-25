import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul className="navbar">
        <li className="navbar-menu">
          <h2>關於我們</h2>
          <ul className="navbar-submenu">
            <li>
              <h3>信仰與使命</h3>
            </li>
            <li>
              <h3>教會簡史</h3>
            </li>
            <li>
              <h3>聚會時間</h3>
            </li>
          </ul>
        </li>
        <li className="navbar-menu">
          <h2>教會活動</h2>
          <ul className="navbar-submenu">
            <li>
              <h3>主日週報</h3>
            </li>
            <li>
              <h3>活動照片</h3>
            </li>
          </ul>
        </li>
        <li className="navbar-menu">
          <h2>教會事工</h2>
          <ul className="navbar-submenu">
            <li>
              <h3>兒童事工 Children Ministry</h3>
            </li>
            <li>
              <h3>英文事工 English Ministry</h3>
            </li>
            <li>
              <h3>小組聚會</h3>
            </li>
            <li>
              <h3>成人主日學</h3>
            </li>
            <li>
              <h3>門徒訓練</h3>
            </li>
          </ul>
        </li>
        <li className="navbar-menu">
          <h2>社區中心</h2>
          <ul className="navbar-submenu">
            <li>
              <h3>舞蹈學校</h3>
            </li>
          </ul>
        </li>
        <li className="navbar-menu">
          <h2>支持我們</h2>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

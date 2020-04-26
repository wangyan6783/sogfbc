import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [showMinistry, setShowMinistry] = useState(false);
  const [showCommunity, setShowCommunity] = useState(false);

  return (
    <nav>
      <ul className="navbar">
        <li
          className="navbar-menu"
          onMouseEnter={() => setShowAboutUs(true)}
          onMouseLeave={() => setShowAboutUs(false)}
        >
          <h2>關於我們</h2>
          <ul className={`navbar-submenu ${showAboutUs && "show"}`}>
            <li>
              <Link to="/our-belief" onClick={() => setShowAboutUs(false)}>
                <h3>我們的信仰</h3>
              </Link>
            </li>
            <li>
              <Link to="/church-history" onClick={() => setShowAboutUs(false)}>
                <h3>教會簡史</h3>
              </Link>
            </li>
            <li>
              <Link to="/hours" onClick={() => setShowAboutUs(false)}>
                <h3>聚會時間</h3>
              </Link>
            </li>
          </ul>
        </li>
        <li
          className="navbar-menu"
          onMouseEnter={() => setShowEvents(true)}
          onMouseLeave={() => setShowEvents(false)}
        >
          <h2>教會活動</h2>
          <ul className={`navbar-submenu ${showEvents && "show"}`}>
            <li>
              <Link to="/bulletin" onClick={() => setShowEvents(false)}>
                <h3>主日週報</h3>
              </Link>
            </li>
            <li>
              <Link to="/service-videos" onClick={() => setShowEvents(false)}>
                <h3>主日視頻</h3>
              </Link>
            </li>
            <li>
              <Link to="/photo-gallery" onClick={() => setShowEvents(false)}>
                <h3>活動照片</h3>
              </Link>
            </li>
          </ul>
        </li>
        <li
          className="navbar-menu"
          onMouseEnter={() => setShowMinistry(true)}
          onMouseLeave={() => setShowMinistry(false)}
        >
          <h2>教會事工</h2>
          <ul className={`navbar-submenu ${showMinistry && "show"}`}>
            <li>
              <Link
                to="/children-ministry"
                onClick={() => setShowMinistry(false)}
              >
                <h3>兒童事工 Children Ministry</h3>
              </Link>
            </li>
            <li>
              <Link
                to="/english-ministry"
                onClick={() => setShowMinistry(false)}
              >
                <h3>英文事工 English Ministry</h3>
              </Link>
            </li>
            <li>
              <Link to="/life-groups" onClick={() => setShowMinistry(false)}>
                <h3>小組聚會</h3>
              </Link>
            </li>
            <li>
              <Link to="/sunday-school" onClick={() => setShowMinistry(false)}>
                <h3>成人主日學</h3>
              </Link>
            </li>
            <li>
              <Link
                to="/disciple-training"
                onClick={() => setShowMinistry(false)}
              >
                <h3>門徒訓練</h3>
              </Link>
            </li>
          </ul>
        </li>
        <li
          className="navbar-menu"
          onMouseEnter={() => setShowCommunity(true)}
          onMouseLeave={() => setShowCommunity(false)}
        >
          <h2>社區中心</h2>
          <ul className={`navbar-submenu ${showCommunity && "show"}`}>
            <li>
              <Link to="/dance-school" onClick={() => setShowCommunity(false)}>
                <h3>舞蹈學校</h3>
              </Link>
            </li>
          </ul>
        </li>
        <li className="navbar-menu">
          <Link to="/support-us">
            <h2>支持我們</h2>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

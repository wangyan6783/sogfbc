import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  navbarData: navbarData;
}

const Navbar: React.FC<Props> = ({ navbarData }) => {
  const [state, setState] = useState<navbarState>({
    showAboutUs: false,
    showEvents: false,
    showMinistry: false,
    showCommunity: false,
  });

  function getAttr(mainMenu: string) {
    if (mainMenu === "關於我們") return "showAboutUs";
    if (mainMenu === "教會活動") return "showEvents";
    if (mainMenu === "教會事工") return "showMinistry";
    if (mainMenu === "社區中心") return "showCommunity";
    return "";
  }

  function handleShow(attr: string, status: boolean) {
    setState({
      ...state,
      [attr]: status,
    });
  }

  return (
    <nav>
      <ul className="navbar">
        {navbarData.map((item) => {
          const attr = getAttr(item.mainMenu);
          return (
            <li
              className="navbar-menu"
              key={item.mainMenu}
              onMouseOver={() => handleShow(attr, true)}
              onMouseLeave={() => handleShow(attr, false)}
            >
              {item.mainMenu === "支持我們" ? (
                <Link to="/support-us">
                  <h2>{item.mainMenu}</h2>
                </Link>
              ) : (
                <h2>{item.mainMenu}</h2>
              )}
              <ul className={`navbar-submenu ${attr && state[attr] && "show"}`}>
                {item.subMenu.map((subitem) => {
                  return (
                    <li key={subitem.title}>
                      <Link
                        to={subitem.link}
                        onClick={() => handleShow(attr, false)}
                      >
                        <h3>{subitem.title}</h3>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

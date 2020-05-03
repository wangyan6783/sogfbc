import React from "react";
import { Link } from "react-router-dom";

interface Props {
  sidebarData: sidebarData;
}

const Sidebar: React.FC<Props> = ({ sidebarData }) => {
  return (
    <aside className="sidebar">
      <h2>{sidebarData.mainMenu}</h2>
      <ul className="sidebar-content">
        {sidebarData.subMenu.map((subMenu) => (
          <li>
            <Link to={subMenu.link} key={subMenu.title}>
              <h3>{subMenu.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

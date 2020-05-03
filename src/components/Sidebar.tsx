import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  sidebarData: sidebarData;
  currentTab?: string;
}

const Sidebar: React.FC<Props> = ({ sidebarData, currentTab }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside className="sidebar">
      <h2>{sidebarData.mainMenu}</h2>
      <ul className="sidebar-content">
        {sidebarData.subMenu.map(({ title, link }) => (
          <li
            key={title}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link to={link}>
              <h3
                className={
                  !isHovered && title === currentTab ? "show-color" : ""
                }
              >
                {title}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

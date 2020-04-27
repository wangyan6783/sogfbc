import React from "react";
import { Link } from "react-router-dom";

interface Props {
  sidebarData: sidebarData;
}

const Sidebar: React.FC<Props> = ({ sidebarData }) => {
  console.log(sidebarData);
  return (
    <aside className="sidebar">
      <h2>{sidebarData.mainMenu}</h2>
      {sidebarData.subMenu.map((subMenu) => (
        <Link to={subMenu.link} key={subMenu.title}>
          <h3>{subMenu.title}</h3>
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;

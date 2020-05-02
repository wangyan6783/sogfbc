import React from "react";
import Sidebar from "../components/Sidebar";
import bulletinData from "../data/bulletin.data.json";

interface Props {
  sidebarData: sidebarData;
}

const BulletinPage: React.FC<Props> = ({ sidebarData }) => {
  return (
    <>
      <Sidebar sidebarData={sidebarData} />
      <main className="main-content">
        <h1>主日週報</h1>
        {bulletinData.data.map((monthItem) => {
          return (
            <ul className="date-list">
              {monthItem.map((dateItem) => {
                return (
                  <li>
                    <a
                      href={dateItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3>{dateItem.date}</h3>
                    </a>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </main>
    </>
  );
};

export default BulletinPage;

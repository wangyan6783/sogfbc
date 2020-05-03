import React from "react";
import Sidebar from "../components/Sidebar";
import serviceVideosData from "../data/service-videos.data.json";

interface Props {
  sidebarData: sidebarData;
}

const ServiceVideosPage: React.FC<Props> = ({ sidebarData }) => {
  return (
    <>
      <Sidebar sidebarData={sidebarData} currentTab="主日視頻" />
      <main className="main-content">
        <h1>主日視頻</h1>
        {serviceVideosData.data.map((monthItem) => {
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

export default ServiceVideosPage;

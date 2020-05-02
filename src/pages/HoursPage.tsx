import React from "react";
import Sidebar from "../components/Sidebar";
import locationImage from "../assets/location.png";

interface Props {
  sidebarData: sidebarData;
}

const HoursPage: React.FC<Props> = ({ sidebarData }) => {
  return (
    <>
      <Sidebar sidebarData={sidebarData} />
      <main className="main-content">
        <h1>聚會時間</h1>
        <h2>國語崇拜</h2>
        <h3>主日上午 9:30</h3>
        <h3>主日上午 11:00</h3>
        <h2>青少年英語崇拜</h2>
        <h3>主日上午 11:00</h3>
        <h2>兒童主日學</h2>
        <h3>主日上午 9:30</h3>
        <h3>主日上午 11:00</h3>
        <h2>公車 Bus: Q65, Q27</h2>
        <img
          className="location-image"
          src={locationImage}
          alt="church location"
        />
      </main>
    </>
  );
};

export default HoursPage;

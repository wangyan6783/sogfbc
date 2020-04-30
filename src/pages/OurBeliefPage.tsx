import React from "react";
import Sidebar from "../components/Sidebar";
import ourBliefData from "../data/our-belief.data.json";

interface Props {
  sidebarData: sidebarData;
}

const OurBeliefPage: React.FC<Props> = ({ sidebarData }) => {
  return (
    <>
      <Sidebar sidebarData={sidebarData} />
      <main className="main-content">
        <h1>我們的信仰</h1>
        <ul>
          {ourBliefData.data.map((item) => {
            return (
              <li>
                <h3>{item}</h3>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default OurBeliefPage;

import React from "react";
import Sidebar from "../components/Sidebar";
interface Props {
  sidebarData: sidebarData;
}

const SundaySchoolPage: React.FC<Props> = ({ sidebarData }) => {
  return (
    <>
      <Sidebar sidebarData={sidebarData} />
      <main className="main-content">
        <h1>成人主日學</h1>
      </main>
    </>
  );
};

export default SundaySchoolPage;

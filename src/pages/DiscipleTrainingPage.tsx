import React from "react";
import Sidebar from "../components/Sidebar";

interface Props {
  sidebarData: sidebarData;
}

const DiscipleTrainingPage: React.FC<Props> = ({ sidebarData }) => {
  return (
    <>
      <Sidebar sidebarData={sidebarData} />
      <main className="main-content">
        <h1>門徒訓練</h1>
      </main>
    </>
  );
};

export default DiscipleTrainingPage;

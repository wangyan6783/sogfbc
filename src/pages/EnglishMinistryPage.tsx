import React from "react";
import Sidebar from "../components/Sidebar";

interface Props {
  sidebarData: sidebarData;
}
const EnglishMinistryPage: React.FC<Props> = ({ sidebarData }) => {
  return (
    <>
      <Sidebar sidebarData={sidebarData} />
      <main className="main-content">
        <h1>英文事工</h1>
      </main>
    </>
  );
};

export default EnglishMinistryPage;

import React from "react";
import Sidebar from "../components/Sidebar";

interface Props {
  sidebarData: sidebarData;
}

const PhotoGalleryPage: React.FC<Props> = ({ sidebarData }) => {
  return (
    <>
      <Sidebar sidebarData={sidebarData} currentTab="活動照片" />
      <main className="main-content">
        <h1>活動照片</h1>
        <h3>年終禱告會</h3>
        <h3>平安夜福音晚會</h3>
        <h3>燒烤BBQ</h3>
        <h3>六週年慶典 </h3>
      </main>
    </>
  );
};

export default PhotoGalleryPage;

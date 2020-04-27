import React from "react";
import Sidebar from "../components/Sidebar";

interface Props {
  sidebarData: sidebarData;
}

const PhotoGalleryPage: React.FC<Props> = ({ sidebarData }) => {
  return (
    <>
      <Sidebar sidebarData={sidebarData} />
      <main className="main-content">
        <h1>活動照片</h1>
      </main>
    </>
  );
};

export default PhotoGalleryPage;

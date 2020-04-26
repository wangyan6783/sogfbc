import React from "react";
import MainModule from "../components/homepage/MainModule";

const HomePage: React.FC = () => {
  return (
    <main>
      <img
        className="home-image"
        src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1522517022/180331-_Parini_Taking_Back_Christianity-hero__tejwex"
        alt="经历神的大能"
      />
      <MainModule />
    </main>
  );
};

export default HomePage;

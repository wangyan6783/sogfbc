import React from "react";
import MainModule from "../components/homepage/MainModule";

const HomePage: React.FC = () => {
  return (
    <main>
      <img
        className="home-image"
        src="https://www.gotquestions.org/img/OG/born-again.jpg"
        alt="经历神的大能"
      />
      <MainModule />
    </main>
  );
};

export default HomePage;

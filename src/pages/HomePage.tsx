import React from "react";
import MainModule from "../components/homepage/MainModule";
import Hero from "../assets/hero.png";

const HomePage: React.FC = () => {
  return (
    <main>
      <img className="home-image" src={Hero} alt="经历神的大能" />
      <MainModule />
    </main>
  );
};

export default HomePage;

import React from "react";
import MainModCol1 from "./MainModCol1";
import MainModCol2 from "./MainModCol2";
import MainModCol3 from "./MainModCol3";

const MainModule: React.FC = () => {
  return (
    <section className="main-mod">
      <MainModCol1 />
      <MainModCol2 />
      <MainModCol3 />
    </section>
  );
};

export default MainModule;

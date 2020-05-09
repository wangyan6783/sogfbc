import React from "react";
import Button1 from "../Button1";

const MainModCol1: React.FC = () => {
  return (
    <div className="main-mod-col">
      <h2 className="main-mod-col-head">影音視頻</h2>
      <div className="main-mod-col-content main-mod-col-content-1">
        <h3>主日崇拜線上看</h3>
        <Button1 />
      </div>
    </div>
  );
};

export default MainModCol1;

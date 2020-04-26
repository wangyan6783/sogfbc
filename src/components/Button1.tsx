import React from "react";
import { Link } from "react-router-dom";

const Button1: React.FC = () => {
  return (
    <Link to="service-videos">
      <button className="button1" type="button">
        點擊這裡
      </button>
    </Link>
  );
};

export default Button1;

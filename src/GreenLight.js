import React from "react";

const GreenLight = ({ isActive }) => {
  return <div className={`light green ${isActive ? "active" : ""}`}></div>;
};

export default GreenLight;

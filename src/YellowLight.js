import React from "react";

const YellowLight = ({ isActive }) => {
  return <div className={`light yellow ${isActive ? "active" : ""}`}></div>;
};

export default YellowLight;

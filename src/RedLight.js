import React from "react";

const RedLight = ({ isActive }) => {
  return <div className={`light red ${isActive ? "active" : ""}`}></div>;
};

export default RedLight;

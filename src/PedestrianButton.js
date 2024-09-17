import React, { useContext } from "react";
import { TrafficLightContext } from "./TrafficLightContext";

const PedestrianButton = () => {
  const { dispatch } = useContext(TrafficLightContext);

  const handleClick = () => {
    dispatch({ type: "REQUEST_CROSSING" });
  };

  return (
    <button className="pedestrian-button" onClick={handleClick}>
      Pedestrian Crossing
    </button>
  );
};

export default PedestrianButton;

import React, { useContext } from "react";
import { TrafficLightContext } from "./TrafficLightContext";

const EmergencyButton = () => {
  const { dispatch } = useContext(TrafficLightContext);

  const handleEmergency = () => {
    dispatch({ type: "EMERGENCY_OVERRIDE" });
  };

  return (
    <button className="emergency-button" onClick={handleEmergency}>
      Emergency Override
    </button>
  );
};

export default EmergencyButton;

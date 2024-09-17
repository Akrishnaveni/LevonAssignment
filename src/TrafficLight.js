import React, { useContext } from "react";
import { TrafficLightContext } from "./TrafficLightContext";
import GreenLight from "./GreenLight";
import YellowLight from "./YellowLight";
import RedLight from "./RedLight";
import PedestrianButton from "./PedestrianButton";
import EmergencyButton from "./EmergencyButton";
import "./styles.css";

const TrafficLight = () => {
  const { state } = useContext(TrafficLightContext);

  return (
    <div className="traffic-light-container">
      {/* Traffic Light Column */}
      <div className="traffic-light">
        <GreenLight isActive={state.currentLight === "green"} />
        <YellowLight isActive={state.currentLight === "yellow"} />
        <RedLight isActive={state.currentLight === "red"} />
      </div>

      {/* Button Section */}
      <div className="controls">
        <PedestrianButton />
        <EmergencyButton />
      </div>

      {/* Timer Display */}
      <div className="timer">Time left: {state.timer}s</div>
    </div>
  );
};

export default TrafficLight;

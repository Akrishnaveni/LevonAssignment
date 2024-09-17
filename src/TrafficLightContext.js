import React, { createContext, useReducer, useEffect } from "react";

// Create the context
const TrafficLightContext = createContext();

// Initial state
const initialState = {
  currentLight: "green",
  pedestrianRequested: false,
  emergencyOverride: false,
  timer: 10, // for green light countdown
};

// Actions
const CHANGE_LIGHT = "CHANGE_LIGHT";
const REQUEST_CROSSING = "REQUEST_CROSSING";
const RESET_TIMER = "RESET_TIMER";
const EMERGENCY_OVERRIDE = "EMERGENCY_OVERRIDE";

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_LIGHT:
      if (state.emergencyOverride) return state; // Skip changes if emergencyOverride is active
      if (state.currentLight === "green")
        return { ...state, currentLight: "yellow", timer: 3 };
      if (state.currentLight === "yellow")
        return { ...state, currentLight: "red", timer: 7 };
      if (state.currentLight === "red") {
        if (state.pedestrianRequested) {
          return { ...state, pedestrianRequested: false, timer: 5 };
        }
        return { ...state, currentLight: "green", timer: 10 };
      }
      return state;
    case REQUEST_CROSSING:
      return { ...state, pedestrianRequested: true };
    case RESET_TIMER:
      return { ...state, timer: action.payload };
    case EMERGENCY_OVERRIDE:
      return {
        ...state,
        currentLight: "red",
        emergencyOverride: true,
        timer: 7,
      };
    case "END_EMERGENCY":
      return {
        ...state,
        emergencyOverride: false,
        currentLight: "green",
        timer: 10,
      };
    default:
      return state;
  }
};

// Provider component
const TrafficLightProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Timer effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (state.timer > 0) {
        dispatch({ type: RESET_TIMER, payload: state.timer - 1 });
      } else if (state.emergencyOverride) {
        dispatch({ type: "END_EMERGENCY" }); // End emergency after 7 seconds
      } else {
        dispatch({ type: CHANGE_LIGHT });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [state.timer, state.emergencyOverride]);

  return (
    <TrafficLightContext.Provider value={{ state, dispatch }}>
      {children}
    </TrafficLightContext.Provider>
  );
};

export { TrafficLightContext, TrafficLightProvider };

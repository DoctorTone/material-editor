import React from "react";
import { OrbitControls, Box, Stage } from "@react-three/drei";
import { Lucy } from "../models/Lucy.jsx";

const ThreeApp = () => {
  return (
    <>
      <Stage
        adjustCamera={2}
        intensity={0.5}
        shadows="contact"
        environment="city"
      >
        <Lucy />
      </Stage>
      <OrbitControls />
    </>
  );
};

export default ThreeApp;

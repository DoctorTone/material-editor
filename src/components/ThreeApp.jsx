import React from "react";
import { OrbitControls, Box, Stage } from "@react-three/drei";
import { SCENE } from "../state/Config.js";

const ThreeApp = () => {
  return (
    <>
      <Stage
        adjustCamera={2}
        intensity={0.5}
        shadows="contact"
        environment="city"
      >
        <Box args={[3, 3, 3]} material-color="red" />
      </Stage>
      <OrbitControls />
    </>
  );
};

export default ThreeApp;

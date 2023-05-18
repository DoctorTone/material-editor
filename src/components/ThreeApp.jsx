import React from "react";
import { Box } from "@react-three/drei";
import { SCENE } from "../state/Config.js";

const ThreeApp = () => {
  <>
    <ambientLight intensity={SCENE.ambientIntensity} />
    <pointLight position={SCENE.lightPosition} />
    <Box />
  </>;
};

export default ThreeApp;

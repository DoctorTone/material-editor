import React from "react";
import { Box } from "@react-three/drei";
import { SCENE } from "../state/Config.js";

const ThreeApp = () => {
  return (
    <>
      <ambientLight intensity={SCENE.ambientIntensity} />
      <pointLight position={SCENE.lightPosition} />
      <Box args={[12, 12, 12]} material-color="hotpink" />
    </>
  );
};

export default ThreeApp;

import React from "react";
import { OrbitControls, Box, Stage } from "@react-three/drei";
import { Lucy } from "../models/Lucy.jsx";
import { useControls } from "leva";

const ThreeApp = () => {
  const { shadows, modelColor, transparent, opacity } = useControls({
    shadows: false,
    modelColor: "#ffffff",
    transparent: false,
    opacity: {
      value: 1,
      min: 0,
      max: 1,
    },
  });
  return (
    <>
      <Stage
        adjustCamera={true}
        intensity={0.5}
        shadows={shadows && "contact"}
        environment="city">
        <Lucy color={modelColor} transparent={transparent} opacity={opacity} />
      </Stage>
      <OrbitControls />
    </>
  );
};

export default ThreeApp;

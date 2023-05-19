import React from "react";
import { OrbitControls, Box, Stage } from "@react-three/drei";
import { Lucy } from "../models/Lucy.jsx";
import { useControls } from "leva";

const ThreeApp = () => {
  const { name, aNumber } = useControls({ name: "World", aNumber: 0 });
  return (
    <>
      <Stage
        adjustCamera={true}
        intensity={0.5}
        shadows={false}
        environment="city"
      >
        <Lucy />
      </Stage>
      <OrbitControls />
    </>
  );
};

export default ThreeApp;

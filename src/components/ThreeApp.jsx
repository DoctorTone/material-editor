import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Lucy } from "../models/Lucy.jsx";
import { useControls } from "leva";

const ThreeApp = () => {
  const {
    shadows,
    modelColor,
    transparent,
    opacity,
    roughness,
    metalness,
    reflectivity,
    clearcoat,
    clearcoatRoughness,
    envMapIntensity,
  } = useControls({
    shadows: false,
    modelColor: "#ffffff",
    transparent: true,
    opacity: {
      value: 1,
      min: 0,
      max: 1,
    },
    roughness: {
      value: 0,
      min: 0,
      max: 1,
    },
    metalness: {
      value: 1,
      min: 0,
      max: 1,
    },
    reflectivity: {
      value: 0,
      min: 0,
      max: 1,
    },
    clearcoat: {
      value: 0,
      min: 0,
      max: 1,
    },
    clearcoatRoughness: {
      value: 0,
      min: 0,
      max: 1,
    },
    envMapIntensity: {
      value: 1,
      min: 0,
      max: 5,
    },
  });
  return (
    <>
      <Stage
        adjustCamera={true}
        intensity={0.5}
        shadows={shadows && "contact"}
        environment="city">
        <Lucy
          color={modelColor}
          transparent={transparent}
          opacity={opacity}
          roughness={roughness}
          metalness={metalness}
          reflectivity={reflectivity}
          clearcoat={clearcoat}
          clearcoatRoughness={clearcoatRoughness}
          envMapIntensity={envMapIntensity}
        />
      </Stage>
      <OrbitControls />
    </>
  );
};

export default ThreeApp;

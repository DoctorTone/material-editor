import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Lucy } from "../models/Lucy.jsx";
import { Leva, useControls } from "leva";
import { getDeviceStatus } from "../state/Config.js";
import { Loading } from "./Loading.jsx";

const ThreeApp = () => {
  const isMobile = getDeviceStatus();

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
      <Suspense fallback={<Loading />}>
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
      </Suspense>
      <OrbitControls />
      {/* <Leva collapsed={true} /> */}
    </>
  );
};

export default ThreeApp;

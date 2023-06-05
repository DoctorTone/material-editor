import React, { Suspense } from "react";
import { OrbitControls, Stage, Backdrop, Sky } from "@react-three/drei";
import { Lucy } from "../models/Lucy.jsx";
import { useControls } from "leva";
import { Loading } from "./Loading.jsx";

const ThreeApp = () => {
  const {
    backdrop,
    sky,
    modelColor,
    transparent,
    opacity,
    roughness,
    metalness,
    transmission,
    ior,
    thickness,
    reflectivity,
    clearcoat,
    clearcoatRoughness,
    envMapIntensity,
  } = useControls({
    backdrop: true,
    sky: true,
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
    transmission: {
      value: 0,
      min: 0,
      max: 1,
    },
    ior: {
      value: 1.5,
      min: 1,
      max: 2,
    },
    thickness: {
      value: 2.5,
      min: 0,
      max: 5,
    },
    reflectivity: {
      value: 0.5,
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
      {sky && (
        <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        />
      )}
      <Suspense fallback={<Loading />}>
        <Stage
          adjustCamera={true}
          intensity={0.5}
          shadows={false}
          environment="city">
          {backdrop && (
            <Backdrop
              floor={0.5}
              segments={20}
              position={[0, -0.75, 0]}
              scale={[2, 2, 1]}>
              <meshStandardMaterial color={0x353535} />
            </Backdrop>
          )}
          <Lucy
            color={modelColor}
            transparent={transparent}
            opacity={opacity}
            roughness={roughness}
            metalness={metalness}
            transmission={transmission}
            ior={ior}
            thickness={thickness}
            reflectivity={reflectivity}
            clearcoat={clearcoat}
            clearcoatRoughness={clearcoatRoughness}
            envMapIntensity={envMapIntensity}
          />
        </Stage>
      </Suspense>
      <OrbitControls />
    </>
  );
};

export default ThreeApp;

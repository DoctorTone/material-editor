import React from "react";
import { Canvas } from "@react-three/fiber";
import ThreeApp from "./components/ThreeApp.jsx";
import { SCENE } from "./state/Config.js";

function App() {
  return (
    <>
      <Canvas camera={{ position: SCENE.cameraPosition, fov: SCENE.fov }}>
        <ThreeApp />
      </Canvas>
    </>
  );
}

export default App;

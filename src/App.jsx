import React from "react";
import { Canvas } from "@react-three/fiber";
import ThreeApp from "./components/ThreeApp.jsx";
import { Leva } from "leva";
import { getDeviceStatus } from "./state/Config.js";
import { Perf } from "r3f-perf";

function App() {
  const isMobile = getDeviceStatus();

  return (
    <>
      <Leva collapsed={true} />
      <Canvas>
        <ThreeApp />
        <Perf
          position={isMobile ? "bottom-left" : "top-left"}
          deepAnalyze={false}
          overClock={false}
        />
      </Canvas>
    </>
  );
}

export default App;

import React from "react";
import { Canvas } from "@react-three/fiber";
import ThreeApp from "./components/ThreeApp.jsx";
import { Leva } from "leva";
import { Perf } from "r3f-perf";

function App() {
  return (
    <>
      <Leva collapsed={true} />
      <Canvas>
        <ThreeApp />
        <Perf position={"top-left"} deepAnalyze={false} overClock={false} />
      </Canvas>
    </>
  );
}

export default App;

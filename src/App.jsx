import React from "react";
import { Canvas } from "@react-three/fiber";
import ThreeApp from "./components/ThreeApp.jsx";
import { Perf } from "r3f-perf";

function App() {
  return (
    <>
      <Canvas>
        <ThreeApp />
        <Perf position={"top-left"} />
      </Canvas>
    </>
  );
}

export default App;

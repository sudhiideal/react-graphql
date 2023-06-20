import { useState } from "react";
import "./App.css";
import LeftPanel from "./components/LeftPanel/LeftPanel";

function App() {
  return (
    <>
      <div className="flex h-full w-full">
        <LeftPanel></LeftPanel>
        <div className="w-3/4"></div>
      </div>
    </>
  );
}

export default App;

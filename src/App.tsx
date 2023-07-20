import { useState } from "react";
import "./App.css";
import { ZustandPoC } from "./zustand/ZustandPoC";
import { JotaiPoC } from "./jotai/JotaiPoC";

function App() {
  const [stateManager, setStateManager] = useState<"zustand" | "jotai">();

  return (
    <>
      {stateManager === undefined ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            columnGap: 16,
          }}
        >
          <button onClick={() => setStateManager("zustand")}>Zustand</button>
          <button onClick={() => setStateManager("jotai")}>Jotai</button>
        </div>
      ) : (
        <>{stateManager === "zustand" ? <ZustandPoC /> : <JotaiPoC />}</>
      )}
    </>
  );
}

export default App;

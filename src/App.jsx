import { useState } from "react";
import "./App.css";
import ExportButton from "./components/ExportButton";
import ExportPop from "./components/ExportPopup";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <ExportButton onClick={() => setIsOpen(true)} />
      {isOpen && <ExportPop onClose={() => setIsOpen(false)} />}
    </div>
  );
}

export default App;

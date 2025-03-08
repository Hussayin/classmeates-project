import { BrowserRouter, Route, Routes } from "react-router-dom";
import Enter from "../pages/Enter";
import DinoGame from "./DinoGame";
import InstallPrompt from "./InstallModal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <InstallPrompt />
        <Routes>
          <Route path="/" element={<Enter />} />
          <Route path="/game" element={<DinoGame />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

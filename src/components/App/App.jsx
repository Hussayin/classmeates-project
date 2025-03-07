import { BrowserRouter, Route, Routes } from "react-router-dom";
import Enter from "../pages/Enter";
import DinoGame from "./DinoGame";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Enter />} />
          <Route path="/game" element={<DinoGame />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

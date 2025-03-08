import { BrowserRouter, Route, Routes } from "react-router-dom";
import Enter from "../pages/Enter";
import InstallPrompt from "./InstallModal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <InstallPrompt />
        <Routes>
          <Route path="/" element={<Enter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Enter from "../pages/Enter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Enter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

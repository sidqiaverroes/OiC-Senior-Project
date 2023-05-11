import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import HomePage from "./pages/homePage";
import SeekPage from "./pages/seekPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>

        <Routes>
          <Route path="/seek" element={<SeekPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

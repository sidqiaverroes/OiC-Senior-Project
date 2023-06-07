import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/homePage";
import SeekPage from "./pages/seekPage";
import ResultPage from "./pages/resultPage";

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

        <Routes>
          <Route path="/result/:id" element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

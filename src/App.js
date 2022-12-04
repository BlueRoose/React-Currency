import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ConvertPage from "./pages/ConvertPage/ConvertPage";
import ExchangePage from "./pages/ExchangePage/ExchangePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Navigate to="/exchangepage" />} />
        <Route path="/convertpage" exact element={<ConvertPage />} />
        <Route path="/exchangepage" exact element={<ExchangePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

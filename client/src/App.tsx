import { Mainpage } from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Navbar } from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/recruit" />
        <Route path="/portfolios" />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;

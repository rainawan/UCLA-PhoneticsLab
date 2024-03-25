import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import People from "./pages/People";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

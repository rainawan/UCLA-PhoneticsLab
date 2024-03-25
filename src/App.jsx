import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import People from "./pages/People";
import CurrentMembers from "./pages/People/CurrentMembers";
import FormerMembers from "./pages/People/FormerMembers";
import LocalColleagues from "./pages/People/LocalColleagues";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/current_members" element={<CurrentMembers />} />
        <Route path="/people/former_members" element={<FormerMembers />} />
        <Route path="/people/local_colleagues" element={<LocalColleagues />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

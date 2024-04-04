import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import People from "./pages/People";
import CurrentMembers from "./pages/People/CurrentMembers";
import FormerMembers from "./pages/People/FormerMembers";
import LocalColleagues from "./pages/People/LocalColleagues";
import LangAcquisition from "./pages/LangAcquisition";

function App() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="absolute top-0 left-0 w-full bg-blue py-20">
        <h1 className="text-white lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#FFE578]">UCLA</span> Phonetics Lab
        </h1>
      </div>
      <div className="absolute top-0 left-0 pt-40 px-20">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/langacquisition" element={<LangAcquisition />} />
            <Route
              path="/people/current_members"
              element={<CurrentMembers />}
            />
            <Route path="/people/former_members" element={<FormerMembers />} />
            <Route
              path="/people/local_colleagues"
              element={<LocalColleagues />}
            />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
      {/* <div className="mt-auto">
      <Footer className="mt-auto" />
      </div> */}
    </div>
  );
}

export default App;

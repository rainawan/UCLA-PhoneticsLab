import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CurrentMembers from "./pages/People/CurrentMembers";
import FormerMembers from "./pages/People/FormerMembers";
import LocalColleagues from "./pages/People/LocalColleagues";
import LangAcquisition from "./pages/LangAcquisition";
import Grants from "./pages/Research/Grants";
import Dissertations from "./pages/Research/Dissertations";

function App() {
  return (
    <div className="flex flex-col min-h-screen relative bg-lightgray">
      <div className="top-0 left-0 w-full bg-blue py-20 absolute">
        <h1 className="text-white lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#FFE578]">UCLA</span> Phonetics Lab
        </h1>
      </div>
      <div className="top-0 left-0 pt-40 px-0 lg:px-20 md:px-20">
        <BrowserRouter>
          <Navbar />
          <div className="shadow-lg">
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/langacquisition" element={<LangAcquisition />} />
              <Route
                path="/people/current_members"
                element={<CurrentMembers />}
              />
              <Route
                path="/people/former_members"
                element={<FormerMembers />}
              />
              <Route
                path="/people/local_colleagues"
                element={<LocalColleagues />}
              />
              <Route path="/research/grants" element={<Grants />} />
              <Route
                path="/research/dissertations"
                element={<Dissertations />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;

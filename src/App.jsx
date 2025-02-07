import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { NavBar } from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutUs from "./components/About";
import Services from "./components/Services";
import Community from "./components/Community";

const App = () => {
    return (
      <Router>
        <NavBar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </div>
      </Router>
    );
  }

export default App

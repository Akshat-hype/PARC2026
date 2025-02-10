import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home_";
import About from "./pages/About";
import Committee from "./pages/Committee";
import Registration from "./pages/Registration";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-20 text-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

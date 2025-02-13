import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home_";
import About from "./pages/About";
import Committee from "./pages/Committee";
import Registration from "./pages/Registration";
import KeynoteSpeakers from "./pages/KeynoteSpeakers";
import Tutorial from "./pages/Tutorial";
import CallForPaper from "./pages/CallForPaper";
import Submission from "./pages/Submission";
import Venue from "./pages/Venue";
import Accommodation from "./pages/Accommodation";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import Sponsors from "./pages/Sponsors";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-20 text-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/keynotespeakers" element={<KeynoteSpeakers/>} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/callforpaper" element={<CallForPaper />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/sponsors" element={<Sponsors />} />

        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;

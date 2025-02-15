import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="pt-20 text-center">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;

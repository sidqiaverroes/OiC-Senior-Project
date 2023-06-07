import React from "react";
import Navbar from "../components/Navbar";
import Seek from "../components/Seek";
import Contact from "../components/Contact";

function seekPage() {
  return (
    <div>
      <Navbar />
      <Seek />
      <Contact />
    </div>
  );
}

export default seekPage;

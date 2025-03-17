import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Information from "./components/Information";
import "./styles/global.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Information />
    </div>
  );
};

export default App;
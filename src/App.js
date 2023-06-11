import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import ContactUs from "./routes/ContactUs";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contactUs" element={<ContactUs/>} />
      </Routes>
    </>
  );
}

export default App;

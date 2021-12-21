// src/Navigation.js

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="realisations" element={<Works />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Veiculos from "../routes/Veiculos/Veiculos";
import Home from "../routes/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/veiculos" element={<Veiculos />} />
      </Routes>
    </Router>
  );
}

export default App;

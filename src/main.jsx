import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import Relatorios from './routes/Relatorios/Relatorios';
import Veiculos from './routes/Veiculos/Veiculos';
import Aluguel from './routes/Aluguel/Aluguel';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/veiculos" element={<Veiculos />} />
        <Route path="/aluguel" element={<Aluguel />} />

      </Routes>
    </Router>
  );
}

export default App;
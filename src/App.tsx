import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/Componets/Home';
import Scorebar from '../src/Componets/Scorebar';
import Rules from '../src/Componets/Rules';
import Gamecard from '../src/Componets/Gamecard';

function App() {
  const [result, setResult] = useState<string | null>(null);

  return (
    <div className="app">
      <Scorebar result={result} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gamecard" element={<Gamecard setResult={setResult} />} />
        </Routes>
      </Router>
      <Rules />
    </div>
  );
}

export default App;

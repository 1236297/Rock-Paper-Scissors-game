import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Componets/Home';
import Scorebar from './Componets/Scorebar';
import Rules from './Componets/Rules';
import Gamecard from './Componets/Gamecard';
function App() {
  return (
        <div className="app">
          <Scorebar />
          <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gamecard" element={<Gamecard />} />
      </Routes>
    </Router>
          <Rules />
        </div>
      );
    }
    
    export default App;
    
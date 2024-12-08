// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';

function App(args) {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;

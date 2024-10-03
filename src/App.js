// import logo from './logo.svg';
import React from 'react';
import NavBar from './components/Navbar';
import HeroSection from './components/Hero_section';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';

function App(args) {

  return (
    <div className='darshan-container'>
      <NavBar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;

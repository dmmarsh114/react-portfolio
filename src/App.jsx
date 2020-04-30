import React from 'react';
import './App.css';

// components
import Header from './Components/Header/Header';
import Contact from './Components/Contact Me/Contact';
import About from './Components/About Me/About';
import Navbar from './Components/Navbar/Navbar';

function App() {

  /*
    ~~TODO~~
    Navbar
    About Me
    Projects
  
    Header/Jumbotron
    Contact Me
  */

  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Contact />
    </div>
  );
}

export default App;

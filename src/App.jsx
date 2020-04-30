import React from 'react';
import './App.css';

// components
import Header from './Components/Header/Header';
import Contact from './Components/Contact Me/Contact';
import About from './Components/About Me/About';
import Navbar from './Components/Navbar/Navbar';
import Skills from './Components/Skills/Skills';

function App() {

  /*
    ~~TODO~~
    Navbar
    Header/Jumbotron
    About Me
    Skills
    Projects
    Contact Me
  
  */

  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <hr style={{ width: '80%' }} />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;

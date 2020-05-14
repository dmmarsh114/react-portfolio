import React from 'react';
import './App.css';

// components
import Header from './Components/Header/Header';
import Contact from './Components/Contact/Contact';
import About from './Components/About Me/About';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Projects from './Components/Projects/Projects';

const githubLink = 'https://github.com/dmmarsh114';
const linkedInLink = 'https://www.linkedin.com/in/daniel-marsh-843aa5b7';

function App() {

  /*
    ~~TODO~~
    projects carousel
    make it responsive    
    insert copy
    add resume
    add fonts
    adjust contact form
  */

  return (
    <div>
      <Navbar />
      <Header gitHub={githubLink} linkedIn={linkedInLink} />
      <About />
      <hr style={{ width: '80%' }} />
      <Projects />
      <hr style={{ width: '80%' }} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

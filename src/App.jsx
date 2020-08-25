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
const linkedInLink = 'https://www.linkedin.com/in/dmmarsh114/';

function App() {

  return (
    <div>
      <Navbar />
      <Header gitHub={githubLink} linkedIn={linkedInLink} />
      <Projects />
      <About />
      <Contact gitHub={githubLink} linkedIn={linkedInLink} />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

// components
import Header from './Components/Header/Header';
import Contact from './Components/Contact Me/Contact';
import About from './Components/About Me/About';

function App() {

  const DanielMarsh = {
    hireable: true,
    passionate: true,
    gitHub: '',
    linkedIn: '',
    hardWorker: true,
    talented: 'extremely',
    skills: [
      ['Javascript', 'HTML5', 'CSS3', 'C#'],
      'React',
      'Legacy React',
      'Node.js',
      'Node Express',
      'SQL',
      'PostgreSQL'
    ],
    interests: [
      'robots',
      'video games',
      'hiking'
    ]
  }

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
      <Header />
      <About />
      <Contact />
    </div>
  );
}

export default App;

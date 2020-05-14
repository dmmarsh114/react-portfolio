import React from 'react';

import Skills from '../Skills/Skills';

import './About.css';

import aboutText from './aboutText';

const About = () => {

    return (
        <div id='aboutSection' className='aboutTotal'>
            <div className='about'>
                <h1 className='sectionHeader'>About Me</h1>
                <div className='aboutText'>
                    {aboutText}
                </div>
            </div>
            <hr style={{ width: '80%', margin: '50px auto 50px auto' }} />
            {/* <Skills /> */}
            <div className='skills'>
                <h1 className='sectionHeader'>I also have skills!</h1>
                <ul>
                    <li>Charisma</li>
                    <li>Coding</li>
                    <li>Sex Appeal</li>
                    <li>HTML</li>
                    <li>Tiger's Blood</li>
                    <li>CSS</li>
                </ul>
            </div>
        </div>
    )
}

export default About;
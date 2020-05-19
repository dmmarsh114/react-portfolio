import React from 'react';

import './About.css';
import './Skills.css';

import aboutText from './aboutText';

const About = () => {

    return (
        <div id='aboutSection' className='aboutTotal'>
            <div className='about'>
                <h1 className='sectionHeader'>Introduction</h1>
                <hr className='sectionHr' />
                <div className='aboutText'>
                    {aboutText}
                </div>
            </div>
            <br />
            <div className='skills'>
                <h1 className='sectionHeader'>Skills</h1>
                <hr className='sectionHr' />
                <ul>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>C#</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>SQL</li>
                </ul>
            </div>
        </div>
    )
}

export default About;
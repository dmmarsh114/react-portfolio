import React from 'react';

import './About.css';
import './Skills.css';

import aboutText from './aboutText';

const About = () => {

    const skills = [
        {
            name: 'React',
            icon: 'hi'
        },
        {
            name: 'TypeScript',
            icon: 'hi'
        },
        {
            name: 'C#',
            icon: 'hi'
        },
        {
            name: 'Node.js',
            icon: 'hi'
        },
        {
            name: 'Express',
            icon: 'hi'
        },
        {
            name: 'SQL',
            icon: 'hi'
        }
    ];

    const mapSkills = () => {
        return skills.map((skill, index) => {
            return (
                <li key={index}>
                    <p className='skillName'>{skill.name} </p>
                    <p className='skillIcon'>{skill.icon}</p>
                </li>
            )
        });
    }

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
                    {mapSkills()}
                </ul>
            </div>
        </div>
    )
}

export default About;
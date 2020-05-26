import React from 'react';

import './About.css';
import './Skills.css';

import aboutText from './aboutText';

import reactIcon from '../../Assets/Skill Icons/icons8-react-50.png';
import tsIcon from '../../Assets/Skill Icons/icons8-typescript-50-3.png';
import cSharpIcon from '../../Assets/Skill Icons/icons8-c-sharp-logo-50.png';
import nodeIcon from '../../Assets/Skill Icons/icons8-node-js-50.png';
import sqlIcon from '../../Assets/Skill Icons/icons8-database-50.png';


const About = () => {

    const skills = [
        { name: 'React', icon: reactIcon },
        { name: 'TypeScript', icon: tsIcon },
        { name: 'C#', icon: cSharpIcon },
        { name: 'Node.js', icon: nodeIcon },
        { name: 'SQL', icon: sqlIcon }
    ];

    const mapSkills = () => {
        return skills.map((skill, index) => {
            return (
                <li key={index}>
                    <p className='skillName'>{skill.name} </p>
                    <img className='skillIcon' src={skill.icon} />
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
                    <p>Hello, I’m Daniel Marsh!</p>
                    <p>I’m a full-stack web developer with experience working with React, Typescript, and SQL. I'm also exploring game development and generative art.</p>
                    <p> I’m a fast learner and I’m eager to take on new challenges. What do you have for me?</p>
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
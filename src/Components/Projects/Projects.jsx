import React from 'react';

import './Projects.css';
import Tooltip from '@material-ui/core/Tooltip';
import GitHubIcon from '@material-ui/icons/GitHub';

import solarSystemModelPic from '../../Assets/spaceVisualizerPic.png';
import bitsySitePic from '../../Assets/bitsySitePic2.png';
import distortionTilesPic from '../../Assets/distortion.png'

const Projects = () => {

    // define each project: 

    let solarSystemModel = {
        title: 'Space Visualizer',
        date: 'May 2020',
        desc: 'Users can learn about the planets and moons with this animated, interactive model of the solar system.',
        githubLink: 'https://github.com/dmmarsh114/Space-Visualizer',
        projectLink: 'https://solarsystemvisualizer-75b91.firebaseapp.com/',
        pic: solarSystemModelPic,
    };

    let bitsySite = {
        title: 'The Comic Misadventures of Bitsy',
        date: 'July 2020',
        desc: 'A website showcasing the humorous works of John Marsh.',
        githubLink: 'https://github.com/dmmarsh114/john-marsh-portfolio',
        projectLink: 'https://johnmarsh1.com/',
        pic: bitsySitePic,
    };

    let gallery = {
        title: 'Gallery',
        date: '(Ongoing)',
        desc: 'I use this page to show off some of the art I have made with code! (not yet mobile-friendly)',
        githubLink: 'https://github.com/dmmarsh114/generative-gallery',
        projectLink: 'https://dmmarsh114.github.io/generative-gallery/',
        pic: distortionTilesPic,
    }

    // change the order of project cards here: 
    const projects = [bitsySite, solarSystemModel, gallery];

    const displayProjects = () => {
        return projects.map((project, index) => {
            return (
                <div key={index} className='projectCard'>
                    <div style={{ height: '100%' }}>
                        {/* Alternate the side on which project screenshot is displayed: */}
                        <div className={index % 2 === 0 ? 'projectMedia right' : 'projectMedia left'}>
                            <a href={project.projectLink} target='blank'>
                                <div className='projectPicLayer'> {/* hover fx */}
                                    <p>Try it out!</p>
                                </div>
                            </a>
                            <img src={project.pic} alt="project screenshot" />
                        </div>

                        {/* Alternate the side on which project content is displayed: */}
                        <div className={index % 2 === 0 ? 'projectDesc left' : 'projectDesc right'}>
                            <h3 className='projectTitle'>{project.title}</h3>
                            <h5 className='projectTitle'>{project.date}</h5>
                            <p>{project.desc}</p>
                            <Tooltip title='Show me the code!' placement='top' arrow>
                                <a href={project.githubLink} target='blank' id='projectLink' className={index % 2 === 0 ? 'right' : 'left'}><GitHubIcon fontSize='small' /></a>
                            </Tooltip>
                            <a href={project.projectLink} target='blank' id='projectLink' className={index % 2 === 0 ? 'right' : 'left'}>Try it out!</a>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div id='projectSection' className='projectTotal'>
            <div className='projects'>
                <h1 className='sectionHeader'>Projects</h1>
                <hr className='sectionHr' />
                <br />
                <div className='projectCardContainer'>
                    {displayProjects()}
                </div>
            </div>
        </div>
    )
}

export default Projects;
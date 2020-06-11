import React from 'react';

import './Projects.css';
import Tooltip from '@material-ui/core/Tooltip';
import GitHubIcon from '@material-ui/icons/GitHub';

import solarSystemModelPic from '../../Assets/spaceVisualizerPic.png';
import suprememesPic from '../../Assets/suprememes.png';
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

    let suprememes = {
        title: 'Suprememes',
        date: 'April 2020',
        desc: 'A place to view those funny internet pictures. Users can sign in to comment on memes, as well as upload their own.',
        githubLink: 'https://github.com/dmmarsh114/Red-Badge-Client',
        projectLink: 'https://team6-red-badge-meme-client.herokuapp.com/',
        pic: suprememesPic,
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
    const projects = [suprememes, solarSystemModel, gallery];

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
import React from 'react';

import './Projects.css';
import Tooltip from '@material-ui/core/Tooltip';
import GitHubIcon from '@material-ui/icons/GitHub';

import solarSystemModelPic from '../../Assets/spaceVisualizerPic.png';
import bitsySitePic from '../../Assets/bitsySitePic2.png';
import distortionTilesPic from '../../Assets/distortion.png';

import ticketApprenticePic from '../../Assets/ticketApprentice.png';
import pirateEmporiumPic from '../../Assets/SD Static Store Front.png';
import sdGoldBadgePic from '../../Assets/SD Gold Badge Challenges.png';
import cssCreaturePic from '../../Assets/SD CSS Creature.png';

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

    let ticketApprentice = {
        title: 'TicketApprentice',
        date: 'November 2020',
        desc: 'An API that users can use to view, manage, and buy tickets to events at a variety of venues.',
        githubLink: 'https://github.com/Brian-Winter/TicketApprentice',
        projectLink: 'https://github.com/Brian-Winter/TicketApprentice',
        pic: ticketApprenticePic,
    }

    let pirateEmporium = {
        title: 'Pirate Emporium',
        date: 'September 2020',
        desc: 'A static storefront built to showcase my incredible HTML/CSS skills.',
        githubLink: 'https://github.com/dmmarsh114/Static-Store-Front',
        projectLink: 'https://dmmarsh114.github.io/Static-Store-Front/',
        pic: pirateEmporiumPic,
    }

    let sdGoldBadge = {
        title: 'Gold Badge Challenges',
        date: 'October 2020',
        desc: 'A suite of simple (but fun!) console apps for handling rudimentary business logic.',
        githubLink: 'https://github.com/dmmarsh114/SD-Gold-Badge-Challenges',
        projectLink: 'https://github.com/dmmarsh114/SD-Gold-Badge-Challenges',
        pic: sdGoldBadgePic,
    }

    let cssCreature = {
        title: 'CSS Creature',
        date: 'September 2020',
        desc: 'A simple little cartoon made only with HTML and CSS. Made in Codepen.',
        githubLink: 'https://codepen.io/dmmarsh4/pen/gOrPQeJ',
        projectLink: 'https://codepen.io/dmmarsh4/pen/gOrPQeJ',
        pic: cssCreaturePic,
    }

    // change the order of project cards here: 
    const projects = [ticketApprentice, pirateEmporium, sdGoldBadge, cssCreature];

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
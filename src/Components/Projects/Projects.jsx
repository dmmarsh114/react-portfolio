import React from 'react';

import './Projects.css';
import Tooltip from '@material-ui/core/Tooltip';
import GitHubIcon from '@material-ui/icons/GitHub';

import testPic from '../../Assets/whiteRiver.jpg';
import trailTrackerPic from '../../Assets/trailTracker.png';
import suprememesPic from '../../Assets/suprememes.png';
import phyllotaxisPic from '../../Assets/phyllotaxis.png';

const Projects = () => {

    const projects = [
        {
            title: 'TrailTracker',
            date: 'March 2020',
            desc: 'Users can post about trails that they have recently hiked, as well as filter through posts to find highly-rated trails near them.',
            githubLink: 'https://github.com/dmmarsh114/trail-tracker-client',
            projectLink: 'https://dmm-trailtracker-client.herokuapp.com/',
            pic: trailTrackerPic,
        },
        {
            title: 'Suprememes',
            date: 'April 2020',
            desc: 'A place to view memes. Users can sign in to comment on memes, as well as upload their own.',
            githubLink: 'https://github.com/dmmarsh114/Red-Badge-Client',
            projectLink: 'https://team6-red-badge-meme-client.herokuapp.com/',
            pic: suprememesPic,
        },
        {
            title: 'title',
            date: 'date',
            desc: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            githubLink: '',
            projectLink: '',
            pic: phyllotaxisPic,
        }
    ];

    const displayProjects = () => {
        return projects.map((project, index) => {
            return (
                <div key={index} className='projectCard'>
                    <div>
                        <div className={index % 2 === 0 ? 'projectMedia right' : 'projectMedia left'}>
                            <a href={project.projectLink} target='blank'>
                                <div className='projectPicLayer'>
                                    <p>Try it out!</p>
                                </div>
                            </a>
                            <img src={project.pic} alt="project screenshot" />
                        </div>
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
        <div id='projectSection'>
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
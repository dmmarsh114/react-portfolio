import React from 'react';

import './Projects.css';

import GitHubIcon from '@material-ui/icons/GitHub';

const ProjectCard = (props) => {

    return (

        <div id='projectCard' className='projectCard'>
            <div>
                <div className='projectMedia'>
                    <img src={props.pic} alt='project screenshot' />
                </div>
                <div className='projectDesc'>
                    <h3 className='projectTitle'>{props.title}</h3>
                    <h5 className='projectTitle'>{props.date}</h5>
                    <p>{props.desc}</p>
                    <a href={props.githubLink} target='blank' id='projectLink'><GitHubIcon fontSize='small' /></a>
                    <a href={props.projectLink} target='blank' id='projectLink'>Try it out!</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
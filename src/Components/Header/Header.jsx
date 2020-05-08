import React from 'react';

import './Header.css';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Header = (props) => {

    return (
        <div className='header'>
            <div className='titleText'>
                <h1>Daniel Marsh</h1>
                <h3 style={{ color: 'white' }}>Web Developer</h3>
                <a id='link' href={props.gitHub} target='blank'><GitHubIcon fontSize='large' /></a>
                <a id='link' href={props.linkedIn} target='blank'><LinkedInIcon fontSize='large' /></a>
            </div>
        </div>
    )
}

export default Header;
import React from 'react';

import './Header.css';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Header = (props) => {

    return (
        <div id='home' className='header'>
            <div className='headerLayer'></div>
            <div className='titleText'>
                <h1 style={{ marginBottom: '5px' }}>Daniel Marsh</h1>
                <h3 style={{ marginTop: '0px', marginBottom: '50px' }}>Web Developer</h3>
                <a id='link' href={props.gitHub} target='blank'><GitHubIcon fontSize='large' /></a>
                <a id='link' href={props.linkedIn} target='blank'><LinkedInIcon fontSize='large' /></a>
            </div>
        </div >
    )
}

export default Header;
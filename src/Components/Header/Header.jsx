import React from 'react';

import './Header.css';

import Tooltip from '@material-ui/core/Tooltip';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {

    return (
        <div id='home' className='header'>
            <div className='headerLayer'></div>
            <div className='titleText'>
                <h1 style={{ marginBottom: '5px' }}>Daniel Marsh</h1>
                <h3 style={{ marginTop: '0px', marginBottom: '50px' }}>Web Developer</h3>
                <Tooltip title='View my Github profile!' arrow>
                    <a id='link' href={props.linkedIn} target='blank'><FontAwesomeIcon icon={faGithubSquare} /></a>
                </Tooltip>
                <Tooltip title='Contact me on LinkedIn!' arrow placement='top'>
                    <a id='link' href={props.linkedIn} target='blank'><FontAwesomeIcon icon={faLinkedin} /></a>
                </Tooltip>
                <Tooltip title='Download my resume!' arrow>
                    <a id='link' href=''><FontAwesomeIcon icon={faFile} size='sm' style={{ paddingBottom: '2px' }} /></a>
                </Tooltip>
            </div>
        </div >
    )
}

export default Header;
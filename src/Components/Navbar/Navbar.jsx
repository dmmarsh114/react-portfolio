import React, { useState } from 'react';

import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    // initial style
    let bc1 = 'transparent';
    let fc1 = 'inherit';

    // scroll style 
    let bc2 = 'var(--header-font-color)';
    let fc2 = 'white';

    const [background, setBackground] = useState(bc1);
    const [fontColor, setFontColor] = useState(fc1);

    let navStyle = {
        background: background,
        color: fontColor
    }

    const [showBrand, setShowBrand] = useState(false);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 0) {
            setBackground(bc2);
            setFontColor(fc2);
            setShowBrand(true);
        } else {
            setBackground(bc1);
            setFontColor(fc1);
            setShowBrand(false);
        }
    });

    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className='position-fixed navbar' style={navStyle}>
            <a className='navIcon d-lg-none d-md-none' onClick={() => setNavOpen(!navOpen)}><FontAwesomeIcon icon={faBars} /></a>
            <a href="#home" id='myBrand'>{showBrand ? 'Daniel Marsh' : null}</a>
            <div className={`navLinks ${navOpen ? 'open' : 'closed'}`}>
                <a href="#contactSection">Contact</a>
                <a href="#projectSection">Portfolio</a>
                <a href="#aboutSection">About</a>
                <a href="">Resume</a>
            </div>
        </div>
    )
}

export default Navbar;
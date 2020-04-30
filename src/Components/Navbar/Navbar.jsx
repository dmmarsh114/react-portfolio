import React, { useState } from 'react';

import './Navbar.css';

const Navbar = (props) => {

    // initial style
    let bc1 = 'transparent';
    let fc1 = 'black';

    // scroll style 
    let bc2 = 'green';
    let fc2 = 'white';

    const [background, setBackground] = useState(bc1);
    const [fontColor, setFontColor] = useState(fc1);

    let navStyle = {
        background: background,
        color: fontColor
    }

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 0) {
            setBackground(bc2);
            setFontColor(fc2);
        } else {
            setBackground(bc1);
            setFontColor(fc1);
        }
    })

    return (
        <div id='nav' className='navbar' style={navStyle} >
            <ul>
                <li>Projects</li>
                <li>Resume</li>
                <li>Github</li>
                <li>Linkedin</li>
            </ul>
        </div>
    )
}

export default Navbar;
import React, { useState } from 'react';

import './Navbar.css';

const Navbar = (props) => {

    // initial style
    let bc1 = 'transparent';
    let fc1 = 'inherit';

    // scroll style 
    let bc2 = 'var(--header-bg-color)';
    let fc2 = 'var(--header-font-color)';

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
        <div className='navContainer'> {/* see header.css for mobile styling */}
            <div id='nav' className='navbar' style={navStyle} >
                <ul>
                    <li>Projects</li>
                    <li>Resume</li>
                    <li>Github</li>
                    <li>Linkedin</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
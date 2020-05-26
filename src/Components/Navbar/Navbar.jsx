import React, { useState } from 'react';

import './Navbar.css';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {

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

    const [showBrand, setShowBrand] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar style={navStyle} dark expand="md" className='position-fixed myNavbar'>
                {showBrand ? <NavbarBrand href="#home">Daniel Marsh</NavbarBrand> : null}
                <NavbarToggler onClick={toggle} className='ml-auto' />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="">Resume</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#aboutSection">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#projectSection">Portfolio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#contactSection">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;
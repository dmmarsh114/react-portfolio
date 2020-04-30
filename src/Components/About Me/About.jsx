import React from 'react';

import './About.css';
import { Container, Col, Row } from 'reactstrap';

import aboutText from './aboutText';

const githubLink = 'https://github.com/dmmarsh114';
const linkedInLink = 'https://www.linkedin.com/in/daniel-marsh-843aa5b7';

const About = () => {

    return (
        <Container className='about'>
            <Row>
                <Col>
                    <h2>About Me</h2>
                    {aboutText}
                </Col>
            </Row>
        </Container>
    )
}

export default About;
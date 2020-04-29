import React from 'react';

import { Container, Col, Row } from 'reactstrap';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './About.css';

import danImage from '../../Assets/DanielMarsh3.jpg';

const githubLink = 'https://github.com/dmmarsh114';
const linkedInLink = 'https://www.linkedin.com/in/daniel-marsh-843aa5b7';

const About = (props) => {

    return (
        <Container>
            <Row>
                {/* ===== TODO ===== */}
                {/* extract this blurb into a separate file! */}
                <Col>
                    <Card className='my-card'>
                        <CardMedia
                            className='my-face'
                            image={danImage}
                            title='my beautiful face'
                        />
                        <CardContent>
                            <i>Should something go here?</i>
                        </CardContent>
                        <CardActions>
                            <a href={githubLink} target="blank"><GitHubIcon /></a>
                            <a href={linkedInLink} target="blank"><LinkedInIcon /></a>
                        </CardActions>
                    </Card>
                </Col>
                <Col>
                    <p>I graduated from Indiana University in 2016 with a desire to work outdoors, see other places, and give back to the world. I volunteered for 2 months doing hurricane disaster relief in the U.S. Virgin Islands, then did a much longer stint with the Montana Conservation Corps in the remote wilderness. Along the way, I worked in landscaping and as a grower in a commercial greenhouse in the Indianapolis area. During that time, I began to teach myself how to code. I taught myself the basics of the C# programming language by building simple games using the Unity Engine.  </p>
                    <p>At first programming was just a hobby of mine, but I quickly realized that I was even more interested in working with computers than I was with plants. I began looking for ways to further my education in programming, with an eye to a future career. That’s when I discovered the Eleven Fifty Academy -- a coding bootcamp in Indianapolis. Now that I’m enrolled, I am expanding my knowledge of HTML, CSS, and Javascript. After this, I’ll be entering the job market, and I’m sure I’ll always be learning more, designing more, and enhancing my coding skills.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default About;
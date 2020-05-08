import React from 'react';

import ProjectCard from './ProjectCard';

import './Projects.css';

import testPic from '../../Assets/whiteRiver.jpg';

const Projects = () => {

    return (

        <div className='projects'>
            <h1 className='sectionHeader'>Projects</h1>

            <div className='projectCardContainer'>

                {/* TRAILTRACKER */}
                <ProjectCard
                    title={'TrailTracker'}
                    date={'March 2020'}
                    desc={'Users can post about trails that they have recently hiked, as well as filter through posts to find highly-rated trails near them.'}
                    githubLink={'https://github.com/dmmarsh114/trail-tracker-client'}
                    projectLink={''}
                    pic={testPic}
                />

                {/* SUPREMEMES */}
                <ProjectCard
                    title={'Suprememes'}
                    date={'April 2020'}
                    desc={'A place to view memes. Users can sign in to comment on memes, as well as upload their own.'}
                    githubLink={''}
                    projectLink={''}
                    pic={testPic}
                />

            </div>
        </div>
    )
}

export default Projects;
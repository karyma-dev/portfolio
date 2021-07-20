import React from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import styled from 'styled-components'

import Project from './Project'
import mefit from '../../assets/mefit.png'
import weather_app from '../../assets/weather_app.png'
import developer_cheatsheet from '../../assets/developer_cheatsheet.png'
import {defaultTheme} from '../../utils/themes'

const Container = styled.div`
    padding: 10% 10%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Link = styled.a`
    text-decoration: none;
    color: ${defaultTheme.primaryTextColor};
    font-weight: 600;
`

const Projects = () => {
    return (
        <Container id='projects'>
            <Fade right>
                <Project
                    title='MeFit'
                    image={mefit}
                    description='A fitness application that calculates and tracks RPE(Rate of Perceived Exertion) and total volume. MeFit was created when I was a student at Brainstation coding bootcamp and it has been constantly updated through out the years. MeFit is built with Nextjs, Typescript and deployed with Vercel. It features user authenthication with auth0, data storage with mongodb and data representation with d3.'
                    github='https://github.com/karyma101/meFit'
                />
            </Fade>
            <Fade left>
                <Project
                    title='Weather App'
                    image={weather_app}
                    description='A simple weather application I created with React and Typescript to polish existing skills and to try out new technologies. The application features automated testing with Jest and React-Testing-Library, custom webpack tailored to the project and autocomplete functionality using React Downshift. It uses Openweather Api as its primary api to retrieve forecast data.'
                    github='https://github.com/karyma101/react-weather-app'
                    website='https://dev6975.d2pwnadyx0yrrk.amplifyapp.com/#/'
                    reverse
                />
            </Fade>
            <Fade right>
                <Project
                    title='Developer Cheatsheet'
                    image={developer_cheatsheet}
                    description="It is impossible to remember everything you learn and everyone has different approaches when it comes to learning. Personally I love creating cheatsheets as a reference for all the things I've learned. To simplify the process I created this application to assist with my approach. This application is powered by Docsify, hosted by AWS amplify and integrated with continious deployment."
                    github='https://github.com/karyma101/notes'
                    website='https://main.dioy1ftnwrisd.amplifyapp.com/'
                />
            </Fade>
            <Fade>
                <Link href="https://github.com/karyma101" target="_blank">View More Projects</Link>
            </Fade>
        </Container>
    )
}

export default Projects

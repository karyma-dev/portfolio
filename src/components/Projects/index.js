import React from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

import Project from './Project'
import mefit from '../../assets/mefit.png'
import weather_app from '../../assets/weather_app.png'
import {defaultTheme} from '../../utils/themes'

const Container = styled.div`
    padding: 30px 10%;
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
            <Fade left>
            </Fade>
            <Fade right>
                <Project
                    title='MeFit'
                    image={mefit}
                    description='A fitness application that calculates and tracks RPE(Rate of Perceived Exertion) and total volume. MeFit was created when I was a student at Brainstation coding bootcamp and it has been constantly updated through out the years. MeFit was created with Nextjs, Typescript and deployed with Vercel. It features user authenthication and registration with both client and server side validation. Passwords are hashed and salted with Bcrypt and stored in the database using Mongodb.'
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
            <Link href="https://github.com/karyma101" target="_blank">View More On Github</Link>
        </Container>
    )
}

export default Projects

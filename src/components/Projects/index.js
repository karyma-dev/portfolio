import React from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

import Project from './Project'
import mefit from '../../assets/mefit.png'
import weather_app from '../../assets/weather_app.png'
import outcha from '../../assets/outcha.png'

const Container = styled.div`
    padding: 20px 10%;
    min-height: 100vh;
`

const Projects = () => {
    return (
        <Container id='projects'>
            <Fade left>
                <Project
                    title='Outcha'
                    image={outcha}
                    description='Outcha is a resale clothing store located in L.A. The web application is created with Next js and Typescript. Outcha uses a Strapi which is an nodejs headless cms to add and edit new/existing items. It also uses Stripe to process payments.'
                    github='https://github.com/karyma101/outcha'
                />
            </Fade>
            <Fade right>
                <Project
                    title='MeFit'
                    image={mefit}
                    description='A fitness application that calculates and tracks workout volume. MeFit was created when I was a student at Brainstation coding bootcamp and it has been constantly updated through out the years. MeFit was created with React and bundled with Webpack. It features user authenthication and registration with both client and server side validation. Passwords are hashed and salted with Bcrypt and stored in the database using Mongodb.'
                    github='https://github.com/karyma101/meFit'
                    reverse
                />
            </Fade>
            <Fade left>
                <Project
                    title='Weather App'
                    image={weather_app}
                    description='Weather application created with React and Parcel. It uses Openweather api as the primary api. One of my very first projects I created to practice React hooks, context and parcel.'
                    github='https://github.com/karyma101/weather-app'
                />
            </Fade>
        </Container>
    )
}

export default Projects

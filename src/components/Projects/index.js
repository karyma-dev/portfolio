import React from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

import Project from './Project'
import mefit from '../../assets/mefit.png'
import weather_app from '../../assets/weather_app.png'

const Container = styled.div`
    padding: 20px 10%;
    min-height: 100vh;
`

const Projects = () => {
    return (
        <Container id='projects'>
            <Fade left>
                <Project
                    title='MeFit'
                    image={mefit}
                    description='A fitness application that calculates and tracks workout volume. MeFit was created when I was a student at Brainstation coding bootcamp and it has been constantly updated through out the years. MeFit was created with React and bundled with Webpack. It features user authenthication and registration with both client and server side validation. Passwords are hashed and salted with Bcrypt and stored in the database using Mongodb.'
                />
            </Fade>
            <Fade right>
                <Project
                    title='Pokemondb'
                    image={mefit}
                    description='A pokemon database application. It was created with nextjs and typescript. Autocomplete functionality created with react downshift library. PokeApi'
                    reverse
                />
            </Fade>
            <Fade left>
                <Project
                    title='Weather App'
                    image={weather_app}
                    description='Weather Application created with React and parcel. Openweather api'
                />
            </Fade>
        </Container>
    )
}

export default Projects

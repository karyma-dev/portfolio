import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

import Description from './Description'
import Profile from './Profile'
import img from '../../assets/bg.png'

const Container = styled.div`
    padding: 100px 10%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #151515;
`

const Div = styled.div`
    display: flex;

    @media only screen and (max-width: 1500px) {
        flex-direction: column;
        align-items: center;
    }
`

const About = () => {
    return (
        <Container>
            <Div>
                <Description />
                <Profile />
            </Div>
        </Container>
    )
}

export default About

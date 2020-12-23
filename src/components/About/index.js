import React from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

import Description from './Description'
import Profile from './Profile'
import img from '../../assets/bg.png'

const Container = styled.div`
    padding: 0 10%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${img}) no-repeat center / cover;
    background-attachment: fixed;
`

const About = () => {
    return (
        <Fade>
            <Container>
                <Description />
                <Profile />
            </Container>
        </Fade>
    )
}

export default About

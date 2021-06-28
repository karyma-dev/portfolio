import React from 'react'
import styled from 'styled-components'

import Description from './Description'
import Profile from './Profile'
import img from '../../assets/bg.png'

const Container = styled.div`
    padding: 100px 10%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, rgba(17, 17, 17, 1), rgba(17, 17, 17, 0.7), rgba(17, 17, 17, 1)), url(${img}) no-repeat center / cover;

    @media only screen and (max-width: 1024px) {
        flex-direction: column;
    }
`

const About = () => {
    return (
        <Container>
            <Description />
            <Profile />
        </Container>
    )
}

export default About

import React from 'react'
import styled from 'styled-components'

import Description from './Description'
import Profile from './Profile'

const Container = styled.div`
    padding: 0 10%;
    display: flex;
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

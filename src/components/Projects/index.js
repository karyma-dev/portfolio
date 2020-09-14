import React from 'react'
import styled from 'styled-components'

import Project from './Project'

const Container = styled.div`
    height: 100vh;
    padding: 0 10%;
`

const Projects = () => {
    return (
        <Container>
            <Project />
            <Project reverse />
            <Project />
            <Project reverse />
        </Container>
    )
}

export default Projects
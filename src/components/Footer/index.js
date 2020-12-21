import React from 'react'
import styled from 'styled-components'
import {defaultTheme} from '../../utils/themes'

import EmailIcon from './Icons/Email'
import LinkedinIcon from './Icons/Linkedin'
import GithubIcon from './Icons/Github'

const Container = styled.div`
    background-color: ${defaultTheme.secondaryBackgroundColor};
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Footer = () => {
    return (
        <Container>
            <EmailIcon />
            <LinkedinIcon />
            <GithubIcon />
        </Container>
    )
}

export default Footer

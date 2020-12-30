import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'

import Linkedin from '../Footer/Icons/Linkedin'
import Email from '../Footer/Icons/Email'
import Github from '../Footer/Icons/Github'
import img from '../../assets/bg.png'

const Background = styled.header`
    height: 100vh;
    background: linear-gradient(to bottom, rgba(17, 17, 17, 0.6), rgba(17, 17, 17, 1)),
        url(${img}) no-repeat center / cover;
    position: relative;
`

const Title = styled.h1`
    position: absolute;
    top: 60%;
    letter-spacing: 0.5px;
    line-height: 1.2;
    padding: 0 10%;

    @media only screen and (max-width: 768px) {
        top: 50%;
    }

    @media only screen and (max-width: 425px) {
        top: 40%;
        font-size: 2.5rem;
    }

    @media only screen and (max-width: 768px) and (orientation: landscape) {
        top: 30%;
        font-size: 2rem;
    }
`

const IconContainer = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 20px;
`

const Header = () => {
    return (
        <Background id='home' role='banner'>
            <Title>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(60)
                            .typeString(
                                'Hey I am <strong>Kary</strong>, <br/> a react developer passionate about delivering clean and scalable solutions.'
                            )
                            .start()
                    }}
                />
            </Title>

            <IconContainer>
                <Email />
                <Linkedin />
                <Github />
            </IconContainer>
        </Background>
    )
}

export default Header

import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'

import img from '../../assets/bg.png'

const Background = styled.header`
    height: 100vh;
    background: url(${img}) no-repeat center / cover;
    position: relative;
    background: linear-gradient(180deg, rgba(17, 17, 17, 0), rgba(17, 17, 17, 0),rgba(17, 17, 17, 0), rgba(17, 17, 17, 1)), url(${img}) no-repeat center / cover;
`

const Title = styled.h1`
    position: absolute;
    top: 60%;
    letter-spacing: 0.5px;
    line-height: 1.2;
    padding: 0 10%;
    font-weight: 300;

    @media only screen and (max-width: 768px) {
        top: 50%;
    }

    @media only screen and (max-width: 768px) and (orientation: landscape) {
        top: 30%;
        font-size: 2rem;
    }

    @media only screen and (max-width: 425px) {
        top: 40%;
        font-size: 2.5rem;
    }
`

const Header = () => {
    return (
        <Background id='home' role='banner'>
            <Title>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(37)
                            .typeString(
                                'Hey I am <strong>Kary</strong>, <br/> a react developer passionate about delivering efficient and scalable solutions.'
                            )
                            .start()
                    }}
                />
            </Title>
        </Background>
    )
}

export default Header

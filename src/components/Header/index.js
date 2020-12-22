import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'

import img from '../../assets/bg.png'

const Background = styled.div`
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

    @media (max-width: 500px) {
        top: 30%;
    }
`

const Header = () => {
    return (
        <Background id='home'>
            <Title>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(50)
                            .typeString(
                                'Hey I am <strong>Kary</strong>, <br/> a react developer passionate about delivering clean and scalable solutions.'
                            )
                            .start()
                    }}
                />
            </Title>
        </Background>
    )
}

export default Header

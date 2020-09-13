import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'

import img from '../../assets/bg.png'

const Background = styled.div`
    height: 100vh;
    background: 
        linear-gradient(to bottom, rgba(17, 17, 17, 0.6), rgba(17, 17, 17, 1)),
        url(${img}) no-repeat bottom left / cover;
    position: relative;
`

const Title = styled.h1`
    position: absolute;
    bottom: 10%;
    left: 5%;
    font-size: 3rem;
    letter-spacing: 1px;
    width: 60%;
`

const Bold = styled.strong`
    font-weight: 700;
`

const Header = () => {
    return (
        <Background>
            <Title>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(50)
                            .typeString("Hey I am Kary")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("I am a full stack developer passionate about creating scalable and efficient solutions.")
                            .start();
                    }}
                />
            </Title>
        </Background>
    )
}

export default Header
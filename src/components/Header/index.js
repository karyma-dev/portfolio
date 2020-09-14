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
    z-index: 50;
`

const Title = styled.h1`
    position: absolute;
    bottom: 15%;
    left: 5%;
    letter-spacing: 0.5px;
    width: 60%;
`

const Header = () => {
    return (
        <Background>
            <Title>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(75)
                            .typeString("Hey I am Kary.")
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
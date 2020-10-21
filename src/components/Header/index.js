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
    top: 60%;
    letter-spacing: 0.5px;
    line-height: 1.2;
    width: 80%;
    padding: 0 50px;

    @media (max-width: 1440px) {
        width: 80%;
    }

    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 500px) {
        top: 30%;
    }
`

const Header = () => {
    return (
        <Background>
            <Title>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(1)
                            .typeString("Hey I am <strong>Kary</strong>.<br/> I am a full stack developer passionate about creating scalable and efficient solutions.")
                            .start();
                    }}
                />
            </Title>
        </Background>
    )
}

export default Header
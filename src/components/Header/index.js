import React from 'react'
import styled from 'styled-components'

import img from '../../assets/bg.png'

const Background = styled.div`
    height: 100vh;
    background: 
        linear-gradient(to bottom, rgba(17, 17, 17, 0.6), rgba(17, 17, 17, 1)),
        url(${img}) no-repeat bottom left / cover;
`

const Header = () => {
    return (
        <Background>
        </Background>
    )
}

export default Header
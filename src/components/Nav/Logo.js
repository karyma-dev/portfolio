import React from 'react'
import styled from 'styled-components'

import logo from '../../assets/logo.png'

const Img = styled.img`
    width: 50px;
    margin-left: 5px;
`

const Logo = () => {
    return <Img src={logo} />
}

export default Logo
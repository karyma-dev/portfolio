import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

import logo from '../../assets/logo.png'

const Img = styled.img`
    width: 50px;
    margin-left: 5px;
    cursor: pointer;
`

const Logo = () => {
    return <Link to='home' spy={true} smooth={true}><Img src={logo} /></Link>
}

export default Logo
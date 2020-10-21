import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Menu from './Menu'

const Navbar = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 50px 50px;
`

const Nav = () => {
    return (
        <Navbar>
            <Logo />
            <Menu />
        </Navbar >
    )
}

export default Nav
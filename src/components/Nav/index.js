import React, {useState} from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Menu from './Menu'

const Navbar = styled.div`
    position: fixed;
    display: flex;
    background-color: ${(props) => (props.active ? '#080808' : 'none')};
    box-shadow: ${(props) => (props.active ? '0px 3px 15px rgba(0,0,0,0.4)' : 'none')};
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px 10%;
    z-index: 2;
`

const Nav = () => {
    const [active, setActive] = useState(false)

    const showBackground = () => {
        if (window.scrollY >= 60) {
            setActive(true)
        } else {
            setActive(false)
        }
    }

    window.addEventListener('scroll', showBackground)

    return (
        <Navbar active={active}>
            <Logo />
            <Menu />
        </Navbar>
    )
}

export default Nav

import React from 'react'
import styled from 'styled-components'

const Navbar = styled.div`
    position: absolute;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100px;
    padding: 0 5%;
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 250px;
`

const NavItem = styled.a`
    display: block;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 1.5rem;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        font-weight: 500;
    }
`

const Nav = () => {
    return (
        <Navbar>
            <Container>
                <NavItem href="#projects">Projects</NavItem>
                <NavItem href="#about">About</NavItem>
            </Container>
        </Navbar >
    )
}

export default Nav
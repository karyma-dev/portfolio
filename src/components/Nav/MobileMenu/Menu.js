import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-scroll'

const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #effffa;
    transform: ${({open}) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    height: 100vh;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    width: 50vw;

    a {
        font-size: 2rem;
        text-transform: uppercase;
        padding: 2rem 0;
        font-weight: 600;
        letter-spacing: 3px;
        color: black;
        text-decoration: none;
        transition: color 0.3s linear;
    }
`

const ListItem = styled.li`
    cursor: pointer;
`

const ListItemLink = styled(Link)`
    display: inline-block;
`

const Menu = ({open}) => {
    return (
        <StyledMenu open={open}>
            <ListItem>
                <ListItemLink activeClass='active' to='home' spy={true} smooth={true}>
                    Home
                </ListItemLink>
            </ListItem>
            <ListItem>
                <ListItemLink activeClass='active' to='projects' spy={true} smooth={true}>
                    Projects
                </ListItemLink>
            </ListItem>
            <ListItem>
                <ListItemLink activeClass='active' to='about' spy={true} smooth={true}>
                    About
                </ListItemLink>
            </ListItem>
            <ListItem>
                <ListItemLink activeClass='active' to='references' spy={true} smooth={true}>
                    References
                </ListItemLink>
            </ListItem>
        </StyledMenu>
    )
}

export default Menu

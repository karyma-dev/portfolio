import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-scroll'

const List = styled.ul`
    list-style: none;
    display: flex;
`

const ListItem = styled.li`
    cursor: pointer;
`

const ListItemLink = styled(Link)`
    display: inline-block;
    margin-left: 20px;
    text-decoration: none;
    letter-spacing: 3px;
    &:hover {
        text-shadow: 1px 0 0 white;
    }
`

const Menu = () => {
    const [menu, toggleMenu] = useState(false)

    const setWindowSize = () => {
        const size = window.innerWidth

        if (size < 1000) {
            toggleMenu(true)
        } else {
            toggleMenu(false)
        }
    }

    window.addEventListener('resize', setWindowSize)

    return menu ? (
        <svg width='32' height='25' viewBox='0 0 32 25' fill='none'>
            <rect width='32' height='4.24706' fill='white' />
            <rect y='9.90979' width='32' height='4.24706' fill='white' />
            <rect y='19.8196' width='32' height='4.24706' fill='white' />
        </svg>
    ) : (
        <List>
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
        </List>
    )
}

export default Menu

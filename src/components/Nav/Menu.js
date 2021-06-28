import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'react-scroll'

import MobileMenu from './MobileMenu'

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

    text-shadow: ${(props) => (props.activeClass ? 'text-shadow: 1px 0 0 white;' : 'none;')};
`

const Menu = () => {
    const [menu, toggleMenu] = useState(false)

    const setWindowSize = () => {
        const size = window.innerWidth

        if (size < 999) {
            toggleMenu(true)
        } else {
            toggleMenu(false)
        }
    }

    useEffect(() => {
        setWindowSize()
    }, [])

    window.addEventListener('resize', setWindowSize)

    return menu ? (
        <MobileMenu />
    ) : (
        <List>
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
            <ListItem>
                <ListItemLink activeClass='active' >
                    Resume
                </ListItemLink>
            </ListItem>
        </List>
    )
}

export default Menu

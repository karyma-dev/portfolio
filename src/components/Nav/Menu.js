import React, {useState} from 'react'
import styled from 'styled-components'

const List = styled.ul`
    list-style: none;
    display: flex;
`

const ListItem = styled.li`
    cursor: pointer;
`

const ListItemLink = styled.a`
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
        <svg
            width='32'
            height='25'
            viewBox='0 0 32 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <rect width='32' height='4.24706' fill='white' />
            <rect y='9.90979' width='32' height='4.24706' fill='white' />
            <rect y='19.8196' width='32' height='4.24706' fill='white' />
        </svg>
    ) : (
        <List>
            <ListItem>
                <ListItemLink href='/'>Home</ListItemLink>
            </ListItem>
            <ListItem>
                <ListItemLink href='#projects'>Projects</ListItemLink>
            </ListItem>
            <ListItem>
                <ListItemLink href='#references'>References</ListItemLink>
            </ListItem>
            <ListItem>
                <ListItemLink href='#about'>About</ListItemLink>
            </ListItem>
        </List>
    )
}

export default Menu

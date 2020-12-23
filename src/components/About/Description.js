import React from 'react'
import styled from 'styled-components'

const Column = styled.div`
    flex: 2;
    padding-right: 100px;
`

const Header = styled.h2`
    font-weight: 600;
`

const Paragraph = styled.p``

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0 20px;
    flex: 1;
`

const ListItem = styled.li`
    text-transform: uppercase;
    flex-basis: 200px;
    margin: 3px 0;
    letter-spacing: 1px;
`

function Description() {
    return (
        <Column>
            <Header>About Me</Header>
            <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse placeat necessitatibus
                ad non quidem sint vel commodi voluptate alias praesentium cupiditate debitis soluta
                iste quia molestias a iusto dicta dolore tenetur quasi, porro, eaque deserunt.
                Dolorem hic culpa, error ad aspernatur molestias ex tenetur harum similique, laborum
                quia, sint atque?
            </Paragraph>

            <Header>Skills</Header>

            <List>
                <ListItem>Html5</ListItem>
                <ListItem>Css3</ListItem>
                <ListItem>Sass</ListItem>
                <ListItem>Javascript</ListItem>
                <ListItem>Typescript</ListItem>
                <ListItem>Node</ListItem>
                <ListItem>Git</ListItem>
                <ListItem>Express</ListItem>
                <ListItem>React</ListItem>
                <ListItem>Redux</ListItem>
                <ListItem>Next JS</ListItem>
                <ListItem>Mangodb</ListItem>
                <ListItem>MySql</ListItem>
                <ListItem>Webpack</ListItem>
                <ListItem>Electron</ListItem>
                <ListItem>Socket.io</ListItem>
                <ListItem>AWS</ListItem>
                <ListItem>Figma</ListItem>
            </List>
        </Column>
    )
}

export default Description

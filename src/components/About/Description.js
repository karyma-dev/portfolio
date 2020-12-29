import React from 'react'
import styled from 'styled-components'

const Column = styled.div`
    flex: 2;
    padding-right: 100px;

    @media only screen and (max-width: 1440px) {
        flex: 1.5;
        padding-right: 50px;
    }

    @media only screen and (max-width: 1024px) {
        order: 1;
        padding-right: 0;
    }
`

const Header = styled.h2`
    font-weight: 600;
`

const Paragraph = styled.p``

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding-left: 20px;
    flex: 1;
`

const ListItem = styled.li`
    text-transform: uppercase;
    flex-basis: 120px;
    margin: 3px 0;
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

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

const Paragraph = styled.p`
    letter-spacing: 1px;
    text-indent: 20px;
`

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

    @media only screen and (max-width: 400px) {
        flex-basis: 100px;
    }
`

function Description() {
    return (
        <Column>
            <Header>About Me</Header>
            <Paragraph>
                I am Full Stack React developer located in Vancouver, BC. I graduated from
                Brainstation Coding Bootcamp about 2 years ago. Before web development I was a
                renovator working alongside my father. I always knew I had passion for building
                things, this interest gradually moved on to learning how to develop and maintain web
                applications. With the skills I have learned at Brainstation I can create more, not
                only limited to physical things.
            </Paragraph>

            <Paragraph>
                Feel free to email me or add me on linkedin for new opportunities or collaborations.
                I am currently looking for a full time position as a developer.
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
                <ListItem>Next</ListItem>
                <ListItem>Mongodb</ListItem>
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

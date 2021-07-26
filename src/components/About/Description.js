import React from 'react'
import styled from 'styled-components'

const Column = styled.div`
    flex: 2;
    padding-right: 100px;

    @media only screen and (max-width: 1440px) {
        flex: 1.5;
        padding-right: 50px;
    }

    @media only screen and (max-width: 1500px) {
        order: 1;
        padding-right: 0;
    }
`

const Header = styled.h2`
    margin: 0;
    font-weight: 600;

    @media only screen and (max-width: 1500px) {
        margin-top: 20px;
    }
`

const Paragraph = styled.p`
    text-indent: 20px;
    line-height: 1.3;
    font-weight: 400;
    text-align: justify;
    letter-spacing: 2px;
`

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding-left: 18px;
    font-size: 0.9rem;
    flex: 1;

    @media only screen and (max-width: 500px) {
        justify-content: space-between;
    }
`

const ListItem = styled.li`
    text-transform: uppercase;
    flex-basis: 230px;
    margin: 3px 0;
    @media only screen and (max-width: 900px) {
        flex-basis: 150px;
    }

    @media only screen and (max-width: 500px) {
        flex-basis: 130px;
        font-size: 0.8rem;
    }

    @media only screen and (max-width: 350px) {
        flex-basis: 110px;
        font-size: 0.7rem;
    }
`

function Description() {
    return (
        <Column>
            <Header>About Me</Header>
            <Paragraph>
                Hey I'm Kary, an aspiring developer based in Vancouver, BC. I graduated from Brainstation coding bootcamp about 3 years ago. Before web development I work as a renovation contractor alongside my father. Growing up I always knew I wanted do something in tech and with my passion for building things, this eventually lead me to pursue a career in web development. After Brainstation I created a variety of different projects to explore new technologies and volunteered at multiple startups. Currently seeking for a full time position at a company where I can contribute to its growth and take my skills to the next level.
            </Paragraph>

            <Paragraph>
                If you would like to know more about me or if you want to collaborate on a project feel free to reach out to me on <strong><a href="https://www.linkedin.com/in/kary-ma/">linkedin</a></strong>.
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
                <ListItem>Jest</ListItem>
                <ListItem>React-Testing-Library</ListItem>
                <ListItem>Styled-Components</ListItem>
                <ListItem>Mongodb</ListItem>
                <ListItem>MySql</ListItem>
                <ListItem>Webpack</ListItem>
                <ListItem>Electron</ListItem>
                <ListItem>Socket.io</ListItem>
                <ListItem>Strapi</ListItem>
                <ListItem>Stripe</ListItem>
                <ListItem>Python</ListItem>
                <ListItem>Django</ListItem>
                <ListItem>Ruby</ListItem>
                <ListItem>Ruby on Rails</ListItem>
                <ListItem>AWS</ListItem>
                <ListItem>Figma</ListItem>
            </List>
        </Column>
    )
}

export default Description

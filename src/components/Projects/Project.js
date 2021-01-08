import React from 'react'
import styled from 'styled-components'

import {defaultTheme} from '../../utils/themes'

const Container = styled.div`
    display: flex;
    margin: 100px 0;
    align-items: center;

    @media only screen and (max-width: 1024px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

const ImageContainer = styled.div`
    order: ${(props) => (props.reverse ? 1 : 0)};
    flex: 1;

    @media only screen and (max-width: 1024px) {
        order: 0;
    }
`

const Image = styled.img`
    height: auto;
    width: 100%;
`

const Description = styled.div`
    margin-left: ${(props) => (props.reverse ? '0' : '50px')};
    margin-right: ${(props) => (props.reverse ? '50px' : '0')};
    flex: 2;

    @media only screen and (max-width: 1024px) {
        margin: 0;
        margin: 30px 0;
    }
`

const Header = styled.h3`
    margin: 0;
    padding: 0;
    font-weight: 600;
`

const Paragraph = styled.p`
    letter-spacing: 2px;
    line-height: 1.3;
`

const Link = styled.a`
    color: white;
    text-decoration: none;
    letter-spacing: 2px;
    font-weight: 500;
`

const Project = ({reverse, title, description, image, github}) => {
    const githubLink = github ? (
        <Link href={github} target='_blank'>
            Github
        </Link>
    ) : null

    return (
        <Container>
            <ImageContainer reverse={reverse}>
                <Image src={image} alt={`${title} screenshot`} />
            </ImageContainer>
            <Description reverse={reverse}>
                <Header>{title}</Header>

                <Paragraph reverse={reverse}>{description}</Paragraph>

                {githubLink}
            </Description>
        </Container>
    )
}

export default Project

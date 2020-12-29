import React from 'react'
import styled from 'styled-components'

import {defaultTheme} from '../../utils/themes'

const Container = styled.div`
    display: flex;
    margin: 100px 0;
    align-items: center;
    border-radius: 25px;
    opacity: 0.95;
`

const ImageContainer = styled.div`
    order: ${(props) => (props.reverse ? 1 : 0)};
    flex: 1;
`

const Image = styled.img`
    height: auto;
    width: 100%;
`

const Description = styled.div`
    margin-left: ${(props) => (props.reverse ? '0' : '50px')};
    margin-right: ${(props) => (props.reverse ? '50px' : '0')};
    flex: 2;
`

const Header = styled.h3`
    margin: 0;
    padding: 0;
`

const Paragraph = styled.p`
    letter-spacing: 2px;
`

const Project = ({reverse, title, description, image}) => {
    return (
        <Container>
            <ImageContainer reverse={reverse}>
                <Image src={image} alt='' />
            </ImageContainer>
            <Description reverse={reverse}>
                <Header>{title}</Header>

                <Paragraph reverse={reverse}>{description}</Paragraph>

                <div>Github</div>
            </Description>
        </Container>
    )
}

export default Project

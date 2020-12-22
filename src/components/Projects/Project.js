import React from 'react'
import styled from 'styled-components'

import box from '../../assets/box.jpg'

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 100px 0;
`

const Image = styled.img`
    order: ${(props) => (props.reverse ? 1 : 0)};
    height: auto;
    width: 2000px;
`

const Description = styled.div`
    margin-left: ${(props) => (props.reverse ? '0' : '50px')};
    margin-right: ${(props) => (props.reverse ? '50px' : '0')};
`

const Header = styled.h3`
    margin: 0;
    padding: 0;
    font-weight: 500;
    letter-spacing: 1px;
`

const Paragraph = styled.p`
    letter-spacing: 1px;
`

const Project = ({reverse, title, description}) => {
    return (
        <Container>
            <Image reverse={reverse} src={box} alt='' />
            <Description reverse={reverse}>
                <Header>{title}</Header>

                <Paragraph reverse={reverse}>{description}</Paragraph>

                <div>Github</div>
            </Description>
        </Container>
    )
}

export default Project

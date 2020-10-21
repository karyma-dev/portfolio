import React from 'react'
import styled from 'styled-components'

import box from '../../assets/box.jpg'

const Container = styled.div`
    display: flex;
`

const Description = styled.div`
    margin-left: 100px;
`

const Header = styled.h2`
    margin: 0;
    padding: 0;
    font-weight: 500;
    letter-spacing: 1px;
`

const Paragraph = styled.p`
    letter-spacing: 1px;
    width: 50%;
`

const Image = styled.img`
    order: ${props => props.reverse ? 1 : 0};
`

const Project = ({ reverse }) => {
    return (
        <Container>
            <Image reverse={reverse} src={box} alt="" />
            <Description>
                <Header>Project Name</Header>

                <Paragraph reverse={reverse}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora illo ut harum esse, dolores dolor commodi delectus fuga voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora illo ut harum esse, dolores dolor commodi delectus fuga voluptate!
                </Paragraph>

                <div>
                    Github
                </div>
            </Description>
        </Container>
    )
}

export default Project
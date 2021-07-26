import React, {useState} from 'react'
import styled from 'styled-components'

import references from './Data.js'

const Container = styled.div`
    padding: 0 10%;
    min-height: 100vh;
    display: flex;
    align-items: center;
`

const Ref = styled.div`
    flex: 20;
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1024px) {
        padding: 10px;
    }
`

const Quote = styled.em`
    font-size: 1.5rem;
    letter-spacing: 1px;
    line-height: 1.5em;
    text-indent: 50px;

    @media only screen and (max-width: 1024px) {
        font-size: 1rem;
    }
`

const Author = styled.p`
    margin: 30px 0 10px 0;
    font-weight: 600;
    letter-spacing: 1px;
`
const Title = styled.p`
    margin: 0;
    font-weight: 400;
    font-size: 0.8rem;
    text-align: center;
`

const Svg = styled.svg`
    flex: 0.5;
    cursor: pointer;

    @media only screen and (max-width: 1024px) {
        position: absolute;
        width: 30px;
        right: 1%;

        &:nth-of-type(1) {
            left: 1%;
        }
    }
`

function Reference() {
    const [currentValue, setCurrentValue] = useState(0)
    const [reference, setReference] = useState(references[currentValue])

    const changeReference = (i) => {
        let value = currentValue + i

        if (value === -1) {
            value = references.length - 1
            setReference(references[value])
            setCurrentValue(value)
        } else if (value > references.length - 1) {
            value = 0
            setReference(references[value])
            setCurrentValue(value)
        } else {
            setReference(references[value])
            setCurrentValue(value)
        }
    }

    return (
            <Container id='references'>
                <Svg viewBox="0 0 24 24" fill="none" stroke="currentColor" onClick={() => changeReference(-1)}>
                    <polyline points="15 18 9 12 15 6" ></polyline>
                </Svg>
                <Ref>
                    <Quote>" {reference.statement} "</Quote>
                    <Author>{reference.author}</Author>
                    <Title>{reference.title}</Title>
                </Ref>
                <Svg viewBox="0 0 24 24" fill="none" stroke="currentColor" onClick={() => changeReference(1)}>
                    <polyline points="9 18 15 12 9 6" ></polyline>
                </Svg>
            </Container>
    )
}

export default Reference

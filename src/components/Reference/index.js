import React, {useState} from 'react'
import Zoom from 'react-reveal/Zoom'
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

const Author = styled.span`
    margin: 30px;
    font-weight: 600;
    letter-spacing: 1px;
`

const Svg = styled.svg`
    flex: 0.5;
    cursor: pointer;

    &:hover {
        fill: rgba(255, 255, 255, 0.5);
    }

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
        <Zoom>
            <Container id='references'>
                <Svg viewBox='0 0 512 512' fill='white' onClick={() => changeReference(-1)}>
                    <path
                        d='M221.568,255.359L394.373,82.553c18.821-18.82,18.821-49.617,0-68.438s-51.328-18.821-68.438,0L117.2,221.14
			c-8.554,8.554-13.688,22.243-13.688,34.219c0,13.688,5.133,25.665,13.688,34.219l207.024,208.735
			c8.555,8.555,22.242,13.688,34.219,13.688c13.688,0,25.665-5.132,34.219-13.688c18.821-18.82,18.821-49.617,0-68.438
			L221.568,255.359z M370.419,472.648c-5.132,5.132-15.398,5.132-20.531,0L141.153,265.625c-3.422-3.422-5.133-6.844-5.133-10.266
			c0-3.422,1.711-6.844,5.133-10.266L349.888,38.069c1.711-3.422,5.132-5.132,10.266-5.132s6.844,1.711,10.266,5.132
			c5.132,5.132,5.132,15.398,0,20.531L183.927,243.382c-3.422,3.422-5.133,6.844-5.133,11.976c0,5.132,1.711,8.555,5.133,11.977
			l184.782,184.782C375.553,458.961,375.553,467.516,370.419,472.648z'
                    />
                </Svg>
                <Ref>
                    <Quote>{reference.statement}</Quote>
                    <Author>- {reference.author}</Author>
                </Ref>
                <Svg viewBox='0 0 512 512' fill='white' onClick={() => changeReference(1)}>
                    <path
                        d='M394.8,222.851L186.065,14.116c-18.821-18.821-51.328-18.821-68.438,0c-18.82,18.821-18.82,49.617,0,68.438
			L290.433,257.07L117.628,429.875c-18.82,18.821-18.82,49.618,0,68.438C126.183,506.868,139.87,512,151.846,512
			c11.976,0,25.665-5.132,34.219-13.688L394.8,291.288c8.555-8.555,13.688-22.242,13.688-34.219
			C408.488,245.093,403.355,231.406,394.8,222.851z M370.847,267.335L163.823,474.36c-5.133,5.132-15.398,5.132-20.531,0
			c-5.133-5.132-5.133-15.399,0-20.531l184.782-184.782c6.844-6.844,6.844-17.109,0-23.953L141.581,60.312
			c-5.133-6.844-5.133-15.399,0-20.531c3.422-3.422,6.844-5.132,10.266-5.132c3.422,0,6.844,1.71,10.266,5.132l208.735,208.735
			c3.422,3.422,5.132,6.844,5.132,10.266C374.269,260.491,372.558,265.625,370.847,267.335z'
                    />
                </Svg>
            </Container>
        </Zoom>
    )
}

export default Reference

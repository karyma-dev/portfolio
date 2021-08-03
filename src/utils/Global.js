import {createGlobalStyle} from 'styled-components'
import {normalize} from 'polished'
import {typeScale, primaryFont} from './typography'
import {defaultTheme} from './themes'

export const GlobalStyle = createGlobalStyle`
    ${normalize()}

    html {
        box-sizing: border-box;
        font-size: 16px;
        font-weight: 400;
        overflow-x: hidden;
    }

    @media (max-width: 1024px){
        html {
            font-size: 14px;
        }
    }
    
    body {
        background-color: ${defaultTheme.primaryBackgroundColor};
        color: ${defaultTheme.primaryTextColor};
    }
      
    *, *:before, *:after {
        box-sizing: inherit;
        font-family: ${primaryFont};
        letter-spacing: 1.5px;
    }

    h1 {
        font-size: ${typeScale.h1};
    }

    h2 {
        font-size: ${typeScale.h2};
    }

    h3 {
        font-size: ${typeScale.h3};
    }

    h4 {
        font-size: ${typeScale.h4};
    }
    
    h5 {
        font-size: ${typeScale.h5};
    }

    p {
        font-size: ${typeScale.p};
    }

    a {
        text-decoration: none;
        color:  ${defaultTheme.primaryTextColor};
    }
`

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import {GlobalStyle} from './utils'

ReactDOM.render(
    <>
        <App />
        <GlobalStyle />
    </>,
    document.querySelector('#root')
)

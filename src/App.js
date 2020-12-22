import React from 'react'
import {Element} from 'react-scroll'

import Nav from './components/Nav'
import Header from './components/Header'
import Projects from './components/Projects'
import About from './components/About'
import Reference from './components/Reference'
import Footer from './components/Footer'

const App = () => {
    return (
        <>
            <Nav />
            <Element name='home' />
            <Header />
            <Element name='projects' />
            <Projects />
            <Element name='about' />
            <About />
            <Element name='references' />
            <Reference />
            <Footer />
        </>
    )
}

export default App

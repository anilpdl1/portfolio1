import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Education from "./sections/Education"
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Education/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/> 
    </>
    
  )
}

export default App

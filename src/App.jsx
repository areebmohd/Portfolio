import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Expertise />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App

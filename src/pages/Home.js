import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

import About from '../components/About'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Exprience from '../components/Exprience'
import Certificates from '../components/Certificates'
import FrontEnd from '../components/FrontEnd'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className='bg-[var(--main)] h-full relative w-full'>
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Education />
        <Exprience />
        <FrontEnd />
        <Certificates />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home
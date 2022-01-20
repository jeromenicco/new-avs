import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Freeloan from './components/Freeloan'
import Includes from './components/Includes'
import News from './components/News'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SectionBreak from './components/SectionBreak'

import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-scroll'


import './App.css';
import './responsive.css'

function App() {

  const isMobile = useMediaQuery({ query: '(min-width: 1080px)' })
  const isLaptop = useMediaQuery({ query: '(min-width: 1080px)' })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1080px)' })

  return (
    <div className="app">
      <Navbar Link={Link} isLaptop={isLaptop} />
      <Hero />
      <About Link={Link} />
      <Freeloan Link={Link} />
      <SectionBreak />
      <Includes Link={Link}/>
      <News isLaptop={isLaptop} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

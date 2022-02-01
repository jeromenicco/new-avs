import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Freeloan from './components/Freeloan'
import Includes from './components/Includes'
import News from './components/News'
import Contact from './components/Contact'
import Footer from './components/Footer'
// import SectionBreak from './components/SectionBreak'

import { useMediaQuery } from 'react-responsive'
import { useSpring, animated } from 'react-spring'
import { Link } from 'react-scroll'


import './App.css';
import './responsive.css'

function App() {

  const isMobile = useMediaQuery({ query: '(max-width: 600px)' })
  const isTablet = useMediaQuery({ query: '(min-width: 650px)'})
  const isLaptop = useMediaQuery({ query: '(min-device-width: 900px)'})
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1900px)' })
  
  // console.log(isMobile)


  const fadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 800 }
  })

  return (
    <animated.div className="app" style={{...fadeIn}}>
      <Navbar Link={Link} isLaptop={isLaptop} />
      <Hero />
      <About Link={Link} />
      <Freeloan Link={Link} />
      {/* <SectionBreak /> */}
      <Includes Link={Link}/>
      <News isMobile={isMobile} isTablet={isTablet} isLaptop={isLaptop} isBigScreen={isBigScreen}/>
      <Contact />
      <Footer />
    </animated.div>
  );
}

export default App;

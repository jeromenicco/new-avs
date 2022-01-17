import React, { useEffect } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Freeloan from './components/Freeloan'
import Includes from './components/Includes'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SectionBreak from './components/SectionBreak'

import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-scroll'


import './App.css';
import './responsive.css'

function App() {
  const isLaptop = useMediaQuery({ query: '(min-width: 850px)' })


  // const content = document.querySelectorAll('.item-intersection') 

  // const observer = new IntersectionObserver(
  //   entries => {
  //     entries.forEach(entry => {
  //       console.log(entries)
  //       entry.target.classList.toggle('.show', entry.isIntersecting)
  //     })
  //   },
  //   {
  //     threshold: 1,
  //   }
  // )

  //   content.forEach(item => observer.observe(item))


  
  return (
    <div className="app">
      <Navbar Link={Link} isLaptop={isLaptop} />
      <Hero />
      <About Link={Link} />
      <Freeloan Link={Link} />
      <SectionBreak />
      <Includes Link={Link}/>
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

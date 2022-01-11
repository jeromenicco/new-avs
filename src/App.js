import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Freeloan from './components/Freeloan'
import Includes from './components/Includes'
import Contact from './components/Contact'
import Footer from './components/Footer'
// import WhatIDo from './components/WhatIDo';
// import Work from './components/Work';
// import Contact from './components/Contact';

import { Link } from 'react-scroll'

import './App.css';
import './responsive.css'

function App() {
  
  return (
    <div className="app">
      <Navbar Link={Link} />
      <Hero />
      <About Link={Link} />
      <Freeloan />
      <Includes Link={Link}/>
      <Contact />
      <Footer />
      {/* <WhatIDo /> */}
      {/* <Work /> */}
      {/* <Contact Link={Link} /> */}

    </div>
  );
}

export default App;

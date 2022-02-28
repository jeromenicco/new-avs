import React from 'react'
import { Parallax } from 'react-parallax'
import { useSpring, animated } from 'react-spring'


import './Hero.css'

function Hero() {
    const fadeInHeroText = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 1000,
        config: { duration: 800 }
      })
    return (
        <div className='hero-container' id='hero-section'>
            <div className='dark-filter-hero' />
            <animated.div style={{...fadeInHeroText}} className='component-content hero-content'>
                <Parallax
                    style={{ overflow: 'visible', position: 'relative', height: '300px' }}
                    strength={100}
                    renderLayer={(percentage) => (
                        <div style={{
                            position: "absolute",
                            marginTop: "5%",
                            width: '100%',
                            marginTop: 100 * percentage,
                        }}>
                            <p className='parallax-text'>
                            The complete managed vending service for your business.<br />
                            <span className='hero-sub-p'>For businesses with more than 75 staff,</span><br />
                            <span className='hero-sub-span'>AVS offer a free loan vending option.</span>
                            </p>
                        </div>
                    )}
                >
                </Parallax>

            </animated.div>
        </div>
    )
}

export default Hero

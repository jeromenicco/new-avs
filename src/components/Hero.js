import React from 'react'
import { Parallax } from 'react-parallax'

import './Hero.css'

function Hero() {
    return (
        <div className='hero-container' id='hero-section'>
            <div className='dark-filter-hero' />
            <div className='component-content hero-content'>
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

            </div>
        </div>
    )
}

export default Hero

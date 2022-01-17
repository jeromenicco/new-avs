import React from 'react'
import { Parallax } from 'react-parallax'

import './Hero.css'

function Hero() {
    return (
        <div className='hero-container' id='hero-section'>
            <div className='hero-filter'/>
            <div className='component-content hero-content'>
                <Parallax
                style={{ overflow: 'visible', position: 'relative', height: '300px'}}
                    strength={100}
                    renderLayer={(percentage) => (
                        <div style={{
                            position: "absolute",
                            marginTop: "5%",
                            width: '100%',
                            marginTop: 100 * percentage,
                        }}>
                            <p className='parallax-text'>
                                AVS has been supplying and managing vending machine services to businesses across East Anglia for over 30 years, and nationally for the last 10 years.
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

import React from 'react'

import './About.css'



function About({ Link }) {
    return (
        <div className='about-container' id='about-section'>
            <div className='component-content about-content'>
                <div>
                    <p className='paragraph-title'>About</p>
                    <p className='paragraph-text'>Using our experience, we match the perfect machines to your business needs, finding a solution that suits your requirements and your budget while delivering great tasting beverages and snacks for your staff and your customers.</p>
                </div>

                <div className='loan-button-container'>
                    <Link
                        activeClass="active-nav-link"
                        to='contact-section'
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={800}
                    // className='nav-item'
                    >
                        <button>Contact Us</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default About
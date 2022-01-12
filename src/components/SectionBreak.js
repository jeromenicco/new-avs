import React from 'react'

import image1 from '../assets/coffee-image2.jpeg'

import './SectionBreak.css'

import { Parallax } from 'react-parallax'

function SectionBreak() {
    return (
        <Parallax bgImage={image1} strength={500}>
            <div className='sectionBreak-container'>
                <div className='component-content sectionBreak-content'>
                </div>
            </div>
        </Parallax>
    )
}

export default SectionBreak

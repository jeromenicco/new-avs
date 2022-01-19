import React from 'react'

import { Parallax } from 'react-parallax'


// import Includes from './Includes'

import './Freeloan.css'

function Freeloan({ Link }) {
    return (
        <>
            <div className='freeloan-container' id='freeloan-section'>
                <div className='component-content freeloan-content'>
                    <p className='paragraph-title freeloan-title'>
                        Free loan vending
                    </p>
                    <Parallax
                        style={{ overflow: 'visible', position: 'relative' }}
                        strength={100}
                        renderLayer={(percentage) => (
                            <div style={{
                                // position: "absolute",
                                marginTop: "5%",
                                width: '100%',
                                marginTop: 100 * percentage,
                            }}>
                                <p className='paragraph-text'>For businesses with more than 75 staff,<br /><span>AVS offer a free loan vending option.</span></p>
                                <p className='paragraph-text'>AVS conducts a site visit to establish which machines are suitable, assessing the location and access.<br /><br />
                                    Once our machines are installed <span>we supply all the products and ingredients</span>, making regular visits to fill, clean and maintain the machines.</p>
                                <p className='paragraph-text'>This type of managed vending service is at <span>absolutley no cost to the customer</span> and offers your business a great way to keep your staff and your ‘pocket’ happy!</p>
                                <br />
                                <p className='paragraph-text'><span>* Machines remain the property of AVS</span></p>
                            </div>
                        )}
                    >
                    </Parallax>
                    {/* <p className='paragraph-title freeloan-title'>Free loan vending</p> */}


                    {/* <Includes Link={Link} /> */}
                </div>
            </div>
            <div className='freeloan-filler'/>
        </>
    )
}

export default Freeloan

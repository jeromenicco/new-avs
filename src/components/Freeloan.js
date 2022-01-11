import React from 'react'

import './Freeloan.css'

function Freeloan() {
    return (
        <div className='freeloan-container' id='freeloan-section'>
            <div className='component-content freeloan-content'>
                <div>
                    {/* <p className='paragraph-title freeloan-title'>Free loan vending</p> */}
                    <p className='paragraph-title freeloan-title'>The complete managed vending service for your business.</p>
                    <p className='paragraph-text'>For businesses with more than 75 staff,<br/><span>AVS offer a free loan vending option.</span></p>
                    <p className='paragraph-text'>AVS conducts a site visit to establish which machines are suitable, assessing the location and access.<br/><br/>
                        Once our machines are installed <span>we supply all the products and ingredients</span>, making regular visits to fill, clean and maintain the machines.</p>
                    <p className='paragraph-text'>This type of managed vending service is at <span>absolutley no cost to the customer</span> and offers your business a great way to keep your staff and your ‘pocket’ happy!</p>
                    <br/>
                    <p className='paragraph-text'>* Machines remain the property of AVS</p>
                </div>
            </div>
        </div>
    )
}

export default Freeloan

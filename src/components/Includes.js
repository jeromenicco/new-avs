import React from 'react'
import { MdDoneOutline } from 'react-icons/md';

import icon1 from '../assets/noun-coffee-machine1.png'

import './Includes.css'

const includesItems = [
    {
        text: 'Free-standing and counter top hot drinks machines',
        image: icon1,
    },
    {
        text: 'Top of the Range Coffee Machines',
    },
    {
        text: 'Cold drinks machines',
    },
    {
        text: 'Fresh Food Machines (sandwiches, pies, fruit)',
    },
    {
        text: 'Water Coolers',
    },

]

function Includes({ Link }) {
    return (
        <div className='includes-container'>
            <div className='component-content includes-content'>
                <p className='paragraph-title title-includes'>Our range of machines includes</p>
                <div className='includes-items-container'>
                    {
                        includesItems.map((item, index) => (
                            <div className='inner'>
                                <div className='circle-div'>
                                    {/* <img src={item.image} alt={index} /> */}
                                </div>
                                <div className='item-container-text'>
                                    <p className='icon-valid'><MdDoneOutline /></p>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='component-content includes-text-content'>
                    <p className='paragraph-text'>All our machines are available to <span>buy, rent or lease.</span><br /><br />
                        AVS will handle everything for you…
                        from planning and installing, to restocking and servicing.
                        With our flexible, efficient and friendly service, we will make sure you, your staff, and your customers are happy.</p>
                    <div className='loan-button-container'>
                        <Link
                            activeClass="active-nav-link"
                            to='freeloan-section'
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={800}
                        // className='nav-item'
                        >
                            <button>
                                Free Loan Vending

                            </button>
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Includes

import React from 'react'
import { MdDoneOutline } from 'react-icons/md';
import { Parallax } from 'react-parallax'


// import icon2 from '../assets/avs-icon2.png'
// import icon3 from '../assets/avs-icon3.png'
// import icon4 from '../assets/avs-icon4.png'
// import icon5 from '../assets/avs-icon5.png'
// import icon6 from '../assets/avs-icon6.png'

import './Includes.css'

const includesItems = [
    {
        text: 'Coffee & hot drinks machines',
        // image: icon2,
    },
    {
        text: 'Cold drinks machines',
        // image: icon3,
    },
    {
        text: 'Snacks machines',
        // image: icon4,
    },
    {
        text: 'Fresh Food Machines',
        // image: icon5,
    },


]

function Includes({ Link }) {
    return (
        <div className='includes-container'>
            <div className='dark-filter-includes' />
            <div className='component-content includes-content'>
                <p className='paragraph-title title-includes'>Our range of machines includes</p>
                <div className='includes-items-container'>
                    {
                        includesItems.map((item, index) => (
                            <div key={index} className='inner'>
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
                                <p className='paragraph-text'>All our machines are available to <span>buy, rent or lease.</span><br /><br />
                                    AVS will handle everything for you…
                                    from planning and installing, to restocking and servicing.<br /><br />
                                    With our flexible, efficient and friendly service, we will make sure you, your staff, and your customers are happy.</p>
                            </div>
                        )}
                    >
                    </Parallax>

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

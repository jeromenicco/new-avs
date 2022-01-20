import React from 'react'

import { TiSocialFacebook, TiSocialInstagram } from 'react-icons/ti'

import './Footer.css'

function Footer() {
    return (
        <>
            <div className='footer-container'>
                <div className='footer-content'>
                    <div className='company-info'>
                        <p>Area Vending Services<br />
                            Unit 1<br />
                            Old Shields Farm<br />
                            Waterhouse LaneArdleigh Nr<br />
                            Colchester Essex C07 7NE</p>
                    </div>
                    <div className='social-media-container'>
                        <TiSocialFacebook size={30} />
                        <TiSocialInstagram size={30} />
                    </div>
                </div>
            </div>
            <div className='footer-filler' />
        </>
    )
}

export default Footer

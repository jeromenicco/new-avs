import React from 'react'

import './Contact.css'

function Contact() {
    return (
        <div className='contact-container' id='contact-section'>
            <div className='component-content contact-content'>
                <div className='contact-text-container'>
                    <p className='paragraph-title contact-title'>Contact us <span className='paragraph-text'>now for more information or to arrange for one of our team to visit you.</span></p>
                    <p className='paragraph-text contact-paragraph-text'>Feel free to reach out by email or phone 07850 393 592.</p>
                </div>
                <div className='contact-buttons-container'>
                    <button>
                        <a href='mailto:ronparkes3@gmail.com'>
                            E-mail
                        </a>
                    </button>
                    <button>
                        <a href="tel:+447850393592">
                            Phone
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact

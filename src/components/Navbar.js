import React, { useState, useEffect } from 'react'

import './Navbar.css'

const navItems = [
    {
        item: 'About',
        path: 'hero-section',
        scrollOffset: -80,
    },
    {
        item: 'Free Loan',
        path: 'freeloan-section',
        scrollOffset: -50,
    },
    // {
    //     item: 'Blog',
    //     path: 'blog'
    // },
    {
        item: 'Contact',
        path: 'contact-section',
        scrollOffset: -20
    },
]

function Navbar({ Link }) {

    const [scrollDown, setScrollDown] = useState(false)
    const [opacity, setOpactity] = useState(false)

    let lastScrollY = window.scrollY

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400)
                // window.innerWidth < 850 &&
                setScrollDown(true)
            if (window.scrollY === 0)
                setScrollDown(false)
            if (window.screenY > 50)
                setOpactity(true)
        })

        return () => {
            lastScrollY = window.scrollY
        }
    }, [])


    return (
        <div className='nav-container'>
            <nav className={!scrollDown ? 'navbar' : 'navbar-hidden'}>
                {/* <nav className='navbar'> */}
                <Link
                    to='hero-section'
                    spy={true}
                    smooth={true}
                    // offset={-80}
                    duration={800}
                    className={ !scrollDown ? 'logo-container' : 'logo-container-hidden'}
                >
                    <p className='logo-words'><span className='logo-letter'>A</span>rea</p>
                    <p className='logo-words'><span className='logo-letter'>V</span>ending</p>
                    <p className='logo-words'><span className='logo-letter'>S</span>ervices</p>
                </Link>

                <div className={!scrollDown ? 'phone-menu-container' : 'phone-menu-container-hidden'}>
                    <a href="tel:+447850393592" className={!scrollDown ? 'phone-number' : 'phone-number-hidden'}><p>07850 393 592</p></a>
                    {/* <p className='menu-button'>Menu</p> */}
                    <div className={!scrollDown ? 'menu-items-container' : 'menu-items-container-hidden'}>
                        {
                            navItems.map((item, index) =>
                                <Link
                                    activeClass={!scrollDown ? "active-nav-link" : 'active-nav-link-hidden'}
                                    to={item.path}
                                    spy={true}
                                    smooth={true}
                                    offset={item.scrollOffset}
                                    duration={800}

                                >
                                    <div className={!scrollDown ? 'menu-items-container' : 'menu-items-container-hidden'}>
                                        <p>
                                            {item.item}
                                        </p>

                                    </div>
                                </Link>
                            )

                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
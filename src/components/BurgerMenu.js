import React from 'react'
import { useSpring, animated } from 'react-spring'

import './BurgerMenu.css'

function BurgerMenu({ navItems, Link, dispatch, setBurgerIsVisible }) {

    const slideBurger = useSpring({ to: { transform: 'translate(0%)' }, from: { transform: 'translate(100%)' } })

    return (
        <animated.div
            className='burger-container'
            style={{ ...slideBurger }}
        >
            <div className='burger-items-wrapper'>
                {
                    navItems.map((item, index) =>
                        <Link
                            key={index}
                            className='burger-item'
                            to={item.path}
                            spy={true}
                            smooth={true}
                            offset={item.scrollOffset}
                            duration={800}
                        >
                            <p onClick={() => dispatch(setBurgerIsVisible(false))}>
                                {item.item}
                            </p>
                        </Link>
                    )
                }
            </div>
        </animated.div>
    )
}

export default BurgerMenu
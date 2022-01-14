import React from 'react'
import { useSpring, animated } from 'react-spring'

import './BurgerMenu.css'

function BurgerMenu(navItems) {

    // const slideBurger = useSpring({ to: { transform: 'translate(0%)' }, from: { transform: 'translate(100%)' } })


    return (
        <animated.div className='burger'
            // style={{ ...slideBurger }}
        >
            {
                navItems.navItems.map((item, index) => <p key={index}>{item.item}</p>)
            }
        </animated.div>
    )
}

export default BurgerMenu

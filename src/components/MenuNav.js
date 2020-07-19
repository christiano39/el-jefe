import React, { useState, useEffect } from 'react';

const MenuNav = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 130) {
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    
    return (
        <nav id='menu-nav' className={scrolled ? 'sticky' : ''}>
            <a href='#breakfast-burritos'>Breakfast Burritos</a>
            <a href='#omelette'>Omelettes</a>
            <a href='#quesadillas'>Quesadillas</a>
            <a href='#lunch-dinner-burritos'>Lunch and Dinner Burritos</a>
            <a href='#tacos'>Tacos</a>
            <a href='#chimichanga-and-burgers'>Chimichangas and Burgers</a>
            <a href='#combos'>Combo Meals</a>
            <a href='#sides'>Sides</a>
            <a href='#beverages'>Beverages</a>
        </nav>
    )
}

export default MenuNav;
import React from 'react';

const MenuNav = props => {
    return (
        <nav id='menu-nav' className={props.scrolled ? 'sticky' : ''}>
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
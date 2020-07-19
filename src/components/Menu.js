import React, { useEffect, useState } from 'react';
import menu from '../data/menu';
import FoodItem from './FoodItem';
import MenuNav from './MenuNav';

const Menu = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        const menuNav = document.getElementById('menu-nav');
        if(offset > menuNav.offsetHeight) {
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    }
    
    useEffect(() => {
        document.title = "El Jefe's | Menu";
        window.addEventListener('scroll', handleScroll);
        return () => {
            document.title = "El Jefe's";
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <div className='menu-container'>
            <h1>Our Menu</h1>
            <MenuNav scrolled={scrolled}/>
            <section id='menu'>
                <div>
                    <span id='breakfast-burritos'></span>
                    <h2 className='main-header'>Breakfast Burritos</h2>
                    <div className='item-list'>
                        {menu.breakfastBurritos.map(food => {
                            return <FoodItem key={food.name} item={food} />
                        })}
                    </div>
                </div>
                <div>
                    <span id='omelette'></span>
                    <h2 className='main-header'>Omelettes</h2>
                    <div className='item-list'>
                        {menu.omelet.map(food => {
                            return <FoodItem key={food.name} item={food} />
                        })}
                    </div>
                </div>
                <div>
                    <span id='quesadillas'></span>
                    <h2 className='main-header'>Quesadillas</h2>
                    <div className='item-list'>
                        {menu.quesadillas.map(food => {
                            return <FoodItem key={food.name} item={food} />
                        })}
                    </div>
                </div>
                <div>
                    <span id='lunch-dinner-burritos'></span>
                    <h2 className='main-header'>Lunch and Dinner Burritos</h2>
                    <div className='item-list'>
                        {menu.lunchDinnerBurritos.map(food => {
                            return <FoodItem key={food.name} item={food} />
                        })}
                    </div>
                </div>
                <div>
                    <span id='tacos'></span>
                    <h2 className='main-header'>Tacos</h2>
                    <div className='item-list'>
                        {menu.tacos.map(food => {
                            return <FoodItem key={food.name} item={food} />
                        })}
                    </div>
                </div>
                <div>
                    <span id='chimichanga-and-burgers'></span>
                    <h2 className='main-header'>Chimichangas and Burgers</h2>
                    <div className='item-list'>
                        {menu.chimichangaAndBurgers.map(food => {
                            return <FoodItem key={food.name} item={food} />
                        })}
                    </div>
                </div>
                <div>
                    <span id='combos'></span>
                    <h2 className='main-header'>Combo Meals</h2>
                    <div className='item-list'>
                        {menu.comboMeals.map(food => {
                            return <FoodItem key={food.name} item={food} />
                        })}
                    </div>
                </div>
                <div>
                    <span id='sides'></span>
                    <h2 className='main-header'>Sides</h2>
                    <div className='item-list'>
                        {menu.sides.map(food => {
                            return <FoodItem key={food.name} item={food} />
                        })}
                    </div>
                </div>
                <div>
                    <span id='beverages'></span>
                    <h2 className='main-header'>Beverages</h2>
                    <div className='item-list'>
                        {menu.beverages.map(food => {
                            return <FoodItem key={food.name} item={food} />
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Menu;
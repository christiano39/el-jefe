import React from 'react';
import menu from '../data/menu';
import FoodItem from './FoodItem';
import MenuNav from './MenuNav';

const Menu = props => {
    return (
        <div className='menu-container'>
            <h1>Our Menu</h1>
            <MenuNav />
            <section id='menu'>
                <div id='breakfast-burritos'>
                    <h2 className='main-header'>Breakfast Burritos</h2>
                    <div className='item-list'>
                        {menu.breakfastBurritos.map(food => {
                            return <FoodItem key={food.name} item={food} />
                        })}
                    </div>
                </div>
                <div id='omelette'>
                    <h2 className='main-header'>Omelettes</h2>
                    <div className='item-list'>
                        {menu.omelet.map(food => {
                            return <FoodItem key={food.name} item={food} />
                        })}
                    </div>
                </div>
                <div id='quesadillas'>
                    <h2 className='main-header'>Quesadillas</h2>
                    <div className='item-list'>
                        {menu.quesadillas.map(food => {
                            return <FoodItem key={food.name} item={food} />
                        })}
                    </div>
                </div>
                <div id='lunch-dinner-burritos'>
                    <h2 className='main-header'>Lunch and Dinner Burritos</h2>
                    <div className='item-list'>
                        {menu.lunchDinnerBurritos.map(food => {
                            return <FoodItem key={food.name} item={food} />
                        })}
                    </div>
                </div>
                <div id='tacos'>
                    <h2 className='main-header'>Tacos</h2>
                    <div className='item-list'>
                        {menu.tacos.map(food => {
                            return <FoodItem key={food.name} item={food} />
                        })}
                    </div>
                </div>
                <div id='chimichanga-and-burgers'>
                    <h2 className='main-header'>Chimichangas and Burgers</h2>
                    <div className='item-list'>
                        {menu.chimichangaAndBurgers.map(food => {
                            return <FoodItem key={food.name} item={food} />
                        })}
                    </div>
                </div>
                <div id='combos'>
                    <h2 className='main-header'>Combo Meals</h2>
                    <div className='item-list'>
                        {menu.comboMeals.map(food => {
                            return <FoodItem key={food.name} item={food} />
                        })}
                    </div>
                </div>
                <div id='sides'>
                    <h2 className='main-header'>Sides</h2>
                    <div className='item-list'>
                        {menu.sides.map(food => {
                            return <FoodItem key={food.name} item={food} />
                        })}
                    </div>
                </div>
                <div id='beverages'>
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
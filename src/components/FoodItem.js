import React from 'react';

const FoodItem = props => {
    return (
        <div className='food-item'>
            <p className='food-name'>{props.item.name}</p>
            {props.item.description && <p className='food-desc'>{props.item.description}</p>}
            <p className='food-price'>${props.item.price}</p>
        </div>
    )
}

export default FoodItem;
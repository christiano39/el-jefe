import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const Navigation = () => {
    const history = useHistory();
    const goHome = () => {
        history.push('/');
    }
    
    return (
        <div className='nav-container'>
            <div className='logo' onClick={goHome}>
                <h2>El Jefe</h2>
                <span>Tacos and Burrritos</span>
            </div>
            <nav id='main-nav'>
                <NavLink exact to='/' activeClassName='nav-active'>Home</NavLink>
                <NavLink to='/menu' activeClassName='nav-active'>Menu</NavLink>
                <NavLink to='/locations' activeClassName='nav-active'>Locations</NavLink>
            </nav>
        </div>
    )
}

export default Navigation;
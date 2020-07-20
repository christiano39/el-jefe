import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const Navigation = () => {
    const history = useHistory();
    const goHome = () => {
        history.push('/');
    }
    
    return (
        <div className='nav-container'>
            <h2 onClick={goHome}>El Jefe</h2>
            <nav id='main-nav'>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/menu'>Menu</NavLink>
                <NavLink to='/locations'>Locations</NavLink>
            </nav>
        </div>
    )
}

export default Navigation;
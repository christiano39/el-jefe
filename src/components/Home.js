import React, { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        document.title = "El Jefe | Home";
        return () => {
            document.title = "El Jefe"
        }
    }, [])
    
    return (
        <section id='homepage'>
            <h1>Welcome to El Jefe!</h1>
        </section>
    )
}

export default Home;
import React, { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        document.title = "El Jefe's | Home";
        return () => {
            document.title = "El Jefe's"
        }
    }, [])
    
    return (
        <section id='homepage'>
            <h1>Home</h1>
        </section>
    )
}

export default Home;
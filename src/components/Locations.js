import React, { useEffect } from 'react';
import { locations } from '../data/locations';

import Location from './Location';

const Locations = () => {
    useEffect(() => {
        document.title = "El Jefe | Locations";
        return () => {
            document.title = "El Jefe";
        }
    }, [])
    
    return (
        <section id='locations'>
            <h1>Our Locations</h1>
            {
                locations.map(location => {
                    return <Location key={location.address} location={location} />
                })
            }
        </section>
    )
}

export default Locations;
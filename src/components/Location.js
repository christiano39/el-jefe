import React from 'react';

const Location = props => {
    const { location } = props;
    return (
        <div className='location'>
            <address>
                {location.address}<br/>
                {`${location.city}, ${location.state} ${location.zip}`}<br/>
                {`(${location.phone.slice(0, 3)}) ${location.phone.slice(3, 6)}-${location.phone.slice(6, 10)}`}
            </address>
            <div className='hours'>
                <h3>Hours</h3>
                <ul>
                    {
                        location.hours.map(item => {
                            return item.close ?
                            <li key={item.day}>{`${item.day}: ${item.open}-${item.close}`}</li>
                            : <li key={item.day}>{`${item.day}: ${item.open}`}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Location;
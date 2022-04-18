import React from 'react';
import img from '../../images/sleeping.jpg'

const NotFound = () => {
    return (
        <div>
            <h1>404 Not Found</h1>
            <img style={{ height: "500px" }} className='w-75' src={img} alt="" />
        </div>

    );
};

export default NotFound;
import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Service.css'

const Service = ({ service }) => {
    const { id, picture, name, price, about } = service;
    const navigate = useNavigate();
    const handleNavigateToDescription = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='card-container'>
            <div className='service-container'>
                <img src={picture} alt="" />
                <h2>Name:{name}</h2>
                <h4>Price:{price}</h4>
                <p>About:{about}</p>
                <button onClick={() => handleNavigateToDescription(id)}>Book Now</button>
            </div>
        </div>
    );
};

export default Service;

import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDescription = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h1>Welcome to My exciting service:{serviceId}</h1>
            <div className="text-center">
                <Link to='/checkout'>
                    <Button variant="success">Proceed CheckOut</Button>{' '}
                </Link>
            </div>
        </div>
    );
};

export default ServiceDescription;
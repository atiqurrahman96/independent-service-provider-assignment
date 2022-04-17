import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getUTCFullYear();
    return (
        <div>
            <h1>Copyright {year}</h1>
        </div>
    );
};

export default Footer;
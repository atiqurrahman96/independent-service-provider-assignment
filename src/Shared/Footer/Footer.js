import React from 'react';
import './Footer.css'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='footer-container'>
            <div className="container d-flex justify-content-between align-items-center mt-5">
                <div className="row">
                    <a href="">Home</a>
                    <a href="">Docs</a>
                    <a href="">Examples</a>
                    <a href="">Blog</a>
                </div>
                <div className="row">
                    <a href="">Address</a>
                    <a href="">Issues</a>
                    <a href="">Discussions</a>
                    <a href="">Help</a>
                </div>
            </div>
            <p id='copyright'>Copyright@{year}</p>
        </div>
    );
};

export default Footer;
import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.png'
import banner3 from '../../../images/banner/banner3.png'

const Banner = () => {
    return (
        <div>
            <div className='m-2'>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;
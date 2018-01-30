import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

const HeaderSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 7000
    };

    const renderSlides = () => {
        return [0,1,2,3,4,5,6,7].map((el, index) => {
            return (
                <div key={index}>
                    <div className='img-container' style={{ backgroundImage: `url('./img/${index}.jpg')` }}></div>
                </div>
            );
        });
    }

    return (
        <div className='slider-container'>
            <Slider className='slider' {...settings}>
                { renderSlides() }
            </Slider>
        </div>
    );
}
export default HeaderSlider;

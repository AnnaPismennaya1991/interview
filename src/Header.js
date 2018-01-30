import React from 'react';

import SocialLinks from './components/socialLinks/SocialLinks';
import Slider from './components/slider/Slider';
import Menu from './components/menu/Menu';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <SocialLinks/>
            <Slider />
            <Menu />
        </div>
    );
}

export default Header;

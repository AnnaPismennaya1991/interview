import React from 'react';

import SocialLinks from '../socialLinks/SocialLinks';
import Slider from '../slider/Slider';
import Menu from '../menu/Menu';
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

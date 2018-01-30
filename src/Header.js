import React from 'react';

import Slider from './components/slider/Slider';
import Menu from './components/menu/Menu';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <Slider />
            <Menu />
        </div>
    );
}

export default Header;

import React from 'react';

import './SocialLinks.css';
import FacebookSvg from './FacebookSvg';
import InstagramSvg from './InstagramSvg';

const SocialLinks = () => {
    return (
        <div className='social-links'>
            <a href='https://www.facebook.com/pismennaanna' target='_blank' rel="noopener noreferrer"><FacebookSvg/></a>
            <a href='https://www.instagram.com/pismennaya_anna/' target='_blank' rel="noopener noreferrer"><InstagramSvg/></a>
        </div>
    );
}
export default SocialLinks;

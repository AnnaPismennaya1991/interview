import React, { Component } from 'react';

import { Radio } from 'antd';
import 'antd/lib/radio/style/index.css';
import './Radio.css';

const RadioGroup = () => {
    return (
        <div>
            <div className='column-checkbox'><span><Radio /></span></div>
            <div className='column-checkbox'><span><Radio /></span></div>
            <div className='column-checkbox'><span><Radio /></span></div>
        </div>
    );
}

export default RadioGroup;

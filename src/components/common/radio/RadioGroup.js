import React, { Component } from 'react';

import { Radio } from 'antd';
import 'antd/lib/radio/style/index.css';
import './RadioGroup.css';

const RadioGroup = Radio.Group;

const RadioGroupComponent = (props) => {
    return (
        <div className='radio-group'>
            <RadioGroup name={ props.name }>
                <div><Radio value='да'></Radio></div>
                <div><Radio value='время от времени'></Radio></div>
                <div><Radio value='нет'></Radio></div>
            </RadioGroup>
        </div>
    );
}

export default RadioGroupComponent;

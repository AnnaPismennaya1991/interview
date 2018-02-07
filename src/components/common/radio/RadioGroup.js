import React, { Component } from 'react';

import { Radio } from 'antd';
import 'antd/lib/radio/style/index.css';
import './RadioGroup.css';

const RadioGroup = Radio.Group;

const RadioGroupComponent = (props) => {
    return (
        <div className='radio-group'>
            <RadioGroup name={ props.name }>
                <Radio value='да'></Radio>
                <Radio value='время от времени'></Radio>
                <Radio value='нет'></Radio>
            </RadioGroup>
        </div>
    );
}

export default RadioGroupComponent;

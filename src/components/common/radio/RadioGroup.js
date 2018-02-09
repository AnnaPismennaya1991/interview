import React from 'react';

import { Radio } from 'antd';
import 'antd/lib/radio/style/index.css';
import './RadioGroup.css';

const RadioGroup = Radio.Group;

const RadioGroupComponent = (props) => {
    return (
        <div className='radio-group'>
            <RadioGroup name={ props.name } onChange={(value) => props.onSelect(value)}>
                <div onMouseOver={() => props.onHover(1)}>
                    <Radio value='1'></Radio>
                </div>
                <div onMouseOver={() => props.onHover(2)}>
                    <Radio value='2'></Radio>
                </div>
                <div onMouseOver={() => props.onHover(3)}>
                    <Radio value='3'></Radio>
                </div>
            </RadioGroup>
        </div>
    );
}

export default RadioGroupComponent;

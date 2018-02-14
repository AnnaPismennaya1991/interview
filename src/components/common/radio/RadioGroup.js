// radio-group - поле всех радио точек
import React from 'react';

import { Radio } from 'antd';
import 'antd/lib/radio/style/index.css';
import './RadioGroup.css';

const { Group } = Radio;

const RadioGroup = (props) => {
    return (
        <div className='radio-group'>
            <Group name={ props.name } onChange={(event) => props.onSelect(event.target.value)}>
                <div onMouseOver={() => props.onHover(1)}>
                    <Radio value='1'></Radio>
                </div>
                <div onMouseOver={() => props.onHover(2)}>
                    <Radio value='2'></Radio>
                </div>
                <div onMouseOver={() => props.onHover(3)}>
                    <Radio value='3'></Radio>
                </div>
            </Group>
        </div>
    );
}

export default RadioGroup;

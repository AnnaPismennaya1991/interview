// вопросы с вертикальным расположением кнопок radio
import React from 'react';

import { Radio } from 'antd';
import 'antd/lib/radio/style/index.css';
import './RadioGroupWithLables.css';

const RadioGroupWithLables = Radio.GroupWithLables;

// quantity - количество
const getRadios = (quantity, onHover) => {
    const radios = [];

    for (var i = 0; i < quantity; i++) {
        radios.push(
            <div onMouseOver={() => onHover(i + 1)}>
                <Radio value={i + 1}></Radio>
            </div>
        )
    }

    return radios;
}

const RadioGroupWithLablesComponent = (props) => {
    return (
        <div className='radio-group-with-lables'>
            <RadioGroupWithLables name={ props.name } onChange={(value) => props.onSelect(value)}>
                { getRadios(props.quantity, props.onHover) }
            </RadioGroupWithLables>
        </div>
    );
}

export default RadioGroupWithLablesComponent;

// вопросы с вертикальным расположением кнопок radio
import React from 'react';
import { Radio } from 'antd';
import 'antd/lib/radio/style/index.css';

import QUESTIONS from './constants';
import './RadioGroupWithLables.css';

const { Group } = Radio;

const getRadios = (items) => {
    return items.map((item, index) => {
        return <Radio value={index + 1} key={index}>{ item.name }</Radio>
    });
};

const RadioGroupWithLablesComponent = (props) => {
    const question = QUESTIONS[props.id];

    return (
        <div className='radio-group-with-lables'>
            <div className='title_name'>{ question.title }</div>
            <Group name={ props.name }>
                { getRadios(question.items) }
            </Group>
        </div>
    );
}

export default RadioGroupWithLablesComponent;

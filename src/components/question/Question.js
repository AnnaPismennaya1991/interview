// контейнер - вопрос и варианты ответа в виде выпадающего списка или радио-кнопок
import React, { Component } from 'react';

import Select from '../common/select/Select';
import RadioTable from '../common/radioTable/RadioTable';
import Checkbox from '../common/checkbox/Checkbox';

import TITLES from './Titles';
import './Titles.css';
import selectData from '../common/select/constants';
import './Question.css';

const INPUTS = {
    select: Select,
    radioTable: RadioTable,
    checkbox: Checkbox
};

class Question extends Component {
    render() {

        const QuestionComponent = INPUTS[this.props.type];

        return (
            <div className='question-container'>
                <h3>{ TITLES[this.props.id] }</h3>
                <QuestionComponent items={selectData[this.props.id]} />
            </div>
        );
    }
}

export default Question;

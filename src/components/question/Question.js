import React, { Component } from 'react';

import Select from '../common/select/Select';
import CheckboxTable from '../common/checkboxTable/CheckboxTable';

import TITLES from './Titles';
import './Titles.css';
import selectData from '../common/select/constants';

const INPUTS = {
    select: Select,
    checkboxTable: CheckboxTable
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

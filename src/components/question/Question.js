import React, { Component } from 'react';

import Select from '../common/select/Select';

// import Checkbox from '../common/checkboxTable/Checkbox';

import TITLES from './Titles';
import './Titles.css';

const INPUTS = {
    select: Select,
    // checkbox: Checkbox
};


class Question extends Component {
    render() {
        const QuestionComponent = INPUTS[this.props.type];

        return (
            <div className='question-container'>
                <h3>{ TITLES[this.props.id] }</h3>
                <QuestionComponent />
            </div>
        );
    }
}

export default Question;

import React, { Component } from 'react';

import Select from '../common/select/Select';
// import Checkbox from '../common/checkbox/Checkbox';

import TITLES from './titles';

const INPUTS = {
    select: Select,
    // checkbox: Checkbox
};


class Question extends Component {
    render() {
        const QuestionComponent = INPUTS[this.props.type];

        return (
            <div>
                <h3>{ TITLES[this.props.id] }</h3>
                <QuestionComponent />
            </div>
        );
    }
}

export default Question;

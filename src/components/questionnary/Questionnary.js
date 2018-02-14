// весь опросник с названием и вопросами
import React, { Component } from 'react';

import Question from '../question/Question';
import Prolog from '../common/prolog/Prolog'

class Questionnary extends Component {
    render() {
        return (
            <div>
                <Prolog id='questionnaryEating' />
                <Question type='select' id='quantityEating' />
                <Question type='radioTable' id='differentQuestions' />
                <Question type='radioGroupWithLables' id='0' />
                <Question type='radioGroupWithLables' id='1' />
                <Question type='radioGroupWithLables' id='2' />
                <Question type='radioGroupWithLables' id='3' />
                <Question type='radioGroupWithLables' id='4' />
                <Question type='radioGroupWithLables' id='5' />
                <Question type='radioGroupWithLables' id='6' />
                <Question type='radioGroupWithLables' id='7' />
            </div>
        );
    }
}

export default Questionnary;

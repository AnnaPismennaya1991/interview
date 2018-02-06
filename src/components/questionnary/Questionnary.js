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
                {/* <Question type='checkbox' id={1} /> */}
            </div>
        );
    }
}

export default Questionnary;

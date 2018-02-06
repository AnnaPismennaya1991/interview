// весь опросник с названием и вопросами
import React, { Component } from 'react';

import Question from '../question/Question';
import TitleQuestionnary from '../common/title/TitleQuestionnary'

class Questionnary extends Component {
    render() {
        return (
            <div>
                <TitleQuestionnary id='questionnaryEating' />
                <Question type='select' id='quantityEating' />
                {/* <Question type='checkbox' id={1} /> */}
            </div>
        );
    }
}

export default Questionnary;

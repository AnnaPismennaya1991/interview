import React, { Component } from 'react';

import Question from '../question/Question';

class Questionnary extends Component {
    render() {
        return (
            <div>
                <Question type='select' id={0} />
                {/* <Question type='select' id={0} />
                <Question type='select' id={0} />
                <Question type='select' id={0} />
                <Question type='select' id={0} />
                <Question type='select' id={0} /> */}
            </div>
        );
    }
}

export default Questionnary;

import React, { Component } from 'react';

import Question from '../question/Question';

class Questionnary extends Component {
    render() {
        return (
            <div>
                <Question type='select' id={0} />
                {/* <Question type='checkbox' id={1} /> */}
                {/* <Question type='checkbox' id={2} />
                <Question type='checkbox' id={3} />
                <Question type='checkbox' id={4} />
                <Question type='checkbox' id={5} /> */}
            </div>
        );
    }
}

export default Questionnary;

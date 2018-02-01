import React from 'react';
import './Content.css';

import Questionnary from '../questionnary/Questionnary'

const Content = () => {
    return (
        <div>
            <div className='title'>
                <h1>Привычки питания</h1>
                <div className='title-div'>Здравствуйте,<br/><br/>потратьте, пожалуйста, несколько минут своего времени на заполнение следующей анкеты.</div>
            </div>
            <Questionnary />
        </div>
    );
}

export default Content;

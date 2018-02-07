// таблица радио-кнопок
import React from 'react';

import Checkbox from '../checkbox/Checkbox';
import RadioGroup from '../radio/RadioGroup';
import './RadioTable.css';

const RadioTable = (props) => {

    return (
        <div className='Radio-table'>
            <div className='string'>
                <div className='column-1-empty'></div>
                    <div className='string-1-main'>
                        <div className='string-1'><span>Да</span></div>
                        <div className='string-1'><span>Время от времени</span></div>
                        <div className='string-1'><span>Нет</span></div>
                    </div>
            </div>
            <div className='string'>
                <div className='column-1'><span>Завтракаете?</span></div>
                <RadioGroup name='question-1' />
            </div>
            <div className='string'>
                <div className='column-1'><span>У Вас бывает чувство голода в течение дня?</span></div>
                <RadioGroup name='question-2' />
            </div>
            <div className='string'>
                <div className='column-1'><span>Едите мясо?</span></div>
                <RadioGroup name='question-3' />
            </div>
            <div className='string'>
                <div className='column-1'><span>Едите овощи?</span></div>
                <RadioGroup name='question-4' />
            </div>
            <div className='string'>
                <div className='column-1'><span>Едите фрукты?</span></div>
                <RadioGroup name='question-5' />
            </div>
            <div className='string' >
                <div className='column-1'><span>Едите молочные изделия?</span></div>
                <RadioGroup name='question-6' />
            </div>
            <div className='string'>
                <div className='column-1'><span>Едите сладoсти?</span></div>
                <RadioGroup name='question-7' />
            </div>
        </div>
    );
}

export default RadioTable;

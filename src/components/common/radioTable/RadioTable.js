// таблица радио-кнопок
import React from 'react';

import Checkbox from '../checkbox/Checkbox';
import './RadioTable.css';
import Radio from '../radio/Radio';

const RadioTable = (props) => {

    return (
        <div className='Radio-table'>
            <div className='string'>
                <div className='column-1-empty'></div>
                <div className='string-1'><span>Да</span></div>
                <div className='string-1'><span>Время от времени</span></div>
                <div className='string-1'><span>Нет</span></div>
            </div>
            <div className='string'>
                <div className='column-1'><span>Завтракаете?</span></div>
                <div className='column-checkbox'><span><Checkbox /></span></div>
                <div className='column-checkbox'><span><Checkbox /></span></div>
                <div className='column-checkbox'><span><Checkbox /></span></div>
            </div>
            <div className='string'>
                <div className='column-1'><span>У Вас бывает чувство голода в течение дня?</span></div>
                {/* <RadioGroup /> */}
            </div>
            <div className='string'>
                <div className='column-1'><span>Едите мясо?</span></div>
                <div className='column-checkbox'><span><Checkbox /></span></div>
                <div className='column-checkbox'><span><Checkbox /></span></div>
                <div className='column-checkbox'><span><Checkbox /></span></div>
            </div>
            <div className='string'>
                <div className='column-1'><span>Едите овощи?</span></div>
                <div className='column-checkbox'><span><Checkbox /></span></div>
                <div className='column-checkbox'><span><Checkbox /></span></div>
                <div className='column-checkbox'><span><Checkbox /></span></div>
            </div>
            <div className='string'>
                <div className='column-1'><span>Едите фрукты?</span></div>
                <div className='column-checkbox'><span><Checkbox /></span></div>
                <div className='column-checkbox'><span><Checkbox /></span></div>
                <div className='column-checkbox'><span><Checkbox /></span></div>
            </div>
            <div className='string' >
                <div className='column-1'><span>Едите молочные изделия?</span></div>
                <div className='column-checkbox'><span><Checkbox /></span></div>
                <div className='column-checkbox'><span><Checkbox /></span></div>
                <div className='column-checkbox'><span><Checkbox /></span></div>
            </div>
            <div className='string'>
                <div className='column-1'><span>Едите сладoсти?</span></div>
                <div className='column-checkbox'><span><Checkbox /></span></div>
                <div className='column-checkbox'><span><Checkbox /></span></div>
                <div className='column-checkbox'><span><Checkbox /></span></div>
            </div>
        </div>
    );
}

export default RadioTable;

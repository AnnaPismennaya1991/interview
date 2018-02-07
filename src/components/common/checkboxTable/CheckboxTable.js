// таблица чекбоксов
import React from 'react';
import './CheckboxTable.css';

const CheckboxTable = (props) => {

    return (
        <div className='Checkbox-table'>
            <div className='string'>
                <div className='column-1-empty'></div>
                <div className='string-1'><span>Да</span></div>
                <div className='string-1'><span>Время от времени</span></div>
                <div className='string-1'><span>Нет</span></div>
            </div>
            <div className='string'>
                <div className='column-1'><span>Завтракаете?</span></div>
                <div className='column-checkbox'><span>Чекбокс</span></div>
                <div className='column-checkbox'><span>Чекбокс</span></div>
                <div className='column-checkbox'><span>Чекбокс</span></div>
            </div>
            <div className='string'>
                <div className='column-1'><span>У Вас бывает чувство голода в течение дня?</span></div>
                <div className='column-checkbox'><span>Чекбокс</span></div>
                <div className='column-checkbox'><span>Чекбокс</span></div>
                <div className='column-checkbox'><span>Чекбокс</span></div>
            </div>
            <div className='string'>
                <div className='column-1'><span>Едите мясо?</span></div>
                <div className='column-checkbox'><span>Чекбокс</span></div>
                <div className='column-checkbox'><span>Чекбокс</span></div>
                <div className='column-checkbox'><span>Чекбокс</span></div>
            </div>
            <div className='string'>
                <div className='column-1'><span>Едите овощи?</span></div>
                <div className='column-checkbox'><span>Чекбокс</span></div>
                <div className='column-checkbox'><span>Чекбокс</span></div>
                <div className='column-checkbox'><span>Чекбокс</span></div>
            </div>
            <div className='string'>
                <div className='column-1'><span>Едите фрукты?</span></div>
                <div className='column-checkbox'><span>Чекбокс</span></div>
                <div className='column-checkbox'><span>Чекбокс</span></div>
                <div className='column-checkbox'><span>Чекбокс</span></div>
            </div>
            <div className='string' >
                <div className='column-1'><span>Едите молочные изделия?</span></div>
                <div className='column-checkbox'><span>Чекбокс</span></div>
                <div className='column-checkbox'><span>Чекбокс</span></div>
                <div className='column-checkbox'><span>Чекбоксv</span></div>
            </div>
            <div className='string'>
                <div className='column-1'><span>Едите сладoсти?</span></div>
                <div className='column-checkbox'><span>Чекбокс</span></div>
                <div className='column-checkbox'><span>Чекбокс</span></div>
                <div className='column-checkbox'><span>Чекбокс</span></div>
            </div>
        </div>
    );
}

export default CheckboxTable;

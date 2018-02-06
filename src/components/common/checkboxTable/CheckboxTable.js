// таблица чекбоксов
import React from 'react';
import './CheckboxTable.css';

const CheckboxTable = (props) => {

    return (
        <div className='Checkbox-table'>
            <div className='string'>
                <div className='column-1'></div>
                <div className='column-2'>Да</div>
                <div className='column-3'>Время от времени</div>
                <div className='column-4'>Нет</div>
            </div>
            <div className='string'>
                <div className='column-1'>Завтракаете?</div>
                <div className='column-2'>Чекбокс</div>
                <div className='column-3'>Чекбокс</div>
                <div className='column-4'>Чекбокс</div>
            </div>
            <div className='string'>
                <div className='column-1'>У Вас бывает чувство голода в течение дня?</div>
                <div className='column-2'>Чекбокс</div>
                <div className='column-3'>Чекбокс</div>
                <div className='column-4'>Чекбокс</div>
            </div>
            <div className='string'>
                <div className='column-1'>Едите мясо?</div>
                <div className='column-2'>Чекбокс</div>
                <div className='column-3'>Чекбокс</div>
                <div className='column-4'>Чекбокс</div>
            </div>
            <div className='string'>
                <div className='column-1'>Едите овощи?</div>
                <div className='column-2'>Чекбокс</div>
                <div className='column-3'>Чекбокс</div>
                <div className='column-4'>Чекбокс</div>
            </div>
            <div className='string'>
                <div className='column-1'>Едите фрукты?</div>
                <div className='column-2'>Чекбокс</div>
                <div className='column-3'>Чекбокс</div>
                <div className='column-4'>Чекбокс</div>
            </div>
            <div className='string' >
                <div className='column-1'>Едите молочные изделия?</div>
                <div className='column-2'>Чекбокс</div>
                <div className='column-3'>Чекбокс</div>
                <div className='column-4'>Чекбокс</div>
            </div>
            <div className='string'>
                <div className='column-1'>Едите сладoсти?</div>
                <div className='column-2'>Чекбокс</div>
                <div className='column-3'>Чекбокс</div>
                <div className='column-4'>Чекбокс</div>
            </div>
        </div>
    );
}

export default CheckboxTable;

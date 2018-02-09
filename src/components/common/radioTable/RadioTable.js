// таблица радио-кнопок
import React, { Component } from 'react';
import cx from 'classnames';

import RadioGroup from '../radio/RadioGroup';
import './RadioTable.css';

const getColumnClass = (index, hovered, selected) => {
    return cx({
        hovered: index === hovered && index !== selected,
        selected: index === selected,
        'string-1': true
    });
};

const getStringClass = (index, hovered, selected) => {
    return cx({
        hovered: index === hovered && index !== selected,
        selected: index === selected,
        'column-1': true,
    });
};

class RadioTable extends Component {
    state = { hovered: {}, selected: {} }

    setHovered = (string, column) => {
        this.setState({ hovered: { string, column } });
    }

    setSelected = (string, column) => {
        console.log('obj');
        this.setState({ selected: { string, column } });
    }

    render() {
        const { hovered, selected } = this.state;

        return (
            <div className='Radio-table'>
                <div className='string'>
                    <div className='column-1-empty'></div>
                    <div className='string-1-main'>
                        <div className={getColumnClass(1, hovered.column, selected.column)}><span>Да</span></div>
                        <div className={getColumnClass(2, hovered.column, selected.column)}><span>Время от времени</span></div>
                        <div className={getColumnClass(3, hovered.column, selected.column)}><span>Нет</span></div>
                    </div>
                </div>
                <div className='string'>
                    <div className={getStringClass(1, hovered.string, selected.string)}><span>Завтракаете?</span></div>
                    <RadioGroup name='question-1' onHover={(column) => this.setHovered(1, column)} onSelect={(column) => this.setSelected(1, column)} />
                </div>
                <div className='string'>
                    <div className={getStringClass(2, hovered.string, selected.string)}><span>У Вас бывает чувство голода в течение дня?</span></div>
                    <RadioGroup name='question-2' onHover={(column) => this.setHovered(2, column)} onSelect={(column) => this.setSelected(2, column)}/>
                </div>
                <div className='string'>
                    <div className={getStringClass(3, hovered.string, selected.string)}><span>Едите мясо?</span></div>
                    <RadioGroup name='question-3' onHover={(column) => this.setHovered(3, column)} onSelect={(column) => this.setSelected(3, column)}/>
                </div>
                <div className='string'>
                    <div className={getStringClass(4, hovered.string, selected.string)}><span>Едите овощи?</span></div>
                    <RadioGroup name='question-4' onHover={(column) => this.setHovered(4, column)} onSelect={(column) => this.setSelected(4, column)}/>
                </div>
                <div className='string'>
                    <div className={getStringClass(5, hovered.string, selected.string)}><span>Едите фрукты?</span></div>
                    <RadioGroup name='question-5' onHover={(column) => this.setHovered(5, column)} onSelect={(column) => this.setSelected(5, column)}/>
                </div>
                <div className='string' >
                    <div className={getStringClass(6, hovered.string, selected.string)}><span>Едите молочные изделия?</span></div>
                    <RadioGroup name='question-6' onHover={(column) => this.setHovered(6, column)} onSelect={(column) => this.setSelected(6, column)}/>
                </div>
                <div className='string'>
                    <div className={getStringClass(7, hovered.string, selected.string)}><span>Едите сладoсти?</span></div>
                    <RadioGroup name='question-7' onHover={(column) => this.setHovered(7, column)} onSelect={(column) => this.setSelected(7, column)}/>
                </div>
            </div>
        );
    }
}

export default RadioTable;

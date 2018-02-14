// таблица радио-кнопок
import React, { Component } from 'react';
import cx from 'classnames';

import radioGroup from './constants';
import RadioGroup from '../radio/RadioGroup';
import './RadioTable.css';

const getColumnClass = (column, hovered, selected) => {
    const selectedColumns = Object.values(selected);

    return cx({
        hovered: column === hovered && column !== selected,
        selected: selectedColumns.includes(column),
        'string-1': true
    });
};

const getStringClass = (string, hovered, selected) => {
    const selectedStrings = Object.keys(selected);

    console.log(selectedStrings);

    return cx({
        hovered: string === hovered && string !== selected,
        selected: selectedStrings.includes(`${string}`),
        'column-1': true,
    });
};

class RadioTable extends Component {
    state = { hovered: {}, selected: {} }

    setHovered = (string, column) => {
        this.setState({ hovered: { string, column } });
    }

    setSelected = (string, column) => {
        const { selected } = this.state;
        this.setState({ selected: { ...selected, [string]: +column }});
    }

    renderRadioGroups = () => {
        const { hovered, selected } = this.state;

        return radioGroup.radioTable_1.map((item, index) => {
            return (
                <div className='string' key={index}>
                    <div className={getStringClass(index + 1, hovered.string, selected)}><span>{ item.name }</span></div>
                    <RadioGroup name={ item.id }
                        onHover={(column) => this.setHovered(index + 1, column)}
                        onSelect={(column) => this.setSelected(index + 1, column)} />
                </div>
            );
        });
    };

    render() {
        const { hovered, selected } = this.state;

        return (
            <div className='Radio-table' onMouseLeave={() => this.setHovered(null, null)}>
                <div className='string'>
                    <div className='column-1-empty'></div>
                    <div className='string-1-main'>
                        <div className={getColumnClass(1, hovered.column, selected)}><span>Да</span></div>
                        <div className={getColumnClass(2, hovered.column, selected)}><span>Время от времени</span></div>
                        <div className={getColumnClass(3, hovered.column, selected)}><span>Нет</span></div>
                    </div>
                </div>
                { this.renderRadioGroups() }

            </div>
        );
    }
}

export default RadioTable;

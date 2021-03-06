// пролог - текст-приветствие, поле - имя, возраст, пол
import React, { Component } from 'react';
import { Input } from 'antd';

import Select from '../select/Select';
import selectData from '../select/constants';
import titlesData from './constants';

import './Prolog.css';

class Prolog extends Component {

    render() {
        return (
            <div className='prolog'>
                <div className='prolog-title'>
                    <h1>{ titlesData[this.props.id] }</h1>
                    <div className='prolog-intro'>Здравствуйте,<br/><br/>потратьте, пожалуйста, несколько минут своего времени на заполнение следующей анкеты.</div>
                </div>
                <div className='prolog-input'>
                    {/* addonBefore - подсказка */}
                    <Input addonBefore='Введите Ваше имя' />
                    <Input addonBefore='Введите Ваш возраст' />
                </div>
                <Select placeholder='Пол' dropdownClassName='dropdown-sex' items={selectData.sex} />
            </div>
        );
    }
}

export default Prolog;

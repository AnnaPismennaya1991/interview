// пролог - приветствие, имя, возраст, пол
import React, { Component } from 'react';
import { Input, Icon } from 'antd';

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
                    <Input addonBefore='Введите Ваше имя' />
                    <Input addonBefore='Введите Ваш возраст' />
                </div>
                <Select items={selectData.sex} />
            </div>
        );
    }
}

export default Prolog;

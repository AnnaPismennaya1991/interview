import React, { Component } from 'react';
import { Input, Icon } from 'antd';

import Select from '../select/Select';
import selectData from '../../../constants/select';
import titlesData from './constants';

import './TitleQuestionnary.css';

class TitleQuestionnary extends Component {

    render() {
        return (
            <div className='title-questionnary'>
                <div className='title'>
                    <h1>{ titlesData[this.props.id] }</h1>
                    <div className='title-div'>Здравствуйте,<br/><br/>потратьте, пожалуйста, несколько минут своего времени на заполнение следующей анкеты.</div>
                </div>

                <Input addonBefore='Введите Ваше имя' />

                <Input addonBefore='Введите Ваш возраст' />

                <Select items={selectData.sex}/>
            </div>
        );
    }
}

export default TitleQuestionnary;

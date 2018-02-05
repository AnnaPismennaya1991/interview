// выпадающий список
import React from 'react';
import { Select } from 'antd';
import 'antd/lib/select/style/index.css';

import './Select.css';

const Option = Select.Option;

const renderOptions = (items) => {
    return items.map((item, index) => {
        return <Option value={item.id} key={index}>{ item.name }</Option>;
    });
};

const SelectComponent = (props) => {

    return (
        <Select defaultValue={props.defaultValue} placeholder='Выберите'>
            { renderOptions(props.items) }
        </Select>
    );
}

export default SelectComponent;

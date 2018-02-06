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
        <Select dropdownClassName={props.dropdownClassName}
            defaultValue={props.defaultValue}
            placeholder={props.placeholder} >
            { renderOptions(props.items) }
        </Select>
    );
};

SelectComponent.defaultProps = {
    placeholder: 'Выберите'
};

export default SelectComponent;

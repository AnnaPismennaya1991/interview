// выпадающий список
import React from 'react';
import { Select } from 'antd';
import './Select.css';
import 'antd/lib/select/style/index.css';


const Option = Select.Option;

const data = [
    { id: '0', text: 'Выберите:' },
    { id: '0', text: 'Выберите:' },
    { id: '0', text: 'Выберите:' },
    { id: '0', text: 'Выберите:' },
    { id: '0', text: 'Выберите:' },
    { id: '0', text: 'Выберите:' },
    { id: '0', text: 'Выберите:' }
]

const SelectComponent = () => {
    return (
        <Select defaultValue="0">
            <Option value="0"></Option>
            <Option value="1">1 раз</Option>
            <Option value="2">2 раза</Option>
            <Option value="3">3 раза</Option>
            <Option value="4">4 раза</Option>
            <Option value="5">5 раз</Option>
            <Option value="6">Чаще 5 раз</Option>
        </Select>
    );
}

export default SelectComponent;
// className='select-component'

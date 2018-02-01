import React from 'react';
import { Select } from 'antd';

import 'antd/lib/select/style/index.css';

const Option = Select.Option;

const SS = () => {
    return (
        <Select defaultValue="1" >
            <Option value="0">1 раз</Option>
            <Option value="1">1 раз</Option>
            <Option value="2">1 раз</Option>
            <Option value="3">1 раз</Option>
        </Select>
    );
}

export default SS;

import React, { Component } from 'react';
import { Checkbox } from 'antd';
import 'antd/lib/checkbox/style/index.css';
import './Checkbox.css';

class CheckboxComponent extends Component {

    render() {
        return (
            <Checkbox className='Checkbox-mini'></Checkbox>
        );
    }
};

export default CheckboxComponent;

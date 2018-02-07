// выпадающий список
import React, { Component } from 'react';

import { Select } from 'antd';
import 'antd/lib/select/style/index.css';
import './Select.css';

const Option = Select.Option;

const renderOptions = (items) => {
    return items.map((item, index) => {
        return <Option value={item.id} key={index}>{ item.name }</Option>;
    });
};

class SelectComponent extends Component {
    state = { value: undefined }

    static defaultProps = {
        placeholder: 'Выберите'
    }

    onChange = (value) => {
        this.setState({ value });
    }

    render() {
        const className = this.state.value !== undefined ? 'select-active' : '';

        return (
            <Select dropdownClassName={this.props.dropdownClassName}
                defaultValue={this.props.defaultValue}
                placeholder={this.props.placeholder}
                onChange={this.onChange}
                className={className} >
                { renderOptions(this.props.items) }
            </Select>
        );
    }
};

export default SelectComponent;

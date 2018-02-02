import React, { Component } from 'react';
import { Input, Icon } from 'antd';
import 'antd/lib/input/style/index.css';

import './Input.css';

class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }
  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  }
  onChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
  }
  render() {
    const { userName } = this.state;
    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    console.log(suffix);
    console.log('obj');
    return (
      <Input
        placeholder="Введите Ваше имя"
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        suffix={suffix}
        value={userName}
        onChange={this.onChangeUserName}
        ref={node => this.userNameInput = node}
      />
    );
  }
}

export default InputComponent;

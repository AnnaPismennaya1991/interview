import React from 'react';

// import { Link } from 'react-router-dom';
import './Menu.css';

export default class MenuComponent extends React.Component {

    render() {
        return (
            <div className='menu-component'>
                {/* <Menu className='main-menu'
                    selectedKeys={[this.state.current]}
                    mode="horizontal">
                    <Menu.Item key="main">
                        <Link to='/'>
                            Главная
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="interview">Oпросник</Menu.Item>
                    <Menu.Item key="statistica">Статистика</Menu.Item>
                </Menu> */}
                <div>Главная</div>
                <div>Опросник</div>
                <div>Статистика</div>
            </div>
        );
    }
}

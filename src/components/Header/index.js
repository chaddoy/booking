import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Input } from 'antd';
import BKLogo from 'images/bk-logo.png';
import './styles';
import { HEADER_NAVS } from './constants';

const Search = Input.Search;

class Header extends Component {
  state = {
    'current' : null
  }

  handleClick = ( e ) => {
    this.setState( {
      'current' : e.key
    } );
  }

  render () {
    return (
      <Layout.Header className="bk-header">
        <NavLink to="/">
          <img
            className="bk-header-logo"
            src={BKLogo}
            alt=""
            width="55"
            onClick={() => this.handleClick( { 'key' : null } )}
          />
        </NavLink>

        <Search
          className="bk-header-search"
          placeholder="Search"
          onSearch={value => console.log(value)}
        />

        <div className="bk-header-menu-container">
          <Menu className="bk-header-menu"
            theme="dark"
            mode="horizontal"
            selectedKeys={[ `${this.state.current}` ]}
            onClick={this.handleClick}
            style={{ lineHeight: '60px' }}
          >
            {HEADER_NAVS.map( ( nav, key ) => (
              <Menu.Item key={key}>
                <NavLink to={nav.path} exact>{nav.name}</NavLink>
              </Menu.Item>
            ) )}
          </Menu>
        </div>
      </Layout.Header>
    );
  }
}

export default Header;

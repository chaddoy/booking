import React, { Component } from 'react';
import BKLogo from 'images/bk-logo.png';
import { Layout, Menu, Input } from 'antd';
import './styles';

const Search = Input.Search;

class Header extends Component {
  render() {
    return (
      <Layout.Header className="bk-header">
        <img className="bk-header-logo" src={BKLogo} alt="" width="55" />

        <Search
          className="bk-header-search"
          placeholder="Search"
          onSearch={value => console.log(value)}
        />

        <div className="bk-header-menu-container">
          <Menu className="bk-header-menu"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[]}
            style={{ lineHeight: '60px' }}
          >
            <Menu.Item key="1">AMENITIES</Menu.Item>
            <Menu.Item key="2">GALLERY</Menu.Item>
            <Menu.Item key="3">BOOK</Menu.Item>
          </Menu>
        </div>
      </Layout.Header>
    );
  }
}

export default Header;

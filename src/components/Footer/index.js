import React, { Component } from 'react';
import './styles.js';
import { Layout } from 'antd';

class Footer extends Component {
  render() {
    return (
      <Layout.Footer className="bk-footer">
        <div className="bk-footer-content">
          Test
        </div>
      </Layout.Footer>
    );
  }
}

export default Footer;

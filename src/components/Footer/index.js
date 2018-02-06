import React, { Component } from 'react';
import { Layout, Row, Col, Icon } from 'antd';
import './styles';
import { SOCIAL_MEDIAS } from './constants';
import { HEADER_NAVS } from 'components/Header/constants';

class Footer extends Component {
  render() {
    return (
      <Layout.Footer className="bk-footer">
        <div className="bk-footer-content">
          <Row>
            <Col span={4}>
              <ul className="bk-map-links">
                {HEADER_NAVS.map( ( item, key ) => (
                  <li key={key}>
                    <h3 className="bk-font-bignoddle bk-color-white">
                      {item.name}
                    </h3>
                  </li>
                ) )}
                </ul>
              </Col>
              <Col span={16}>
                <h3 className="bk-font-bignoddle bk-color-white">FEEDBACK</h3>
              </Col>
              <Col className="bk-text-align-right" span={4}>
                <h3 className="bk-font-bignoddle bk-color-white">SOCIAL</h3>
                {SOCIAL_MEDIAS.map( ( media, key ) => (
                  <Icon
                    key={key}
                    className="bk-margin mrg-5 mrg-all bk-cursor pointer bk-social-icons"
                    type={media.name}
                    style={{ fontSize: '20px', color: media.color }}
                  />
                ) )}
              </Col>
          </Row>
        </div>
      </Layout.Footer>
    );
  }
}

export default Footer;

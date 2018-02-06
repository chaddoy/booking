import React, { Component } from 'react';
import { Divider, Select, Card, Icon, Avatar } from 'antd';
import './styles';

const Option = Select.Option;
const { Meta } = Card;

class Gallery extends Component {
  render() {
    return (
      <div className="bk-gallery bk-content">
        <div className="bk-pull-right">
          <span
            className="bk-font-bignoddle bk-pull-left"
            style={{ fontSize: '18px', margin: '6px 10px 0px 0px' }}>
            SORT BY:
          </span>
          <Select
            className="bk-pull-right"
              defaultValue="top"
            size="large"
            style={{ width: '200px' }}
          >
            <Option value="top">
              <Icon className="bk-margin mrg-5 mrg-right" type="like-o" />
              Most Popular
            </Option>
            <Option value="date-asc">
              <Icon className="bk-margin mrg-5 mrg-right" type="arrow-up" />
              Date
            </Option>
            <Option value="date-desc">
              <Icon className="bk-margin mrg-5 mrg-right" type="arrow-down" />
              Date
            </Option>
          </Select>

          <div className="bk-clear"></div>
        </div>

        <div className="bk-clear"></div>
        <Divider />

        <Card
          className="bk-pull-left"
          style={{ width: 300 }}
          cover={<img alt="example" src="http://www.nikevision.com/resources/img/home/marquees/gs-marquee.jpg" />}
          actions={[
            <Icon type="setting" />,
            <Icon type="edit" />,
            <Icon type="ellipsis" />
          ]}
        >
          <Meta
            title="Card title"
            description="This is the description"
          />
          <Divider dashed />
          <div>
            #Test
          </div>
        </Card>

        <div className="bk-clear"></div>
      </div>
    );
  }
}

export default Gallery;

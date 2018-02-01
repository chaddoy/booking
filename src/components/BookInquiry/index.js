import React, { Component } from 'react';
import { Row, Col, Select, DatePicker, TimePicker, Button } from 'antd';
import './styles';

const Option = Select.Option;

class BookInquiry extends Component {
  render() {
    return (
      <div className="bk-date-inquiry">
        <Row>
          <Col className="bk-padding pad-5 pad-right" span={7}>
            <Select
              defaultValue="basketball"
              size="large"
              style={{ width: '100%' }}
            >
              <Option value="basketball">Basketball</Option>
              <Option value="volleyball">Volleyball</Option>
              <Option value="badminton">Badminton</Option>
            </Select>
          </Col>

          <Col className="bk-padding pad-5 pad-right pad-left" span={7}>
            <DatePicker className="bk-full-width" size="large" />
          </Col>

          <Col className="bk-padding pad-5 pad-right pad-left" span={7}>
            <TimePicker
              use12Hours
              format="h:mm a"
              size="large"
              style={{ width: '100%' }}
            />
          </Col>

          <Col className="bk-padding pad-5 pad-left" span={3}>
            <Button
              className="bk-full-width bk-bg-orange"
              type="primary"
              size="large"
              icon="arrow-right"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default BookInquiry;

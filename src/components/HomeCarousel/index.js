import React, { Component } from 'react';
import './styles.js';
import { Carousel } from 'antd';

class HomeCarousel extends Component {
  render() {
    return (
      <div className="bk-home-carousel">
        <Carousel autoplay draggable adaptiveHeight>
          <img src="http://www.nikevision.com/resources/img/home/marquees/gs-marquee.jpg" alt="" width="100%" />
          <img src="http://www.nikevision.com/resources/img/home/marquees/sb-justin-brock-retina.jpg" alt="" width="100%" />
          <img src="http://www.nikevision.com/resources/img/home/marquees/sb-sean-malto-retina.jpg" alt="" width="100%" />
          <img src="http://www.nikevision.com/resources/img/home/marquees/skylon-ace-xv-jr-retina.jpg" alt="" width="100%" />
          <img src="http://www.nikevision.com/resources/img/home/marquees/mens-training-traverse.jpg" alt="" width="100%" />
        </Carousel>
      </div>
    );
  }
}

export default HomeCarousel;

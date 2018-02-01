import React, { Component } from 'react';
import './styles.js';
import { Carousel } from 'antd';

const images = [
  'http://www.nikevision.com/resources/img/home/marquees/gs-marquee.jpg',
  'http://www.nikevision.com/resources/img/home/marquees/sb-justin-brock-retina.jpg',
  'http://www.nikevision.com/resources/img/home/marquees/sb-sean-malto-retina.jpg',
  'http://www.nikevision.com/resources/img/home/marquees/skylon-ace-xv-jr-retina.jpg',
  'http://www.nikevision.com/resources/img/home/marquees/mens-training-traverse.jpg'
 ];

class HomeCarousel extends Component {
  render() {
    return (
      <div className="bk-home-carousel">
        <Carousel autoplay draggable adaptiveHeight>
          {images.map( path => (
            <div
              className="bk-img-container"
              style={{ backgroundImage: `url(${ path })` }}
            >
              <img
                src={path}
                alt=""
                width="100%"
                style={{ visibility: 'hidden' }}
              />
            </div>
          ) )}
        </Carousel>
      </div>
    );
  }
}

export default HomeCarousel;

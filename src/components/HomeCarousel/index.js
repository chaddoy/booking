import React, { Component } from 'react';
import { Carousel } from 'antd';
import './styles';
import { IMAGES } from './constants';

class HomeCarousel extends Component {
  render() {
    return (
      <div className="bk-home-carousel">
        <Carousel autoplay draggable adaptiveHeight>
          {IMAGES.map( ( path, key ) => (
            <div
              key={key}
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

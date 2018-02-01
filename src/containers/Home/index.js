import React, { Component } from 'react';
import { Icon } from 'antd';
import './styles';
import { colors } from 'global-colors';
import { SOCIAL_MEDIAS } from './constants';

import Header from 'components/Header';
import HomeCarousel from 'components/HomeCarousel';
import BookInquiry from 'components/BookInquiry';
import Map from 'components/Map';
import Footer from 'components/Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeCarousel />

        <div className="bk-content">
          <h1 className="bk-font-bignoddle">BOOK THE COURT</h1>
          <BookInquiry />
        </div>

        <div className="bk-content-container bk-bg-lightgrey">
          <div className="bk-content">
            <h1 className="bk-font-bignoddle">LOCATION</h1>
            <Map />
          </div>
        </div>

        <div className="bk-content">
          <center>
            <h2 className="bk-font-bignoddle bk-small-text-break">
              FOLLOW THE COURT<br />FOR UPDATES
            </h2>

            <div className="bk-padding pad-10 pad-all">
              {SOCIAL_MEDIAS.map( ( media, key ) => (
                <Icon
                  key={key}
                  className="bk-margin mrg-10 mrg-all bk-cursor pointer"
                  type={media.name}
                  style={{ fontSize: '40px', color: media.color }}
                />
              ) )}
            </div>

            <div className="bk-padding pad-10 pad-all">
              Use the <b className="bk-color-orange">#TheCourtIligan</b>
            </div>
          </center>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;

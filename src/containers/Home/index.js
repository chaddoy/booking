import React, { Component } from 'react';
import './styles.js';

import Header from 'components/Header';
import HomeCarousel from 'components/HomeCarousel';
import BookInquiry from 'components/BookInquiry';
import Footer from 'components/Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeCarousel />
        <BookInquiry />
        <Footer />
      </div>
    );
  }
}

export default Home;

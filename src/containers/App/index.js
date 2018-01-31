import React, { Component } from 'react';
import './styles.js';

import Header from 'components/Header';
import HomeCarousel from 'components/HomeCarousel';
import Footer from 'components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomeCarousel />
        <Footer />
      </div>
    );
  }
}

export default App;

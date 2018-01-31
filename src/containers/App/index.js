import React, { Component } from 'react';
import './styles.js';

import Header from 'components/Header';
import HomeCarousel from 'components/HomeCarousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomeCarousel />
      </div>
    );
  }
}

export default App;
